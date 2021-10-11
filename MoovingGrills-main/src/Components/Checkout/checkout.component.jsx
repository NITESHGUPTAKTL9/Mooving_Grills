import MainStepper from "../Stepper/MainStepper";

import { useStyles } from "./checkout.styles";

const CheckoutPage = () => {
  const classes = useStyles();

  return (
    <div className="checkout-body">
      <h2
        className="checkout-heading"
        style={{ textAlign: "center", color: "black" }}
      >
        YOUR ITEMS 🍕
      </h2>
      <div className={classes.root}>
        <MainStepper />
      </div>
    </div>
  );
};

export default CheckoutPage;
