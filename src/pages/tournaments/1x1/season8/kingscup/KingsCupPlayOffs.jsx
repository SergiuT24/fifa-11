import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fenerbahce from './../../../../../components/league/4star-teams/Fenerbahce';
import Genoa from './../../../../../components/league/4star-teams/Genoa';
import Wolfsburg from './../../../../../components/league/4star-teams/Wolfsburg';
import Napoli from './../../../../../components/league/4star-teams/Napoli';
import Galatasaray from './../../../../../components/league/4star-teams/Galatasaray';
import Besiktas from './../../../../../components/league/4star-teams/Besiktas';
import Everton from './../../../../../components/league/4star-teams/Everton';
import Fiorentina from './../../../../../components/league/4star-teams/Fiorentina';
import Werder from './../../../../../components/league/4star-teams/Werder';
import Villareal from './../../../../../components/league/4star-teams/Villarreal';
import Cska from './../../../../../components/league/4star-teams/Cska';
import Palermo from './../../../../../components/league/4star-teams/Palermo';
import Lille from './../../../../../components/league/4star-teams/Lille';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<Cska />}
						teamTwo={<Werder />}
						scoreFirstTeamOne={5}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={7}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Wolfsburg />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Villareal />}
						teamTwo={<Palermo />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={1}
					/>
					<Square
						teamOne={<Fenerbahce />}
						teamTwo={<Napoli />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Lille />}
						teamTwo={<Besiktas />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={'5 | OV 1'}
						scoreSecondTeamTwo={'3 | OV 0'}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Genoa />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Everton />}
						teamTwo={<Galatasaray />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={7}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Fiorentina />}
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
						teamOne={<Cska />}
						teamTwo={<Wolfsburg />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={3}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Palermo />}
							teamTwo={<Napoli />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Lille />}
							teamTwo={<Genoa />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Galatasaray />}
							teamTwo={<Fiorentina />}
							scoreFirstTeamOne={2}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={6}
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
							teamOne={<Wolfsburg />}
							teamTwo={'empty'}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={'empty'}
							teamTwo={<Galatasaray />}
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
