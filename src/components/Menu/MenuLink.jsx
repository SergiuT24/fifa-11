import React from 'react';

const MenuLink = ({ value }) => {
	return (
		<li>
			<a className='text-white cursor-pointer hover:'>{value}</a>
		</li>
	);
}

export default MenuLink;
