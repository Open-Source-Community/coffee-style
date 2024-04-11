import React from "react";
import FeaturedMugs from "../components/FeaturedMugs";
import MoreProducts from "../components/MoreProducts";
import Offer from "../components/Offer";
import "../styles/Content.css";

const Content = () => {
  return (
    <div>
      <p className="first-para">
        Even the all-powerful Pointing has no control about <br /> the blind
        texts.
      </p>
      <p className="second-para">
        It is a paradisematic country, in which roasted parts of sentences fly
        into your mouth. Even the all-powerful Pointing has no control
        about the blind texts it is an almost unorthographic life One day however a small line of blind text by
        the name of Lorem Ipsum decided to leave for the far World of Grammar.
      </p>
      <a href="@" className="story">
        Read the full Story
      </a>
      <FeaturedMugs />
      <MoreProducts display={true} />
      <Offer />
    </div>
  );
};

export default Content;
