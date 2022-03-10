import { Route, Routes } from "react-router-dom";

import SelectedQtnThread from "./SelectedQstThread";

import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/about/this/site" element={<SelectedQtnThread id={1} />} />
	</Routes>
	// <SelectedQtnThread />
);

export default App;
