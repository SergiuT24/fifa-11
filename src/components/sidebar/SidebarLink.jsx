import React from 'react';
import { Link } from 'react-router-dom';

const SidebarLink = ({ value, to }) => {
	return (
		<li>
			<Link to={to} className='text-xs cursor-pointer'>{value}</Link>
		</li>
	);
}

export default SidebarLink;
