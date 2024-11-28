import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Brescia from './../../../../../components/league/3star-teams/Brescia';
import Inter from './../../../../../components/league/teams/Inter';
import AcMilan from './../../../../../components/league/teams/AcMilan';
import Roma from './../../../../../components/league/teams/Roma';
import Fiorentina from './../../../../../components/league/4star-teams/Fiorentina';
import Lazio from './../../../../../components/league/4star-teams/Lazio';
import Napoli from './../../../../../components/league/4star-teams/Napoli';
import Palermo from './../../../../../components/league/4star-teams/Palermo';
import Sampdoria from './../../../../../components/league/4star-teams/Sampdoria';
import Bergamo from '../../../../../components/league/3star-teams/Bergamo';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<Lazio />}
						teamTwo={<Fiorentina />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Roma />}
						teamTwo={<Sampdoria />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Bergamo />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Inter />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Palermo />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Napoli />}
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
						teamOne={<Brescia />}
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
						teamOne={<Lazio />}
						teamTwo={<Roma />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={6}
						scoreSecondTeamTwo={3}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Bergamo />}
							teamTwo={<Inter />}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={5}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={3}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Palermo />}
							teamTwo={<Napoli />}
							scoreFirstTeamOne={4}
							scoreSecondTeamOne={5}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={4}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<AcMilan />}
							teamTwo={<Brescia />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={9}
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
							teamOne={<Lazio />}
							teamTwo={<Inter />}
							scoreFirstTeamOne={2}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={'1 | OT 2'}
							scoreSecondTeamTwo={'3 | OT 3'}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Napoli />}
							teamTwo={<Brescia />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={6}
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
							teamOne={<Inter />}
							teamTwo={<Brescia />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={8}
							scoreSecondTeamTwo={0}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KingsCupPlayOffs;
