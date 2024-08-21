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
						teamOne={<Argentina />}
						teamTwo={<France />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Holland />}
						teamTwo={<Portugal />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={5}
						scoreSecondTeamTwo={4}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex flex-col gap-16'>
					<Square
						teamOne={<Italy />}
						teamTwo={<Argentina />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={4}
					/>
					<Square
						teamOne={<Brazil />}
						teamTwo={<Holland />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={7}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-600'>FINAL</h2>
				<div>
					<Square
						teamOne={<Argentina />}
						teamTwo={<Holland />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={4}
					/>
				</div>
			</div>
		</div >
	);
}

export default KingsCupPlayOffs;
