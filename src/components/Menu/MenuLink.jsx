import React from 'react';

const MenuLink = ({ value }) => {
	return (
		<li className='flex justify-around pr-3 py-2'>
			<a className='link uppercase cursor-pointer'>{value}</a>
		</li>
	);
}

export default MenuLink;
