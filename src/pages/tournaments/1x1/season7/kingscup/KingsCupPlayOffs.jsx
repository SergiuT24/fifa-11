import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fenerbahce from './../../../../../components/league/4star-teams/Fenerbahce';
import WestHam from './../../../../../components/league/4star-teams/WestHam';
import Psg from './../../../../../components/league/4star-teams/Psg';
import Galatasaray from './../../../../../components/league/4star-teams/Galatasaray';
import Werder from './../../../../../components/league/4star-teams/Werder';
import Stuttgart from './../../../../../components/league/4star-teams/Stuttgart';
import Palermo from './../../../../../components/league/4star-teams/Palermo';
import Sporting from './../../../../../components/league/4star-teams/Sporting';
import FulHam from './../../../../../components/league/4star-teams/FulHam';
import Wolfsburg from './../../../../../components/league/4star-teams/Wolfsburg';
import Lazio from './../../../../../components/league/4star-teams/Lazio';
import PSV from './../../../../../components/league/4star-teams/Psv';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<Sporting />}
						teamTwo={<Palermo />}
						scoreFirstTeamOne={5}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<FulHam />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Lazio />}
						teamTwo={<Werder />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<PSV />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Galatasaray />}
						teamTwo={<Fenerbahce />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Psg />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<WestHam />}
						teamTwo={<Wolfsburg />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Stuttgart />}
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
						teamOne={<Sporting />}
						teamTwo={<FulHam />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={10}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Werder />}
							teamTwo={<PSV />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={4}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={3}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Galatasaray />}
							teamTwo={<Psg />}
							scoreFirstTeamOne={2}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={4}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Wolfsburg />}
							teamTwo={<Stuttgart />}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={7}
							scoreFirstTeamTwo={2}
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
							teamOne={<FulHam />}
							teamTwo={<PSV />}
							scoreFirstTeamOne={2}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={2}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Psg />}
							teamTwo={<Stuttgart />}
							scoreFirstTeamOne={2}
							scoreSecondTeamOne={6}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={3}
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
							teamOne={<FulHam />}
							teamTwo={<Stuttgart />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={3}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KingsCupPlayOffs;
