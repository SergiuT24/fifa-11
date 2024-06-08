import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({ value, to }) => {
	return (
		<li className='flex justify-around pr-3 py-2'>
			<Link to={to} className='link uppercase cursor-pointer'>{value}</Link>
		</li>
	);
}

export default MenuLink;