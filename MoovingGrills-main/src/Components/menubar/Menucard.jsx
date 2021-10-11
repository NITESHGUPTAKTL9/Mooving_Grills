import { useState } from "react";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";

import { addItem } from "../../redux/cart/cart.actions";
import Sizedropdown from "./Sizedropdown";
import "./Menucard.css";

const MenuCard = ({ item, addItem }) => {
  const history = useHistory();
  const { id, name, category, data, description } = item;
  const [added, setAdded] = useState(false);
  const [price, setPrice] = useState(data[0].price);

  const formattedPrice = (price) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(price);

  const selected = data.find((ctx, i) => `${ctx.price}` === `${price}`);

  const itemToBeAdded = {
    id: `${id}+${selected.size}`,
    name: name,
    size: selected.size,
    price: price,
    category: category,
    imageUrl: "https://www.dominos.co.in/files/items/Farmhouse.jpg",
  };

  return (
    <div className="new-card-wrapper">
      <div
        style={{ cursor: "pointer", display: "flex", flexDirection: "column" }}
      >
        <img
          src="https://www.dominos.co.in/files/items/Farmhouse.jpg"
          alt="item img"
        />
        <span>{category.toUpperCase()}</span>
        <h5>{name}</h5>
        <h6>{description}</h6>
      </div>

      <strong style={{ fontSize: "14px" }} className="price-card">
        {formattedPrice(price)}
      </strong>
      <br />
      <div>
        <Sizedropdown
          data={data}
          handleSize={(val) => {
            setAdded(false);
            setPrice(val);
          }}
        />
      </div>
      {added ? (
        <Button
          className="menucard_btn"
          variant="contained"
          color="primary"
          size="large"
          onClick={() => history.push(`/view-items`)}
        >
          View Items
        </Button>
      ) : (
        <Button
          className="menucard_btn"
          variant="contained"
          color="primary"
          size="large"
          onClick={() => {
            addItem(itemToBeAdded);
            setAdded(true);
          }}
        >
          Add to Basket
        </Button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(MenuCard);
