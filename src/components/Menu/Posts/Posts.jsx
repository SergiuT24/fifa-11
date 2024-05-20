import React from 'react';
import Post from './Post';
import PostTitle from './PostTitle';

const Posts = () => {
	return (
		<div className=''>
			<PostTitle />
			<Post value="Красивая комбинация" />
			<Post value="Красивая комбинация" />
			<Post value="Красивая комбинация" />
			<Post value="Красивая комбинация" />
			<Post value="Красивая комбинация" />
		</div>
	);
}

export default Posts;
