import React, { useState } from 'react';
import PostTitle from '../Posts/Post/PostTitle';
import UclClubs from './LeagueComponents/UclClubs';
import UclIntro from './UclIntro';
import UclPlayers from './LeagueComponents/UclPlayers';
import PostMenu from '../Posts/Post/PostMenu';
import UclMain from './UCL-Main/UclMain';
import UclPlayOffs from './UCL-PlayOffs/UclPlayOffs';
import UclTopScorers from './UCL-TopScorers/UclTopScorers';
import UclTopAssists from './UCL-TopAssists/UclTopAssists';
import UclDraw from './UCL-Draw/UclDraw';
import UclNews from './UCL-News/UclNews';

const Ucl = () => {
	const [selectedComponent, setSelectedComponent] = useState('Play Offs');

	return (
		<div>
			<PostTitle
				trophy={'/img/cups/uefa-champions.png'}
				name={'UEFA Champions League 2024'}
				about={'Started July 01 12:00'}
			/>
			<UclIntro />
			<UclClubs />
			<UclDraw />
			<UclPlayers />
			<div className='flex justify-center'>
				<UclNews />
			</div>
			<div className='post-menu rounded-t-3xl flex flex-col mt-9'>
				<PostMenu selected={selectedComponent} setSelectedComponent={setSelectedComponent} />
				{selectedComponent === 'Main' && <UclMain />}
				{selectedComponent === 'Play Offs' && <UclPlayOffs />}
				{selectedComponent === 'Top Scorers' && <UclTopScorers />}
				{selectedComponent === 'Most Assists' && <UclTopAssists />}
				{/* {selectedComponent === 'Best Goals' && <BestGoals />} */}
			</div>
		</div>
	);
}

export default Ucl;
