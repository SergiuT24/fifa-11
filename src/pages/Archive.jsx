import React from 'react';
import MenuLink from '../components/header/MenuLink';

const Archive = () => {
	return (
		<div className='mx-5 flex flex-1 flex-col'>
			<h1 className='text-4xl mb-8'>Archive of Tournaments:</h1>
			<div className='flex gap-8'>
				<div>
					<h2 className='text-xl mb-8'>Tournaments 2x2:</h2>
					<ul>
						<li className='flex items-center gap-9'>
							<p>1.</p>
							<MenuLink to={'/archive/tournament/2x2/season/1'} value={'Tournament 2x2 Season 1'} />
							<p>Date: Start: July 29 17:00 (MSK) - End: 12 August 17:00 (MSK)</p>
						</li>
					</ul>
				</div>
				<div>
					<h2 className='text-xl mb-8'>Tournaments 1x1:</h2>
					<ul>
						<li className='flex items-center gap-9'>
							<p>1.</p>
							<MenuLink to={'/archive/tournament/1x1/season/1'} value={'Tournament 1x1 Season 1'} />
							<p>Date: Start: August 7 20:00 (MSK) - End: 18 August 20:00 (MSK)</p>
						</li>
						<li className='flex items-center gap-9'>
							<p>2.</p>
							<MenuLink to={'/archive/tournament/1x1/season/2'} value={'Tournament 1x1 Season 2'} />
							<p>Date: Start: Sep 10 17:00 (MSK) - End: 30 Sep 17:00 (MSK)</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Archive;
