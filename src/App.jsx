import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Logo from "./components/Menu/Logo"
import Menu from "./components/Menu/Menu"
import Posts from "./components/Posts/Posts"
import Rules from "./components/Menu/Rules/Rules"


function App() {
	return (
		<Router>
			<Logo />
			<Menu />
			<Routes>
				<Route path="/" element={<Posts />} />
				<Route path="/rules" element={<Rules />} />
			</Routes>
		</Router>
	);
}


export default App

