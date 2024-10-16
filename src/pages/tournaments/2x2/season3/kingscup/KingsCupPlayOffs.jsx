import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Germany from '../../../../../components/league/national-teams/Germany';
import France from '../../../../../components/league/national-teams/France'
import Brazil from '../../../../../components/league/national-teams/Brazil'
import Italy from '../../../../../components/league/national-teams/Italy'
import England from '../../../../../components/league/national-teams/England'
import Uruguay from '../../../../../components/league/national-teams/Uruguay'

const KingsCupPlayOffs = () => {
	return (
		<div className='flex pl-5 gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Quarter-Finals 1/4</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<Square
						teamOne={<England />}
						teamTwo={<Uruguay />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Brazil />}
							teamTwo={<Germany />}
							scoreFirstTeamOne={8}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={3}
							scoreSecondTeamTwo={1}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Semi-Finals 1/2</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-10'>
						<Square
							teamOne={<Italy />}
							teamTwo={'empty'}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-10 pt-16'>
						<Square
							teamOne={<France />}
							teamTwo={<Brazil />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={3}
							scoreSecondTeamTwo={4}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Final</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-28 pt-6'>
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
		</div>
	);
}

export default KingsCupPlayOffs;
