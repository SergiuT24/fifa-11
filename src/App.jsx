import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Rules from "./pages/Rules"
import SeasonOne from "./pages/tournaments/open/2x2/SeasonOne"
import Tournaments from "./pages/Tournaments"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

function App() {
	return (
		<Router>
			<Header />
			<Routes>
				{/* <Route path="/" element={<Posts />} /> */}
				<Route path="/" element={<Home />} />
				<Route path="/home" element={<Home />} />
				<Route path="/tournaments/" element={<Tournaments />} />
				<Route path="/tournaments/open/2x2/season1" element={<SeasonOne />} />
				<Route path="/rules" element={<Rules />} />
			</Routes>
			<Footer />
		</Router>
	);
}


export default App

