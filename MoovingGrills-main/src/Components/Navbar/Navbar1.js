import { useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useCollectionData } from "react-firebase-hooks/firestore";

import { firestore } from "../../firebase";
import { updateCollections } from "../../redux/shop/shop.actions";

import "./Navbar1.css";

import { HiOutlineLocationMarker, HiOutlineMail } from "react-icons/hi";
import { BiPhone, BiHome } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faGoogle,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const Navbar1 = ({ updateCollections }) => {
  const [items, loading] = useCollectionData(
    firestore.collection("items").orderBy("name", "asc"),
    { idField: "id" }
  );

  useEffect(() => {
    if (!loading) {
      updateCollections(items);
    }
  }, [loading, items, updateCollections]);

  return (
    <div>
      <div className="navbar1-body" id="navbar1">
        <div className="topbar-left">
          <div className="topbar-icons">
            <a
              className="social-icons"
              href="https://goo.gl/maps/3nDf3NJewh6RSu7Z9"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineLocationMarker className="icon" />
            </a>
            <a
              className="social-icons"
              href="tel:+91 76699 69989"
              target="_blank"
              rel="noreferrer"
            >
              <BiPhone className="icon" />
            </a>
            <a
              className="social-icons"
              href="mailto:moovinggrills@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <HiOutlineMail className="icon" />
            </a>
            <Link to="/"> 
            <BiHome className="icon" /> </Link>
          </div>
          <div>
            <a href="/menubar">
              <button className="m-btn"> MENU </button>
            </a>
          </div>
        </div>
        <div className="topbar-right">
          <div className="topbar-span">
            <Link to="/"> <span> Home </span>{" "}
            </Link> 
            <a href="/#about"> 
            <span> About</span>{" "}
            </a>
            <a href="/#contact"> {" "}
            <span> Contact </span>{" "}
            </a>
            <a href="/#feedback">{" "}
            <span> Feedback </span>  </a> 
          </div>
          <div className="social-icons">
            <a
              href="/"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faYoutube}
                size="1x"
                className="hov-icon"
              />
            </a>
            <a
              href="/"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a
              href="/"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faTwitter}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a
              href="/"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a
              href="/"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                size="1x"
                className="hov-icon"
              />
            </a>{" "}
            <a
              href="mailto:moovinggrills@gmail.com"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGoogle} size="1x" className="hov-icon" />
            </a>{" "}
            <a
              href="/"
              target="_blank"
              className="youtube social"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faPinterest}
                size="1x"
                className="hov-icon"
              />
            </a>
          </div>
        </div>
      </div>
      <hr className="topbar-hr"></hr>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateCollections: (collecionsMap) =>
    dispatch(updateCollections(collecionsMap)),
});

export default connect(null, mapDispatchToProps)(Navbar1);
