import { useState } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import Divider from "@material-ui/core/Divider";
import AlertDialog from "../WarningDialogBox/warning-dialog-box";

import { useStyles } from "./checkout.styles";

const CheckoutTotal = ({ total, proceed }) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            Item Details
          </Typography>
          <Typography className={classes.text} variant="body2" component="p">
            <span>Total</span> <span>{formattedPrice(total)}</span>
          </Typography>
          <Typography className={classes.text} variant="body2" component="p">
            <span>Subtotal</span> <span>{formattedPrice(total)}</span>
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            className={classes.content}
            color="primary"
            variant="contained"
            onClick={proceed}
          >
            Proceed for Order Details
          </Button>
        </CardActions>
        <Divider />
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <LocalOfferIcon
              style={{
                fontSize: "18px",
                transform: "rotate(90deg)",
                margin: "0 5px 0 0",
              }}
            />
            Coupon
          </Typography>
          <TextField
            className={classes.content}
            id="coupon"
            label="Coupon code"
          />
        </CardContent>
        <CardActions>
          <Button className={classes.content} variant="contained">
            Apply Coupon
          </Button>
        </CardActions>
      </Card>
      <AlertDialog open={open} handleClose={handleClose} />
    </>
  );
};

export default CheckoutTotal;
