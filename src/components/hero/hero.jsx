import React from "react";
import Header from "./header/header";
import "./hero.css";
import Presentation from "./presentation/presentation";
import HeroFoot from "./herofoot/herofoot";
const Hero = () => {
  return (
    <div className="hero">
      <Header></Header>
      <Presentation></Presentation>
      <HeroFoot></HeroFoot>
    </div>
  );
};

export default Hero;
