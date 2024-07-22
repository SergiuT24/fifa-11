import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoutes from './Routes';

function App() {
	const [user, setUser] = useState(null);
	const navigate = useNavigate();

	const logout = () => {
		localStorage.removeItem('token');
		setUser(null);
		navigate('/');
	};

	return (
		<div className='flex flex-col min-h-screen'>
			<Header user={user} logout={logout} />
			<AppRoutes setUser={setUser} user={user} />
			<Footer />
		</div>
	);
}


export default App;
