import { useState, Fragment } from "react";
import { useHistory } from "react-router-dom";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

import { GiHamburgerMenu } from "react-icons/gi";
import { FaShoppingCart } from "react-icons/fa";

const useStyles = makeStyles({
  list: {
    width: 250,
    zIndex: 100,
  },
  fullList: {
    width: "auto",
  },
});

export default function SideBar() {
  const classes = useStyles();
  const history = useHistory();
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          { text: "Menu", url: "menubar" },
          { text: "Home", url: "" },
        ].map((ob, index) => (
          <ListItem
            button
            key={ob.text}
            onClick={() => history.push(`/${ob.url}`)}
          >
            <ListItemText primary={ob.text} />
          </ListItem>
        ))}
        {[
          { text: "About", url: "#about" },
          { text: "Contact", url: "#contact" },
          { text: "Feedback", url: "#feedback" },
        ].map((ob, index) => (
          <ListItem button component="a" key={ob.text} href={ob.url}>
            <ListItemText primary={ob.text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {[{ text: "View Items", url: "view-items" }].map((ob, index) => (
          <ListItem
            button
            key={ob.text}
            onClick={() => history.push(`/${ob.url}`)}
          >
            <ListItemIcon>
              <FaShoppingCart />
            </ListItemIcon>
            <ListItemText primary={ob.text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <GiHamburgerMenu className="logo-mid" />
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </Fragment>
      ))}
    </div>
  );
}
