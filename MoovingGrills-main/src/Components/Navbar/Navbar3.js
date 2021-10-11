import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CartIcon from "../CartIcon/CartIcon";
import CartDropdown from "../CartDropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./Navbar3.css";

const Navbar3 = ({ hidden }) => {
  return (
    <>
      <div className="navbar3-body">
        <a href="/menubar#pizza">
          <span> Pizza </span>
        </a>
        <a href="/menubar#pasta">
          <span> Pasta </span>
        </a>
        <a href="/menubar#desserts">
          <span> Desserts </span>
        </a>
        <a href="/menubar#appetizers">
          <span> Appetizers </span>
        </a>
        <a href="/menubar#drinks">
          <span> Drinks/Beverages </span>
        </a>
        <a href="/menubar#extra">
          <span> Extra Toppings </span>
        </a>
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Navbar3);
