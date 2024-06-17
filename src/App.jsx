import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Logo from "./components/Menu/Logo"
import Menu from "./components/Menu/Menu"
import Rules from "./components/Menu/Rules/Rules"
import Home from "./components/Menu/Home/Home"
import ClosedCompetition from "./components/Menu/Closed-Competitions/ClosedCompetition"


function App() {
	return (
		<Router>
			<Logo />
			<Menu />
			<Routes>
				{/* <Route path="/" element={<Posts />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/rules" element={<Rules />} />
				<Route path="/closed-competitions" element={<ClosedCompetition />} />
			</Routes>
		</Router>
	);
}


export default App

