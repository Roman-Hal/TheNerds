import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Form from "./AskQuestionForm";

const App = () => (
	<Routes>
		<Route path="/Form" element={<Form />} />
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<About />} />
	</Routes>
);

export default App;
