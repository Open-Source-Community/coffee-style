import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"
const Footer = () => {
  return (
    <div className="footer">
      <div className="inlineBlock firstRow">
        <img className="coffeeImage firstCol" src="./CoffeeStyle Logo.png" alt="Header-Pic" width={"110px"} height={"25px"} />
        <p className="secondCol decoratedParagraph1">
          Delivering the best coffee life since 1996. From coffee geeks to the
          real ones.
        </p>
        <p className="thirdCol decoratedParagraph4">CoffeeStyle Inc. © 1996</p>
        <p className="fourthCol">MENU</p>
      </div>
      <div className="secondRow">
        <ul className="firstCol decoratedList">
          <li>
            <Link className="textDecoration" to="/">Home</Link>
          </li>
          <li>
            <Link className="textDecoration" to="/OurProducts">Our Products</Link>
          </li>
          <li>
            <Link className="textDecoration" to="/About">About</Link>
          </li>
          <li>
            <Link className="textDecoration" to="/Contact">Contact</Link>
          </li>
          <li>
            <Link className="textDecoration" to="/Styleguide">Styleguide</Link>
          </li>
        </ul>
        <p className="secondCol decoratedParagraph2">FOLLOW US</p>
        <ul className="listAtEnd thirdCol decoratedList">
          <li>
            <a className="textDecoration" href="@">Facebook</a>
          </li>
          <li>
            <a className="textDecoration" href="@">Instagram</a>
          </li>
          <li>
            <a className="textDecoration" href="@">Pinterest</a>
          </li>
          <li>
            <a className="textDecoration" href="@">Twitter</a>
          </li>
        </ul>
        <p className="fourthCol">CONTACT US</p>
      </div>
      <div className="thirdRow">
        <p className="firstCol textDecoration1">We’re Always Happy to Help</p>
      </div>
      <div className="fourthRow">
        <a className="firstCol decoratedUrl" href="@">us@coffeestyle.io</a>
        <a className="secondCol decoratedParagraph3" href="@">Powered by Webflow</a>
      </div>
    </div>
  );
};

export default Footer;
