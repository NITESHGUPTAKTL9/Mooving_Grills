import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCollections } from "../../redux/shop/shop.selector";

import MenuCard from "./Menucard";
import "./menubar.css";

const Menubar = ({ items }) => {
  const filteredItems = (category) =>
    items?.filter((item) => {
      return item.category?.toLowerCase().includes(category.toLowerCase());
    });

  const sortAlgo1 = (x, y) => {
    if (x.data[0].price < y.data[0].price) return -1;
    if (x.data[0].price > y.data[0].price) return 1;
    return 0;
  };

  return (
    <>
      <div>
        <h1 className="menu-header">Menu</h1>
      </div>
      <div id="pizza">
        <h2 className="menu-subheading">PIZZA</h2>
        <div className="menu-cards">
          {filteredItems("pizza")
            .sort(sortAlgo1)
            .map((item) => {
              return <MenuCard key={item.id} item={item} />;
            })}
        </div>
      </div>
      <div id="pasta">
        <h2 className="menu-subheading">PASTA</h2>
        <div className="menu-cards">
          {filteredItems("pasta")
            .sort(sortAlgo1)
            .map((item) => {
              return <MenuCard key={item.id} item={item} />;
            })}
        </div>
      </div>
      <div id="appetizers">
        <h2 className="menu-subheading">APPETIZERS</h2>
        <div className="menu-cards">
          {filteredItems("appetizers")
            .sort(sortAlgo1)
            .map((item) => {
              return <MenuCard key={item.id} item={item} />;
            })}
        </div>
      </div>
      <div id="desserts">
        <h2 className="menu-subheading">DESSERTS</h2>
        <div className="menu-cards">
          {filteredItems("desserts")
            .sort(sortAlgo1)
            .map((item) => {
              return <MenuCard key={item.id} item={item} />;
            })}
        </div>
      </div>
      <div id="drinks">
        <h2 className="menu-subheading">DRINKS/BEVERAGES</h2>
        <div className="menu-cards">
          {filteredItems("drinks/beverages")
            .sort(sortAlgo1)
            .map((item) => {
              return <MenuCard key={item.id} item={item} />;
            })}
        </div>
      </div>
      <div id="extra">
        <h2 className="menu-subheading">EXTRA TOPPINGS</h2>
        <div className="menu-cards">
          {filteredItems("extra toppings")
            .sort(sortAlgo1)
            .map((item) => {
              return <MenuCard key={item.id} item={item} />;
            })}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCollections,
});

export default connect(mapStateToProps, null)(Menubar);
