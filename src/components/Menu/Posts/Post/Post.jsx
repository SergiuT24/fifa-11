import React, { useState } from 'react';
import PostMenu from './PostMenu';
import MainTables from '../Main/MainTables/MainTables';
import PlayOffs from '../Main/PlayOffs/PlayOffs';

const Post = () => {
	const [selectedComponent, setSelectedComponent] = useState('Main');

	return (
		<div className='post rounded-t-3xl flex flex-col'>
			<PostMenu selected={selectedComponent} setSelectedComponent={setSelectedComponent} />
			{selectedComponent === 'Main' && <MainTables />}
			{selectedComponent === 'Play Offs' && <PlayOffs />}
		</div>
	);
}

export default Post;
