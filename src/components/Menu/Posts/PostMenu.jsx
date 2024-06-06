import React from 'react';
import PostLink from './PostLink';

const PostMenu = () => {
	return (
		<div className='flex flex-col justify-start pl-3 border-b w-full'>
			<div className='flex gap-3 pt-4'>
				<PostLink value={'Main'} />
				<PostLink value={'Play Offs'} />
			</div>
			<div className='flex gap-3 py-4 whitespace-nowrap overflow-x-auto'>
				<PostLink value={'Top Scorers'} />
				<PostLink value={'Most Assists'} />
				<PostLink value={'Best Goals'} />
			</div>
		</div>
	);
}

export default PostMenu;
