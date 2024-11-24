import React, { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import TournamentsSeasonOne1x1 from './pages/tournaments/1x1/TournamentsSeasonOne1x1';
import TournamentsSeasonTwo1x1 from './pages/tournaments/1x1/TournamentsSeasonTwo1x1';
import TournamentsSeasonTree1x1 from './pages/tournaments/1x1/TournamentsSeasonTree1x1';
import TournamentsSeasonFour1x1 from './pages/tournaments/1x1/TournamentsSeasonFour1x1';
import TournamentsSeasonFive1x1 from './pages/tournaments/1x1/TournamentsSeasonFive1x1';
import TournamentsSeasonSix1x1 from './pages/tournaments/1x1/TournamentsSeasonSix1x1';
import TournamentsSeasonOne2x2 from './pages/tournaments/2x2/TournamentsSeasonOne2x2';
import TournamentsSeasonTwo2x2 from './pages/tournaments/2x2/TournamentsSeasonTwo2x2';
import TournamentsSeasonTree2x2 from './pages/tournaments/2x2/TournamentsSeasonTree2x2';
import TournamentsSeasonFour2x2 from './pages/tournaments/2x2/TournamentsSeasonFour2x2';
import TournamentsSeasonOne3x3 from './pages/tournaments/3x3/TournamentsSeasonOne3x3';
import PlayersProfile from './pages/PlayersProfile';
import BestPlayers from './pages/BestPlayers';
import Archive from './pages/Archive';
import DraftSeasonOne from './pages/draft/DraftSeasonOne';

function AppRoutes() {
	const location = useLocation();

	useEffect(() => {
		const html = document.documentElement;

		if (location.pathname === '/' || location.pathname === '/home') {
			html.style.backgroundImage = "url('/img/background/cr7-untd.jpg')";
			html.style.backgroundSize = 'cover';
			html.style.backgroundPosition = 'center';
			html.style.backgroundRepeat = 'no-repeat';
		} else {
			html.style.backgroundImage = '';
		}

		return () => {
			html.style.backgroundImage = '';
		};
	}, [location]);

	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/draft/season1" element={<DraftSeasonOne />} />
			<Route path="/tournaments/1x1" element={<TournamentsSeasonSix1x1 />} />
			<Route path="/tournaments/2x2" element={<TournamentsSeasonFour2x2 />} />
			<Route path="/tournaments/3x3" element={<TournamentsSeasonOne3x3 />} />
			<Route path='/archive' element={<Archive />} />
			<Route path='/archive/tournament/2x2/season/1' element={<TournamentsSeasonOne2x2 />} />
			<Route path='/archive/tournament/2x2/season/2' element={<TournamentsSeasonTwo2x2 />} />
			<Route path='/archive/tournament/2x2/season/3' element={<TournamentsSeasonTree2x2 />} />
			<Route path='/archive/tournament/1x1/season/1' element={<TournamentsSeasonOne1x1 />} />
			<Route path='/archive/tournament/1x1/season/2' element={<TournamentsSeasonTwo1x1 />} />
			<Route path='/archive/tournament/1x1/season/3' element={<TournamentsSeasonTree1x1 />} />
			<Route path='/archive/tournament/1x1/season/4' element={<TournamentsSeasonFour1x1 />} />
			<Route path='/archive/tournament/1x1/season/5' element={<TournamentsSeasonFive1x1 />} />
			<Route path="/players/profile" element={<PlayersProfile />} />
			<Route path="/best-players" element={<BestPlayers />} />
			<Route path="/rules" element={<Rules />} />
		</Routes>
	);
}

export default AppRoutes;
