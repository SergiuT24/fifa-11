import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';
import Rules from './pages/Rules';
import Tournaments2x2 from './pages/tournaments/2x2/Tournaments2x2';

function AppRoutes({ setUser, user }) {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/home" element={<Home />} />
			<Route path="/user/login" element={<Login setUser={setUser} />} />
			<Route path="/user/register" element={<Register />} />
			<Route path="/user/profile" element={<Profile user={user} />} />
			<Route path="/tournaments/2x2" element={<Tournaments2x2 />} />
			<Route path="/rules" element={<Rules />} />
		</Routes>
	);
}

export default AppRoutes;
