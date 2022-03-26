//import React from "react";
//import { Link } from "react-router-dom";
import Navigation from "./Navigation";
//import SelectedQtnThread from "./SelectedQtnThread/SelectedQtnThread";
//import ListedQtnThread from "../components/ListedQtnThread/ListedQtnThread";
import "./Home.css";
//import { questionsData } from "../mock/data";
import Footer from "./Footer";


const Main = () => {
  /*const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };*/

  //const onClick = () => {
    //Navigate( { Onequestion } );
    //<Link to="/Onequestion" />;
  //};

  return (
    <div className="containermain" >
      <Navigation />
		<main className="main" role="main">
			<div className="top">
				<h1>TheNerds APP</h1>
				<h1>Main</h1>
			</div>
			<div className="questionsDiv">
				{/* ADD question module in this div */}
				{/*<SelectedQtnThread questionsData={questionsData} id={1} />*/}
				{/* <ListedQtnThread /> */}
			</div>
		</main>
    <Footer />
    </div>
	);
};

  /*return (
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
        <Link to="/Login"><button>Logout</button></Link>
    </div>
    </main>
  );
};*/
//<button>Logout</button>
export default Main;