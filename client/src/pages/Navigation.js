import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Navigation = () => {
    return (
    <div className="navigation">
        <ul>
            <li><Link to="/Login">Login</Link></li>
            <li><Link to="/Signup">Register</Link></li>
        </ul>
 </div>
    );
};

export default Navigation;