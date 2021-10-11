import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

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

const OrderCompleted = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <p>Your order has successfully completed!</p>
      <p>Thanks for buying from us 😊</p>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push("/")}
      >
        go to homepage
      </Button>
    </div>
  );
};

export default OrderCompleted;
