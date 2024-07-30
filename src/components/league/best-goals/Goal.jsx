import React from 'react';

const Goal = ({ title, source }) => {
	return (
		<div className='flex flex-col items-center gap-5'>
			<h2 className='text-sm text-center'>{title}</h2>
			<video width="400" controls>
				<source src={source} type="video/mp4" />
				Your browser does not support the video tag.
			</video>
		</div>
	);
}

export default Goal;