import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Chelsea from '../../../../../components/league/teams/Chelsea';
import Liverpool from '../../../../../components/league/teams/Liverpool';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import Arsenal from '../../../../../components/league/teams/Arsenal';
import AcMilan from '../../../../../components/league/teams/AcMilan';
import BayernMunich from '../../../../../components/league/teams/BayernMunich';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-8 px-3 py-20 darkblue'>
			<div className='flex flex-col gap-6'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/4</h2>
				<div className='flex flex-col gap-32 justify-center'>
					<Square
						teamOne={<ManchesterUnited />}
						teamTwo={<BayernMunich />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Arsenal />}
						teamTwo={<AcMilan />}
						scoreFirstTeamOne={'T-W 3'}
						scoreSecondTeamOne={'T-L 0'}
						scoreFirstTeamTwo={'T-W 3'}
						scoreSecondTeamTwo={'T-L 0'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex flex-col gap-16'>
					<Square
						teamOne={<Chelsea />}
						teamTwo={<BayernMunich />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={5}
					/>
					<Square
						teamOne={<Liverpool />}
						teamTwo={<Arsenal />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={0}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-600'>FINAL</h2>
				<div>
					<Square
						teamOne={<BayernMunich />}
						teamTwo={<Arsenal />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
		</div >
	);
}

export default KingsCupPlayOffs;
