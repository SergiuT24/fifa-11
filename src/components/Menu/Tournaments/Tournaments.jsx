import React from 'react';
import SubMenuLink from '../SubMenuLink';

const Tournaments = () => {
	return (
		<div>
			<nav className='menu whitespace-nowrap overflow-x-auto'>
				<div className='mx-5 flex gap-3 py-1'>
					<SubMenuLink value={'open 1x1 league'} to="/league1x1" />
					<SubMenuLink value={'open 2x2 league'} to="/league2x2" />
					<SubMenuLink value={'closed 1x1 league'} to="/league1x1" />
					<SubMenuLink value={'closed 2x2 league'} to="/league2x2" />
				</div>
			</nav>
		</div>
	);
}

export default Tournaments;
