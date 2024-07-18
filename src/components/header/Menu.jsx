import React from 'react';
import MenuLink from './MenuLink';

const Menu = () => {
	return (
		<nav className='menu whitespace-nowrap overflow-x-auto'>
			<div className='mx-5 flex gap-3 py-1'>
				<MenuLink value={'Home'} to="/home" />
				<MenuLink value={'Tournaments'} to="/tournaments" />
				<MenuLink value={'Live Competition'} to="/live-competition" />
				<MenuLink value={'Ended Competitions'} to="/ended-competitions" />
				<MenuLink value={'Top Scorers'} to="/top-scorers" />
				<MenuLink value={'Most Assists'} to="/most-assists" />
				<MenuLink value={'Best Goals'} to="/best-goals" />
				<MenuLink value={'Goal of Week'} to="/goal-of-week" />
				<MenuLink value={'Assist of Week'} to="/assist-of-week" />
				<MenuLink value={'Rules'} to="/rules" />
			</div>
		</nav>
	);
}

export default Menu;
