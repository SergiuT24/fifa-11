import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Inter from '../../../../../components/league/teams/Inter';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import ManchesterCity from '../../../../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import Arsenal from '../../../../../components/league/teams/Arsenal';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-8 px-3 py-20 darkblue'>
			<div className='flex flex-col gap-6'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/4</h2>
				<div className='flex flex-col gap-32 justify-center'>
					<Square
						teamOne={<Barcelona />}
						teamTwo={<ManchesterUnited />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<ManchesterCity />}
						teamTwo={<Arsenal />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={5}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={4}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex flex-col gap-16'>
					<Square
						teamOne={<Inter />}
						teamTwo={<Barcelona />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={'2 | Over Time 3'}
						scoreSecondTeamTwo={'2 | Over Time 1'}
					/>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<Arsenal />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-600'>FINAL</h2>
				<div>
					<Square
						teamOne={<Inter />}
						teamTwo={<RealMadrid />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={0}
					/>
				</div>
			</div>
		</div >
	);
}

export default KingsCupPlayOffs;
