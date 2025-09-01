import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Juventus from '../../../../../components/league/teams/Juventus';
import Arsenal from '../../../../../components/league/teams/Arsenal';
import ACMilan from '../../../../../components/league/teams/AcMilan';
import ManchesterCity from '../../../../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import Lyon from '../../../../../components/league/teams/Lyon';
import Liverpool from '../../../../../components/league/teams/Liverpool';
import Tottenham from '../../../../../components/league/teams/Tottenham';
import Inter from '../../../../../components/league/teams/Inter';
import Chelsea from '../../../../../components/league/teams/Chelsea';
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
						teamOne={<Juventus />}
						teamTwo={<Tottenham />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={'3 0'}
						scoreSecondTeamTwo={'3 EX 3'}
					/>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<ACMilan />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={'2 EX 1'}
						scoreSecondTeamTwo={'2 EX 2'}
					/>
					<Square
						teamOne={<ManchesterCity />}
						teamTwo={<AtleticoMadrid />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={5}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<Chelsea />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Arsenal />}
						teamTwo={<Inter />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={5}
					/>
					<Square
						teamOne={<Lyon />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<ManchesterUnited />}
						teamTwo={<Barcelona />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Liverpool />}
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
						teamOne={<Tottenham />}
						teamTwo={<ACMilan />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={3}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<AtleticoMadrid />}
							teamTwo={<Chelsea />}
							scoreFirstTeamOne={4}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={6}
							scoreSecondTeamTwo={0}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Inter />}
							teamTwo={<Lyon />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={1}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Barcelona />}
							teamTwo={<Liverpool />}
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
					<h2 className='text-center text-orange-500'>Semi-Finals 1/2</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-36'>
						<Square
							teamOne={<ACMilan />}
							teamTwo={<AtleticoMadrid />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Lyon />}
							teamTwo={'empty'}
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
