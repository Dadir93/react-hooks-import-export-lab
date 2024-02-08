import React from "react";
import App from "./App";
import {username, city} from "../data/user";


function Home() {
  return (
    <div id="home">
      <h1>
        {username} is a Web Developer from {city}
      </h1>
    </div>
  );
}

// Exporting variables using CommonJS module syntax



export default Home;