import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Rules from './pages/Rules';
import Tournaments2x2 from './pages/tournaments/2x2/Tournaments2x2';

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/tournaments/2x2" element={<Tournaments2x2 />} />
			<Route path="/rules" element={<Rules />} />
		</Routes>
	);
}

export default AppRoutes;
