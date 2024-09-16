import React from 'react';
import Square from '../../../../../components/league/square/Square';
import AcMilan from '../../../../../components/league/teams/AcMilan';
import BayernMunich from '../../../../../components/league/teams/BayernMunich';
import Arsenal from '../../../../../components/league/teams/Arsenal';
import Liverpool from '../../../../../components/league/teams/Liverpool';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import Chelsea from '../../../../../components/league/teams/Chelsea';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import AtleticoMadrid from '../../../../../components/league/teams/AtleticoMadrid';
import Lyon from '../../../../../components/league/teams/Lyon';
import Barcelona from '../../../../../components/league/teams/Barcelona';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<ManchesterUnited />}
						teamTwo={<RealMadrid />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={3}
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
						teamOne={<AcMilan />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Barcelona />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Arsenal />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
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
						teamOne={<BayernMunich />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<AtleticoMadrid />}
						teamTwo={<Liverpool />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Quarter-Finals 1/4</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<Lyon />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={4}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<AcMilan />}
							teamTwo={<Barcelona />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={5}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Arsenal />}
							teamTwo={<Chelsea />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={3}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<BayernMunich />}
							teamTwo={<Liverpool />}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={6}
							scoreSecondTeamTwo={5}
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
							teamOne={<Lyon />}
							teamTwo={<Barcelona />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={3}
							scoreSecondTeamTwo={0}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Chelsea />}
							teamTwo={<Liverpool />}
							scoreFirstTeamOne={6}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={5}
							scoreSecondTeamTwo={1}
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
							teamOne={<Lyon />}
							teamTwo={<Chelsea />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={2}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KingsCupPlayOffs;
