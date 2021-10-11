import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { useStyles } from "./checkout.styles";

import CheckoutItem from "../CheckoutItem/checkout-item.component";
import CheckoutTotal from "./checkout-total.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

const CheckoutItems = ({ cartItems, total, onProceed }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
      </div>
      <div className={classes.checkoutTotal}>
        <CheckoutTotal total={total} proceed={onProceed} />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutItems);
