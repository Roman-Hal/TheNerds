import React, { useState } from "react";

import Login from "./Login";
import Signup from "./Signup";
import Navigation from "./Navigation";
import Footer from "./Footer";

//import "./Loginmain.css";
import "./Loginmaintest.css";


const Loginmain = () => {
    /*const logout = () => {
      window.localStorage.clear();
      navigate("/");
    };*/
    const [ loginOpen, setLoginOpen ] = useState(true);
    const [ registerOpen, setRegisterOpen ] = useState(false);

    const showLoginBox = () => {
      setLoginOpen(true);
      setRegisterOpen(false);
    };

    const showRegisterBox = () => {
      setLoginOpen(false);
      setRegisterOpen(true);
    };

    /*const onMouse = () => {
     this.{ backgroundColor: "red" };
    };*/

    return (
      <main className="upmain">
        <Navigation />
      <div className="root-container">
        <div className="box-controller">
          <div aria-hidden="true" className={"controller " + (loginOpen ? "selected-controller" : "")} role="menuitem" onClick={ showLoginBox }  >
            Login
          </div>
          <div aria-hidden="true" className={"controller " + (registerOpen ? "selected-controller" : "")} role="menuitem" onClick={ showRegisterBox } >
            Register
            </div>
        </div>
        <div className="box-container">
          { loginOpen ? <Login /> : registerOpen ? <Signup /> : null }
      </div>
      </div>
        <Footer  />
      </main>
    );
};

    /*return (
          <main className="main" role="main">
                  <Login />
                  <Signup />
          </main>
      );
  };*/

  export default Loginmain;