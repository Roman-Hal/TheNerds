import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";

import Form from "./AskQuestionForm";

import Main from "./pages/Main";
import Signup from "./pages/Signup";
import Javascript from "./pages/Javascript";
import Css from "./pages/Css";
import Html from "./pages/Html";


const App = () => (
	<Routes>
		<Route path="/Form" element={<Form />} />
		<Route path="/" element={<Home />} />
		<Route path="/Main" element={<Main />} />
		<Route path="/Signup" element={<Signup />} />
		<Route path="/Javascript" element={<Javascript />} />
		<Route path="/Css" element={<Css />} />
		<Route path="/Html" element={<Html />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
