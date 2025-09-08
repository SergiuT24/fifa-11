import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Juventus from '../../../../../components/league/teams/Juventus';
import ACMilan from '../../../../../components/league/teams/AcMilan';
import ManchesterCity from '../../../../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import Sevilla from '../../../../../components/league/teams/Sevilla';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import Lyon from '../../../../../components/league/teams/Lyon';
import Liverpool from '../../../../../components/league/teams/Liverpool';
import Tottenham from '../../../../../components/league/teams/Tottenham';
import Inter from '../../../../../components/league/teams/Inter';
import Roma from '../../../../../components/league/teams/Roma';
import BayernMunich from '../../../../../components/league/teams/BayernMunich';
import AtleticoMadrid from '../../../../../components/league/teams/AtleticoMadrid';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<Roma />}
						teamTwo={<Tottenham />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Liverpool />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<BayernMunich />}
						teamTwo={<Lyon />}
						scoreFirstTeamOne={6}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Sevilla />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Barcelona />}
						teamTwo={<ManchesterCity />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<Juventus />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<ManchesterUnited />}
						teamTwo={<ACMilan />}
						scoreFirstTeamOne={5}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Inter />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Quarter-Finals 1/4</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={<Liverpool />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<BayernMunich />}
							teamTwo={<Sevilla />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<ManchesterCity />}
							teamTwo={<Juventus />}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={4}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<ManchesterUnited />}
							teamTwo={<Inter />}
							scoreFirstTeamOne={5}
							scoreSecondTeamOne={6}
							scoreFirstTeamTwo={'4 EX 0'}
							scoreSecondTeamTwo={'3 EX 4'}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Semi-Finals 1/2</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-36'>
						<Square
							teamOne={'empty'}
							teamTwo={'empty'}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Juventus />}
							teamTwo={<Inter />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Final</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-96 pt-6'>
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
