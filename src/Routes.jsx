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
import TournamentsSeasonSeven1x1 from './pages/tournaments/1x1/TournamentsSeasonSeven1x1';
import TournamentsSeason81x1 from './pages/tournaments/1x1/TournamentsSeason81x1';
import TournamentsSeason91x1 from './pages/tournaments/1x1/TournamentsSeason91x1';
import TournamentsSeason101x1 from './pages/tournaments/1x1/TournamentsSeason101x1';
import TournamentsSeason111x1 from './pages/tournaments/1x1/TournamentsSeason111x1';
import TournamentsSeason121x1 from './pages/tournaments/1x1/TournamentsSeason121x1';
import TournamentsSeason131x1 from './pages/tournaments/1x1/TournamentsSeason131x1';
import TournamentsSeason141x1 from './pages/tournaments/1x1/TournamentsSeason141x1';
import TournamentsSeason151x1 from './pages/tournaments/1x1/TournamentsSeason151x1';
import TournamentsSeason161x1 from './pages/tournaments/1x1/TournamentsSeason161x1';
import TournamentsSeason171x1 from './pages/tournaments/1x1/TournamentsSeason171x1';
import TournamentsSeasonOne2x2 from './pages/tournaments/2x2/TournamentsSeasonOne2x2';
import TournamentsSeasonTwo2x2 from './pages/tournaments/2x2/TournamentsSeasonTwo2x2';
import TournamentsSeasonTree2x2 from './pages/tournaments/2x2/TournamentsSeasonTree2x2';
import TournamentsSeasonFour2x2 from './pages/tournaments/2x2/TournamentsSeasonFour2x2';
import TournamentsSeasonFive2x2 from './pages/tournaments/2x2/TournamentsSeasonFive2x2';
import TournamentsSeasonSix2x2 from './pages/tournaments/2x2/TournamentsSeasonSix2x2';
import TournamentsSeasonOne3x3 from './pages/tournaments/3x3/TournamentsSeasonOne3x3';
import BestPlayers from './pages/BestPlayers';
import Archive from './pages/Archive';
import DraftSeasonOne from './pages/draft/DraftSeasonOne';
import PlayersProfile1x1 from './pages/PlayersProfile1x1';
import PlayersProfile2x2 from './pages/PlayersProfile2x2';

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
			<Route path="/tournaments/1x1" element={<TournamentsSeason171x1 />} />
			<Route path="/tournaments/2x2" element={<TournamentsSeasonSix2x2 />} />
			<Route path="/tournaments/3x3" element={<TournamentsSeasonOne3x3 />} />
			<Route path='/archive' element={<Archive />} />
			<Route path='/archive/tournament/2x2/season/1' element={<TournamentsSeasonOne2x2 />} />
			<Route path='/archive/tournament/2x2/season/2' element={<TournamentsSeasonTwo2x2 />} />
			<Route path='/archive/tournament/2x2/season/3' element={<TournamentsSeasonTree2x2 />} />
			<Route path='/archive/tournament/2x2/season/4' element={<TournamentsSeasonFour2x2 />} />
			<Route path='/archive/tournament/2x2/season/5' element={<TournamentsSeasonFive2x2 />} />
			<Route path='/archive/tournament/1x1/season/1' element={<TournamentsSeasonOne1x1 />} />
			<Route path='/archive/tournament/1x1/season/2' element={<TournamentsSeasonTwo1x1 />} />
			<Route path='/archive/tournament/1x1/season/3' element={<TournamentsSeasonTree1x1 />} />
			<Route path='/archive/tournament/1x1/season/4' element={<TournamentsSeasonFour1x1 />} />
			<Route path='/archive/tournament/1x1/season/5' element={<TournamentsSeasonFive1x1 />} />
			<Route path='/archive/tournament/1x1/season/6' element={<TournamentsSeasonSix1x1 />} />
			<Route path='/archive/tournament/1x1/season/7' element={<TournamentsSeasonSeven1x1 />} />
			<Route path='/archive/tournament/1x1/season/8' element={<TournamentsSeason81x1 />} />
			<Route path='/archive/tournament/1x1/season/9' element={<TournamentsSeason91x1 />} />
			<Route path='/archive/tournament/1x1/season/10' element={<TournamentsSeason101x1 />} />
			<Route path='/archive/tournament/1x1/season/11' element={<TournamentsSeason111x1 />} />
			<Route path='/archive/tournament/1x1/season/12' element={<TournamentsSeason121x1 />} />
			<Route path='/archive/tournament/1x1/season/13' element={<TournamentsSeason131x1 />} />
			<Route path='/archive/tournament/1x1/season/14' element={<TournamentsSeason141x1 />} />
			<Route path='/archive/tournament/1x1/season/15' element={<TournamentsSeason151x1 />} />
			<Route path='/archive/tournament/1x1/season/16' element={<TournamentsSeason161x1 />} />
			<Route path="/players/profile1x1" element={<PlayersProfile1x1 />} />
			<Route path="/players/profile2x2+" element={<PlayersProfile2x2 />} />
			<Route path="/best-players" element={<BestPlayers />} />
			<Route path="/rules" element={<Rules />} />
		</Routes>
	);
}

export default AppRoutes;
