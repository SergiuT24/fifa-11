import React from 'react';

const UclPlayer = ({ src, player }) => {
	return (
		<div className='flex gap-4 items-center'>
			<img className='w-10 rounded-3xl' src={src} alt='player-photo' />
			<p>{player}</p>
		</div>
	);
}

export default UclPlayer;
