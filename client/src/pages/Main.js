//import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Main = () => {
  return (
      <main className="main" role="main">
          <h1>TheNerds APP</h1>
          <h1>Choose category of question</h1>
          <h2>Category:</h2>
    <div id="categoryDiv" >
        <Link to="/Javascript"><button className="categoryBtn">Javascript</button></Link>
        <Link to="/Html"><button className="categoryBtn">HTML</button></Link>
        <Link to="/Css"><button className="categoryBtn">CSS</button></Link>
    </div>
    <div>
        <Link to="/"><button>Logout</button></Link>
    </div>
    </main>
  );
};

export default Main;