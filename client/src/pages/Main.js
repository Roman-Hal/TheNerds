//import React from "react";
//import { Link } from "react-router-dom";
import Navigation from "./Navigation";
import SelectedQtnThread from "../components/SelectedQtnThread/SelectedQtnThread";
import ListedQtnThread from "../components/ListedQtnThread/ListedQtnThread";
import Pagination from "../components/Pagination/Pagination";
import "./Home.css";
import { useState } from "react";
// import AskQuestion from "../components/AskQuestion/AskQuestion";
import AskQuestionForm from "../components/AskQuestionForm/AskQuestionForm";

const Main = () => {
  /*const logout = () => {
    window.localStorage.clear();
    navigate("/");
  };*/
  const [id, setId] = useState(null);
  const [show, setShow] = useState(false);


  const handleShow = () => {
    setShow(!show);
  };


  return (
      <main className="main" role="main">
				<Navigation />
				{show === true && <AskQuestionForm show={show} />}
				<button className="btn btn-danger" onClick={handleShow}>Ask Question</button>
				<div className="top">
					<h1>TheNerds APP</h1>
				</div>
				<div className="questionsDiv">
					{/* ADD question module in this div */}
					{typeof id === "number" && <SelectedQtnThread id={id} />}
					<ListedQtnThread
						onPressQuestion={(questionId) => setId(questionId)}
					/>
					<Pagination />
				</div>
			</main>
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