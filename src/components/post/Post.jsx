import React, { useState } from 'react';
import PostMenu from './PostMenu';
import MainTables from '../Main/MainTables/MainTables';
import PlayOffs from '../Main/PlayOffs/PlayOffs';
import LatestScores from './LatestScores/LatestScores';
import Players from './Players/Players';
import TopScorers from './TopScorers/TopScorers';
import TopAssists from './TopAssists/TopAssists';
import Draw from './Draw/Draw';
import LatestNews from './LatestNews/LatestNews';
import BestGoals from './BestGoals/BestGoals';


const Post = () => {
	const [selectedComponent, setSelectedComponent] = useState('Play Offs');

	return (
		<div className='post mb-72'>
			<div className='flex justify-center mt-9'>
				<Players />
			</div>
			<div className='flex justify-center mt-9'>
				<LatestNews />
			</div>
			<div className='latest-score-head flex justify-center mt-9'>
				<LatestScores />
			</div>
			<div className='post-menu rounded-t-3xl flex flex-col mt-9'>
				<PostMenu selected={selectedComponent} setSelectedComponent={setSelectedComponent} />
				{selectedComponent === 'Main' && <MainTables />}
				{selectedComponent === 'Play Offs' && <PlayOffs />}
				{selectedComponent === 'Top Scorers' && <TopScorers />}
				{selectedComponent === 'Most Assists' && <TopAssists />}
				{selectedComponent === 'Best Goals' && <BestGoals />}
			</div>
		</div>
	);
}

export default Post;
