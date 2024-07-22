import React from 'react';

const PlayersImg = ({ avatar }) => {
	return (
		<div className='w-6'>
			<img className='rounded-3xl' src={avatar} />
		</div>
	);
}

export default PlayersImg;
