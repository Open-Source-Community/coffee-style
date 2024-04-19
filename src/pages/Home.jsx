import React from "react";
import HeaderSection from "../components/HeaderSection";
import Content from "../components/Content";
import Parallel from "../components/Parallel";
import Cards from "../components/Cards";
import Subscribe from "../components/Subscribe";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="homePage">
        <HeaderSection />
        <Content />
        <Parallel />
        <Cards />
        <Subscribe />
    </div>
  );
};

export default Home;
