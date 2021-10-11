import React from "react";

import "./footer.css";

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
import { Link } from "react-router-dom";

export const Footer = (props) => {
  return (
    <>
      <div className="footer__body">
        <footer className="footer">
          <div className="container__footer">
            <div className="row__footer">
              <div className="footer-col logo_footer">
                <img
                  className="footer__logo"
                  src="Images/logo.png"
                  alt="loftyLogo"
                />
                <p className="copy">
                  Copyright 2021 © Mooving Grills | All Rights Reverved.
                </p>
              </div>
              <div className="footer-col">
                <h4 className="footer_p">Need help?</h4>
                <ul className="ul need-help-ul">
                  <li>
                    <a href ="/#about"> About</a>
                  </li>
                  <li>
                    <a href ="/#contact">Contact</a>
                  </li>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/testimonial">Testimonial</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4 className="footer_p need-help-ul">Payment Options</h4>
                <ul>
                  <li>
                    <img
                      className="payment__image"
                      src="https://firebasestorage.googleapis.com/v0/b/loftydreams-307f2.appspot.com/o/paymentPolicy%2FE-Wallets.jpg?alt=media&token=2bea83c8-d07a-4d6e-be85-eeb9fd67a35c"
                      alt="paymentImage"
                    />
                  </li>
                  <li>
                    <p className="footer_p">
                      Accept Almost All Payment Modes Like:- UPI, Bharat QR,
                      Credit Card, Debit Card, 50+ Inter-Net Banking, Mobile
                      Wallets
                    </p>
                  </li>
                </ul>
              </div>

              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-icons-footer">
                  <a
                    href="/"
                    target="_blank"
                    className="youtube social"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      size="1x"
                      className="youtube"
                    />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className=" social"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faFacebook}
                      size="1x"
                      className="facebook"
                    />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="youtube social"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      size="1x"
                      className="twitter"
                    />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="youtube social"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      size="1x"
                      className="instagram"
                    />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="youtube social"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size="1x"
                      className="linkedin"
                    />
                  </a>
                  <a
                    href="mailto:moovinggrills@gmail.com"
                    target="_blank"
                    className="youtube social"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faGoogle}
                      size="1x"
                      className="google"
                    />
                  </a>
                  <a
                    href="/"
                    target="_blank"
                    className="youtube social"
                    rel="noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faPinterest}
                      size="1x"
                      className="pinterest"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="scroll-container">
        <a href="#navbar1">
          <button className="scroll-btn">
            <img
              src="https://img.icons8.com/color/48/000000/circled-up-2--v2.png"
              alt="scroll up"
            />
          </button>
        </a>
      </div>
    </>
  );
};
