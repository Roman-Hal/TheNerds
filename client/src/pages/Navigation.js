import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import LogoNerds from "./LogoNerds.png";

const Navigation = () => {
const [ logName, setLogName ] = useState(false);

    return (
    <div className="navigation">
        <img className="logomain" src={LogoNerds} alt="Logo" />
        {/*<div className="logo">The Nerds</div>*/}
        <ul>
            <li>Logged as: Guest</li>
            {logName ? (<li><Link onClick={() => setLogName(false)} to="/" >Main</Link></li>) :
            (<li><Link onClick={() => setLogName(true) } to="/Loginmain">Login/Register</Link></li>)
    }
        </ul>
 </div>
    );
};
/*<li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Register</Link></li>*/
export default Navigation;