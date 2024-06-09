import React, { useState } from 'react';
import PostMenu from './PostMenu';
import MainTables from '../Main/MainTables/MainTables';
import PlayOffs from '../Main/PlayOffs/PlayOffs';
import LatestScores from './LatestScores/LatestScores';
import Players from './Players/Players';
import TopScorers from './TopScorers/TopScorers';
import TopAssists from './TopAssists/TopAssists';
import Draw from './Draw/Draw';


const Post = () => {
	const [selectedComponent, setSelectedComponent] = useState('Main');

	return (
		<div className='post mb-72'>
			<div className='flex justify-center'>
				<Players />
			</div>
			<div className='flex justify-center'>
				<Draw />
			</div>
			<div className='latest-score-head flex justify-center m-3'>
				<LatestScores />
			</div>
			<div className='post-menu rounded-t-3xl flex flex-col'>
				<PostMenu selected={selectedComponent} setSelectedComponent={setSelectedComponent} />
				{selectedComponent === 'Main' && <MainTables />}
				{selectedComponent === 'Play Offs' && <PlayOffs />}
				{selectedComponent === 'Top Scorers' && <TopScorers />}
				{selectedComponent === 'Most Assists' && <TopAssists />}
			</div>
		</div>
	);
}

export default Post;
