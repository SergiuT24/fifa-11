import React from 'react';

const PlayOffTeam = ({ img, team, score }) => {
	return (
		<div className='flex justify-between w-60'>
			<div className='flex gap-2 items-center'>
				{img}
				{team}
			</div>
			<div>{score}</div>
		</div>
	);
}

export default PlayOffTeam;
