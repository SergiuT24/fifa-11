import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import AppRoutes from './Routes';

function App() {

	return (
		<div className='flex h-screen flex-col'>
			<Router>
				<Header />
				<AppRoutes />
				<Footer />
			</Router>
		</div>
	);
}


export default App;
