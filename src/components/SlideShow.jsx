import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "../styles/SlideShow.css";
import "../styles/HeaderSection.css";
import "../styles/Content.css"
const data = [
  {
    url: "../../Section_2/bar-cafe-caffeine.jpg",
    title: "NEW ARTICLE IS LIVE",
    subTitle:
      "Health Check: why do I get a headache when I haven’t had my coffee?",
    content:
      "It is a paradisematic country, in which roasted parts of sentences fly into your mouth.",
    buttonText: "READ THE FULL STORY",
  },
  {
    url: "../../Section_2/Blog Pic Head 1.jpg",
    title: "NEW STORE OPENED",
    subTitle: "We're in London",
    content:
      "Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.",
    buttonText: "EXPLORE OUR OFFICES",
  },
];
const SlideShow = () => {
  return (
    <Carousel
      className="slide"
      showThumbs={false}
      showStatus={false}
      infiniteLoop
    >
      {data.map(({ url, title, subTitle, content, buttonText }) => (
        <div className="slideContainer" key={url}>
          <img className="slideImage" src={url} alt={title} />
          <div className="textOverlay">
            <h4 className="smallTitle2">{title}</h4>
            <h3 className="first-para">{subTitle}</h3>
            <p className="content">{content}</p>
            <button className="casual-button2">{buttonText}</button>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default SlideShow;
