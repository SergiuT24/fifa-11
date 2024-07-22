import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';

const Header = ({ user, logout }) => {
	return (
		<header className='mb-3'>
			<Navbar user={user} logout={logout} />
			<Menu />
		</header>
	);
}

export default Header;
