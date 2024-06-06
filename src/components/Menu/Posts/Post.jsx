import React from 'react';
import PostMenu from './PostMenu';
import MainTables from './Main/MainTables';

const Post = () => {
	return (
		<div className='post rounded-t-3xl flex flex-col'>
			<PostMenu />
			<MainTables />
		</div>
	);
}

export default Post;
