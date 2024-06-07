import React, { useState } from 'react';
import PostMenu from './PostMenu';
import MainTables from '../Main/MainTables/MainTables';
import PlayOffs from '../Main/PlayOffs/PlayOffs';
import LatestScores from './LatestScores/LatestScores';

const Post = () => {
	const [selectedComponent, setSelectedComponent] = useState('Main');

	return (
		<div className='post'>
			<div className='latest-score-head flex justify-center m-3'>
				<LatestScores />
			</div>
			<div className='post-menu rounded-t-3xl flex flex-col'>
				<PostMenu selected={selectedComponent} setSelectedComponent={setSelectedComponent} />
				{selectedComponent === 'Main' && <MainTables />}
				{selectedComponent === 'Play Offs' && <PlayOffs />}
			</div>
		</div>
	);
}

export default Post;
