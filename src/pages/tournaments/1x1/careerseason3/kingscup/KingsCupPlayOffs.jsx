import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Chelsea from '../../../../../components/league/teams/Chelsea';
import WestBrom from '../../../../../components/league/teams/WestBrom';
import Inter from '../../../../../components/league/teams/Inter';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import AcMilan from '../../../../../components/league/teams/AcMilan';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import Anji from '../../../../../components/league/teams/Anji';
import CSKA from '../../../../../components/league/4star-teams/Cska';
import Valencia from '../../../../../components/league/teams/Valencia';
import NewcastleUnited from '../../../../../components/league/teams/NewcastleUnited';
import BocaJuniors from '../../../../../components/league/teams/BocaJuniors';
import FSVMainz from '../../../../../components/league/teams/FSVMainz';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<Barcelona />}
						teamTwo={<Chelsea />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={'3 EX: 5'}
						scoreSecondTeamTwo={'3 EX: 2'}
					/>
					<Square
						teamOne={<Valencia />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<NewcastleUnited />}
						teamTwo={<Inter />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={4}
					/>
					<Square
						teamOne={<CSKA />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<FSVMainz />}
						teamTwo={<BocaJuniors />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={1}
					/>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<AcMilan />}
						teamTwo={<WestBrom />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={'1 EX 3'}
						scoreSecondTeamTwo={'0 EX 4'}
					/>
					<Square
						teamOne={<Anji />}
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
						teamOne={<Barcelona />}
						teamTwo={<Valencia />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={'3 EX 0'}
						scoreSecondTeamTwo={'4 EX 3'}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Inter />}
							teamTwo={<CSKA />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<FSVMainz />}
							teamTwo={<RealMadrid />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={2}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<WestBrom />}
							teamTwo={<Anji />}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={4}
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
							teamOne={<Valencia />}
							teamTwo={'empty'}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<FSVMainz />}
							teamTwo={<Anji />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={4}
							scoreFirstTeamTwo={2}
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
							teamOne={'empty'}
							teamTwo={<Anji />}
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
