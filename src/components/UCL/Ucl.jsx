import React, { useState } from 'react';
import PostTitle from '../Posts/Post/PostTitle';
import UclClubs from './LeagueComponents/UclClubs';
import UclIntro from './UclIntro';
import UclPlayers from './LeagueComponents/UclPlayers';
import PostMenu from '../Posts/Post/PostMenu';
import MainTables from '../Posts/Main/MainTables/MainTables';

const Ucl = () => {
	const [selectedComponent, setSelectedComponent] = useState('Main');

	return (
		<div>
			<PostTitle
				trophy={'/img/cups/uefa-champions.png'}
				name={'UEFA Champions League 2024'}
			/>
			<UclIntro />
			<UclClubs />
			<UclPlayers />
			{/* <div className='post-menu rounded-t-3xl flex flex-col mt-9'>
				<PostMenu selected={selectedComponent} setSelectedComponent={setSelectedComponent} />
				{selectedComponent === 'Main' && <MainTables />}
				{selectedComponent === 'Play Offs' && <PlayOffs />}
				{selectedComponent === 'Top Scorers' && <TopScorers />}
				{selectedComponent === 'Most Assists' && <TopAssists />}
				{selectedComponent === 'Best Goals' && <BestGoals />}
			</div> */}
		</div>
	);
}

export default Ucl;
