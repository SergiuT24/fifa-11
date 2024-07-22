import React from 'react';

const PlayOffTeam = ({ img, team, score, scoreTwo }) => {
	return (
		<div className='flex justify-between w-60'>
			<div className='flex gap-2 items-center'>
				{img}
				{team}
			</div>
			<div className='flex gap-4'>
				<div>{score}</div>
				<div>{scoreTwo}</div>
			</div>
		</div>
	);
}

export default PlayOffTeam;
