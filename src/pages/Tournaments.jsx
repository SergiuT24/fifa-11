import React from 'react';
import SubMenuLink from '../components/header/SubMenuLink'

const Tournaments = () => {
	return (
		<div>
			<nav className='menu whitespace-nowrap overflow-x-auto'>
				<div className='mx-5 flex gap-3 py-1'>
					<SubMenuLink value={'open 2x2 league'} to="/tournaments/open/2x2/season1" />
				</div>
			</nav>
		</div>
	);
}

export default Tournaments;
