import React from 'react';
import MenuLink from './MenuLink';

const Menu = () => {
	return (
		<nav className=' bg-zinc-900'>
			<div className='flex gap-10 py-4 justify-center'>
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
