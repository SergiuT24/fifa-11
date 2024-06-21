import React from 'react';

const UclPlayer = ({ src, player }) => {
	return (
		<div className='flex gap-2 items-center'>
			<img className='w-8 rounded-3xl' src={src} alt='player-photo' />
			<p className=' text-sm'>{player}</p>
		</div>
	);
}

export default UclPlayer;
