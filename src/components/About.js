import React from "react";
// import App from "./App";
import { image } from "../data/user";



function About() {
  return (
    <div id="About">
      <h2>About Me</h2>
      <p>I Made This</p>
      <img src={image} alt="I made this" />
    </div>
  );
}

export default About;