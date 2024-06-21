import React from 'react';
import Post from './Post/Post';
import PostTitle from './Post/PostTitle';

const Posts = () => {
	return (
		<div className=''>
			<PostTitle trophy={'img/cups/world-cup.png'} name={'Word Cup'} about={'2024 Start June 10 2024 12:00'} />
			<Post />
		</div >
	);
}

export default Posts;
