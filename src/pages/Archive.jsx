import React from 'react';
import MenuLink from '../components/header/MenuLink';

const Archive = () => {
	return (
		<div className='mx-5 flex flex-1 flex-col'>
			<h1 className='text-4xl mb-8'>Archive of Tournaments:</h1>
			<ul>
				<li className='flex items-center gap-9'>
					<p>1.</p>
					<MenuLink to={'/archive/tournament/2x2/season/1'} value={'Tournament 2x2 Season 1'} />
					<p>Date: Start: July 29 17:00 (MSK) - End: 12 August 17:00 (MSK)</p>
				</li>
			</ul>
		</div>
	);
}

export default Archive;