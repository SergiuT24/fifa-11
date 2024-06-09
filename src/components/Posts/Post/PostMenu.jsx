import React from 'react';
import PostLink from './PostLink';

const PostMenu = ({ selected, setSelectedComponent }) => {
	const handleClick = (value) => {
		setSelectedComponent(value);
	};

	return (
		<div className='flex flex-col justify-start pl-3 border-b w-full'>
			<div className='flex gap-3 pt-4'>
				<PostLink
					value={'Main'}
					selected={selected === 'Main'}
					onClick={() => handleClick('Main')}
				/>
				<PostLink
					value={'Play Offs'}
					selected={selected === 'Play Offs'}
					onClick={() => handleClick('Play Offs')}
				/>
			</div>
			<div className='flex gap-3 py-4 whitespace-nowrap overflow-x-auto'>
				<PostLink
					value={'Top Scorers'}
					selected={selected === 'Top Scorers'}
					onClick={() => handleClick('Top Scorers')}
				/>
				<PostLink
					value={'Most Assists'}
					selected={selected === 'Most Assists'}
					onClick={() => handleClick('Most Assists')}
				/>
				<PostLink
					value={'Best Goals'}
					selected={selected === 'Best Goals'}
					onClick={() => handleClick('Best Goals')}
				/>
			</div>
		</div>
	);
}

export default PostMenu;
