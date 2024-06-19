import React from 'react';
import { Link } from 'react-router-dom';

const MenuLink = ({ value, to }) => {
	return (
		<li className='flex justify-around pr-3 py-2'>
			<Link to={to} className='link uppercase cursor-pointer hover:text-red-300'>{value}</Link>
		</li>
	);
}

export default MenuLink;