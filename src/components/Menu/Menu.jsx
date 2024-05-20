import React from 'react';
import MenuLink from './MenuLink';

const Menu = () => {
	return (
		<nav className='menu whitespace-nowrap overflow-x-auto'>
			<div className='mx-5 flex gap-3 py-2'>
				<MenuLink value={'Home'} />
				<MenuLink value={'Top Scorers'} />
				<MenuLink value={'Most Assists'} />
				<MenuLink value={'Best Goals'} />
				<MenuLink value={'Goal of Week'} />
				<MenuLink value={'Assist of Week'} />
			</div>
		</nav>
	);
}

export default Menu;
