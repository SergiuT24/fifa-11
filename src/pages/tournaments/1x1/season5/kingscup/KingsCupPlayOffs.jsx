import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Italy from '../../../../../components/league/national-teams/Italy';
import Brazil from '../../../../../components/league/national-teams/Brazil';
import Holland from '../../../../../components/league/national-teams/Holland';
import Argentina from '../../../../../components/league/national-teams/Argentina';
import Portugal from '../../../../../components/league/national-teams/Portugal';
import France from '../../../../../components/league/national-teams/France';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-8 px-3 py-20 darkblue'>
			<div className='flex flex-col gap-6'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/4</h2>
				<div className='flex flex-col gap-32 justify-center'>
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
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex flex-col gap-16'>
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
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-600'>FINAL</h2>
				<div>
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
		</div >
	);
}

export default KingsCupPlayOffs;
