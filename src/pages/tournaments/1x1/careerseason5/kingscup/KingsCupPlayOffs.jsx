import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Chelsea from '../../../../../components/league/teams/Chelsea';
import WestBrom from '../../../../../components/league/teams/WestBrom';
import Inter from '../../../../../components/league/teams/Inter';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import ACMilan from '../../../../../components/league/teams/AcMilan';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import Anji from '../../../../../components/league/teams/Anji';
import CSKA from '../../../../../components/league/4star-teams/Cska';
import Valencia from '../../../../../components/league/teams/Valencia';
import NewcastleUnited from '../../../../../components/league/teams/NewcastleUnited';
import Zenit from '../../../../../components/league/teams/Zenit';
import FCRostov from '../../../../../components/league/teams/FCRostov';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<WestBrom />}
						teamTwo={<FCRostov />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<RealMadrid />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Zenit />}
						teamTwo={<NewcastleUnited />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={1}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Anji />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Chelsea />}
						teamTwo={<Barcelona />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Valencia />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<ACMilan />}
						teamTwo={<CSKA />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Inter />}
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
						teamOne={<WestBrom />}
						teamTwo={<RealMadrid />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={5}
						scoreFirstTeamTwo={'2 EX 2'}
						scoreSecondTeamTwo={'0 EX 3'}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Zenit />}
							teamTwo={<Anji />}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={10}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={4}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Chelsea />}
							teamTwo={<Valencia />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={5}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={4}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<CSKA />}
							teamTwo={<Inter />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={3}
							scoreSecondTeamTwo={0}
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
							teamOne={<RealMadrid />}
							teamTwo={<Anji />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={7}
							scoreFirstTeamTwo={5}
							scoreSecondTeamTwo={2}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Valencia />}
							teamTwo={<CSKA />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={'2 EX 0'}
							scoreSecondTeamTwo={'2 EX 1'}
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
							teamOne={<Anji />}
							teamTwo={<CSKA />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={1}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KingsCupPlayOffs;
