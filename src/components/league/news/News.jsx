import React from 'react';

const News = ({ src, title }) => {
	return (
		<div className='leaguemenu flex gap-5 p-5 border-b border-blue-950'>
			<img className='w-60 h-40 rounded-2xl' src={src} />
			<div className='flex items-center'>
				<h2 className='text-sm'>{title}</h2>
			</div>
		</div>
	);
}

export default News;
