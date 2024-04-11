import React from "react";
import "../styles/Subscribe.css";
import "../styles/MoreProducts.css";

const Subscribe = () => {
  return (
    <div className="SubsribeContainer">
      <p className="SignupTitle">SIGN UP AND GET FREE COFFEE BAGS</p>
      <p className="coffeeUpdates">Coffee Updates</p>
      <div>
        <input class="subInput height" type="text" name="" placeholder="CUSTOMER@COFFEESTYLE.IO" id="" />
        <button class="subButton height">SUBSCRIBE</button>
      </div>
    </div>
  );
};

export default Subscribe;
