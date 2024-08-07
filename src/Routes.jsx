import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Tournaments1x1 from './pages/tournaments/1x1/Tournaments1x1'
import Tournaments2x2 from './pages/tournaments/2x2/Tournaments2x2';
import PlayersProfile from './pages/PlayersProfile';
import BestPlayers from './pages/BestPlayers';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/tournaments/1x1" element={<Tournaments1x1 />} />
			<Route path="/tournaments/2x2" element={<Tournaments2x2 />} />
			<Route path="/players/profile" element={<PlayersProfile />} />
			<Route path="/best-players" element={<BestPlayers />} />
			<Route path="/rules" element={<Rules />} />
		</Routes>
	);
}

export default AppRoutes;
