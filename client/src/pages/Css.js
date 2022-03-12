import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Css = () => {
  return (
    <main className="main" role="main">
          <h1>TheNerds APP</h1>
          <h1>CSS questions</h1>
          <button className="mainCatbtn">Add Question</button>
          <div className="questionsDiv">
        </div>
        <div>
            <Link to="/Main"><button className="mainCatbtn">Main Categories</button></Link>
        </div>
    </main>
  );
};

export default Css;