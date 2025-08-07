import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Germany from '../../../../../components/league/national-teams/Germany';
import France from '../../../../../components/league/national-teams/France'
import Brazil from '../../../../../components/league/national-teams/Brazil'
import Italy from '../../../../../components/league/national-teams/Italy'
import England from '../../../../../components/league/national-teams/England'
import Argentina from '../../../../../components/league/national-teams/Argentina'

const WorldCupPlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10 mt-9'>
				<h2 className='text-center'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Argentina />}
						teamTwo={<France />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Italy />}
						teamTwo={<Brazil />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
		</div>
	);
}

export default WorldCupPlayOffs;
