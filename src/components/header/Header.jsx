import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';

const Header = () => {
	return (
		<header className='mb-3'>
			<Navbar />
			<Menu />
		</header>
	);
}

export default Header;
