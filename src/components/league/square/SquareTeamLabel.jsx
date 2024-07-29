import React from 'react';

const SquareTeamLabel = ({ team, scoreOne, scoreTwo }) => {
	return (
		<div className='flex gap-4 text-xs'>
			<p className='w-40'>{team}</p>
			<p>{scoreOne}</p>
			<p>{scoreTwo}</p>
		</div>
	);
}

export default SquareTeamLabel;
