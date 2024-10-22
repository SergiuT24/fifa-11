import React from 'react';
import MenuLink from './MenuLink';

const Menu = () => {
	return (
		<nav className='menu whitespace-nowrap overflow-x-auto'>
			<div className='mx-5 flex gap-3 py-1'>
				<MenuLink value={'Home'} to="/home" />
				<MenuLink value={'Draft'} to="/draft/season1" />
				<MenuLink value={'Tournaments 1x1'} to="/tournaments/1x1" />
				<MenuLink value={'Tournaments 2x2'} to="/tournaments/2x2" />
				<MenuLink value={'Tournaments 3x3'} to="/tournaments/3x3" />
				<MenuLink value={'Archive'} to="/archive" />
				<MenuLink value={'Players Profile'} to="/players/profile" />
				<MenuLink value={'Best Players'} to="/best-players" />
				{/* <MenuLink value={'Most Assists'} to="/most-assists" /> */}
				<MenuLink value={'Best Goals'} to="/best-goals" />
				{/* <MenuLink value={'Goal of Week'} to="/goal-of-week" /> */}
				{/* <MenuLink value={'Assist of Week'} to="/assist-of-week" /> */}
				<MenuLink value={'Rules'} to="/rules" />
			</div>
		</nav>
	);
}

export default Menu;
