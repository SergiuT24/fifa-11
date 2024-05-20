import React from 'react';

const Post = ({ value }) => {
	return (
		<div className='post flex flex-col gap-5 py-5'>
			<div className='flex flex-col justify-center gap-5 items-center'>
				<h2>{value}</h2>
				<video width="280" controls className='rounded-xl'>
					<source src="/videos/Good-goal.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
}

export default Post;
