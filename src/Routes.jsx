import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import TournamentsSeasonOne1x1 from './pages/tournaments/1x1/TournamentsSeasonOne1x1';
import TournamentsSeasonTwo1x1 from './pages/tournaments/1x1/TournamentsSeasonTwo1x1';
import TournamentsSeasonTree1x1 from './pages/tournaments/1x1/TournamentsSeasonTree1x1';
import TournamentsSeasonOne2x2 from './pages/tournaments/2x2/TournamentsSeasonOne2x2';
import TournamentsSeasonTwo2x2 from './pages/tournaments/2x2/TournamentsSeasonTwo2x2';
import TournamentsSeasonTree2x2 from './pages/tournaments/2x2/TournamentsSeasonTree2x2';
import TournamentsSeasonOne3x3 from './pages/tournaments/3x3/TournamentsSeasonOne3x3';
import PlayersProfile from './pages/PlayersProfile';
import BestPlayers from './pages/BestPlayers';
import Archive from './pages/Archive';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/tournaments/1x1" element={<TournamentsSeasonTree1x1 />} />
			<Route path="/tournaments/2x2" element={<TournamentsSeasonTree2x2 />} />
			<Route path="/tournaments/3x3" element={<TournamentsSeasonOne3x3 />} />
			<Route path='/archive' element={<Archive />} />
			<Route path='/archive/tournament/2x2/season/1' element={<TournamentsSeasonOne2x2 />} />
			<Route path='/archive/tournament/2x2/season/2' element={<TournamentsSeasonTwo2x2 />} />
			<Route path='/archive/tournament/1x1/season/1' element={<TournamentsSeasonOne1x1 />} />
			<Route path='/archive/tournament/1x1/season/2' element={<TournamentsSeasonTwo1x1 />} />
			<Route path="/players/profile" element={<PlayersProfile />} />
			<Route path="/best-players" element={<BestPlayers />} />
			<Route path="/rules" element={<Rules />} />
		</Routes>
	);
}

export default AppRoutes;
