import React from 'react';
import SquareTeamLabel from './SquareTeamLabel';

const Square = ({ teamOne, teamTwo, scoreFirstTeamOne, scoreFirstTeamTwo, scoreSecondTeamOne, scoreSecondTeamTwo }) => {
	return (
		<div className='flex flex-col gap-2 border rounded-md w-56 p-5'>
			<SquareTeamLabel team={teamOne} scoreOne={scoreFirstTeamOne} scoreTwo={scoreFirstTeamTwo} />
			<SquareTeamLabel team={teamTwo} scoreOne={scoreSecondTeamOne} scoreTwo={scoreSecondTeamTwo} />
		</div>
	);
}

export default Square;
