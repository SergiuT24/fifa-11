import React from 'react';
import Post from './Post';
import PostTitle from './PostTitle';
import MainTables from './Main/MainTables';

const Posts = () => {
	return (
		<div className=''>
			<PostTitle />
			<Post />
			<div style={{ backgroundColor: '#001e28' }} className='flex p-5'>
				<MainTables />
			</div>
		</div >
	);
}

export default Posts;
