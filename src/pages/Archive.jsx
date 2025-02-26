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
						<li className='flex items-center gap-9'>
							<p>2.</p>
							<MenuLink to={'/archive/tournament/2x2/season/2'} value={'Tournament 2x2 Season 2'} />
							<p>Date: Start: August 21 22:00 (MSK) - End: September 4, 22:00 (MSK)</p>
						</li>
						<li className='flex items-center gap-9'>
							<p>3.</p>
							<MenuLink to={'/archive/tournament/2x2/season/3'} value={'Tournament 2x2 Season 3'} />
							<p>Date: Start: Oct 2 16:00 (MSK) - End: 16 October 16:00 (MSK)</p>
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
						<li className='flex items-center gap-9'>
							<p>3.</p>
							<MenuLink to={'/archive/tournament/1x1/season/3'} value={'Tournament 1x1 Season 3'} />
							<p>Date: Start: Sep 23 20:00 (MSK) - End: 07 October 20:00 (MSK)</p>
						</li>
						<li className='flex items-center gap-9'>
							<p>4.</p>
							<MenuLink to={'/archive/tournament/1x1/season/4'} value={'Tournament 1x1 Season 4'} />
							<p>Date: Start: October 20 16:00 (MSK) - End: 03 November 16:00 (MSK)</p>
						</li>
						<li className='flex items-center gap-9'>
							<p>5.</p>
							<MenuLink to={'/archive/tournament/1x1/season/5'} value={'Tournament 1x1 Season 5'} />
							<p>Date: Start: November 13 14:00 (MSK) - End: 27 November 14:00 (MSK)</p>
						</li>
						<li className='flex items-center gap-9'>
							<p>6.</p>
							<MenuLink to={'/archive/tournament/1x1/season/6'} value={'Tournament 1x1 Season 6'} />
							<p>Date: Seria A - Start: November 25 22:00 (MSK) - End: 9 December 22:00 (MSK)</p>
						</li>
						<li className='flex items-center gap-9'>
							<p>7.</p>
							<MenuLink to={'/archive/tournament/1x1/season/7'} value={'Tournament 1x1 Season 7'} />
							<p>Date: Seria A - Start: December 02 20:00 (MSK) - End: 16 December 20:00 (MSK)</p>
						</li>
						<li className='flex items-center gap-9'>
							<p>8.</p>
							<MenuLink to={'/archive/tournament/1x1/season/8'} value={'Tournament 1x1 Season 8'} />
							<p>Date: Seria A - Start: December 11 20:00 (MSK) - End: 21 December 20:00 (MSK)</p>
						</li>
						<li className='flex items-center gap-9'>
							<p>9.</p>
							<MenuLink to={'/archive/tournament/1x1/season/9'} value={'Tournament 1x1 Season 9'} />
							<p>Date: Seria A - Start: February 11 20:00 (MSK) - End: 21 February 20:00 (MSK)</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Archive;
