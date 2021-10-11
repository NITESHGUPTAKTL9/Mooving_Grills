import { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import { firestore } from "../../firebase";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#ffffff",
    borderRadius: "5px",
    maxWidth: "500px",
    margin: "10px auto",
    padding: "10px",
    "& > *": {
      width: "100%",
      margin: "8px 0",
    },
  },
}));

const OrderDetails = ({ cartItems, total, onProceed }) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [processing, setProcessing] = useState(false);

  console.log(cartItems);

  const handleSubmit = (e) => {
    setProcessing(true);
    e.preventDefault();
    if (true) {
      firestore
        .collection("orders")
        .add({
          customer: {
            address,
            email,
            name,
            phone,
          },
          items: cartItems.map((item) => ({
            category: item.category,
            name: item.name,
            pricePer: item.price,
            qty: item.quantity,
            size: item.size,
            totalPrice: +item.price * item.quantity,
          })),
          totalPrice: total,
        })
        .then((data) => {
          onProceed();
        });
    }
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit} autoComplete="off">
      <h3>Order Details</h3>
      <TextField
        id="name"
        label="Name"
        type="text"
        variant="outlined"
        required
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        id="phone"
        label="Phone no"
        type="phone"
        variant="outlined"
        required
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <TextField
        id="email"
        label="Email"
        type="email"
        variant="outlined"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        id="address"
        label="Address"
        type="text"
        variant="outlined"
        required
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <Button
        disabled={processing}
        type="submit"
        variant="contained"
        color="primary"
      >
        Submit
      </Button>
    </form>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(OrderDetails);
