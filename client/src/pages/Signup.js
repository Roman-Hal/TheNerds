import React from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const Signup = () => {
  return (
    <main className="main" role="main">
			<div>
				<h1>TheNerds APP</h1>
				<form>
					<div>
						<label htmlFor='fname' className="formLabel">Name</label>
						<input type="text" id='username' placeholder='fname' className="formInput" />
					</div>
                    <div>
						<label htmlFor='lname' className="formLabel">Surname</label>
						<input type="text" id='username' placeholder='lname' className="formInput" />
					</div>
                    <div>
						<label htmlFor='email' className="formLabel">E-mail</label>
						<input type="email" id='username' placeholder='email' className="formInput" />
					</div>
					<div>
						<label htmlFor='password' className="formLabel">Password</label>
						<input type="password" id='password' placeholder='Password' className="formInput" />
					</div>
					</form>
				<Link to="/"><button>Sign Up</button></Link>
			</div>
		</main>
  );
};

export default Signup;