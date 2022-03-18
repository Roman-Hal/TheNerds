import { Route, Routes } from "react-router-dom";

import SelectedQtnThread from "./pages/AnswerThreads/SelectedQstThread";
import ListedQtnThread from "./components/ListedQtnThread/ListedQthThread";
import { questionsData } from "./mock/data.js";

//import About from "./pages/About";
import Home from "./pages/Home";

const App = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/questions/answers" element={<SelectedQtnThread questionsData={questionsData} id={1} />} />
		<Route path="/questions" element={<ListedQtnThread />} />
	</Routes>
);

export default App;
