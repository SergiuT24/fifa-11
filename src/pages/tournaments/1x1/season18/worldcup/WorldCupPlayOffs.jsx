import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Italy from '../../../../../components/league/national-teams/Italy';
import Brazil from '../../../../../components/league/national-teams/Brazil';
import Argentina from '../../../../../components/league/national-teams/Argentina';
import Holland from '../../../../../components/league/national-teams/Holland';


const WorldCupPlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={'empty'}
						scoreFirstTeamOne={'0'}
						scoreSecondTeamOne={'0'}
						scoreFirstTeamTwo={'0'}
						scoreSecondTeamTwo={'0'}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={'empty'}
						scoreFirstTeamOne={'0'}
						scoreSecondTeamOne={'0'}
						scoreFirstTeamTwo={'0'}
						scoreSecondTeamTwo={'0'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={'empty'}
						scoreFirstTeamOne={'0'}
						scoreSecondTeamOne={'0'}
						scoreFirstTeamTwo={'0'}
						scoreSecondTeamTwo={'0'}
					/>
				</div>
			</div>
		</div>
	);
}

export default WorldCupPlayOffs;
