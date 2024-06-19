import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Logo from "./components/Menu/Logo"
import Menu from "./components/Menu/Menu"
import Rules from "./components/Menu/Rules/Rules"
import Home from "./components/Menu/Home/Home"
import EndedCompetition from "./components/Menu/Ended-Competitions/EndedCompetition"
import LiveCompetition from "./components/Menu/Live-Competition/LiveCompetition"

function App() {
	return (
		<Router>
			<Logo />
			<Menu />
			<Routes>
				{/* <Route path="/" element={<Posts />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/live-competition" element={<LiveCompetition />} />
				<Route path="/ended-competitions" element={<EndedCompetition />} />
				<Route path="/rules" element={<Rules />} />
			</Routes>
		</Router>
	);
}


export default App

