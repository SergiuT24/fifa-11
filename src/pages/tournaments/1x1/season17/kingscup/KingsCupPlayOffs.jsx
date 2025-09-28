import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Bilbao from '../../../../../components/league/4star-teams/Bilbao';
import Genoa from '../../../../../components/league/4star-teams/Genoa';
import Getafe from '../../../../../components/league/4star-teams/Getafe';
import Schalke from '../../../../../components/league/4star-teams/Schalke';
import Napoli from '../../../../../components/league/4star-teams/Napoli';
import Villarreal from '../../../../../components/league/4star-teams/Villarreal';
import Everton from '../../../../../components/league/4star-teams/Everton';
import PSV from '../../../../../components/league/4star-teams/Psv';
import Galatasaray from '../../../../../components/league/4star-teams/Galatasaray';
import Stuttgart from '../../../../../components/league/4star-teams/Stuttgart';
import Dortmund from '../../../../../components/league/4star-teams/Dortmund';
import Lille from '../../../../../components/league/4star-teams/Lille';
import Werder from '../../../../../components/league/4star-teams/Werder';


const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<Schalke />}
						teamTwo={<Napoli />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={7}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={4}
					/>
					<Square
						teamOne={<Genoa />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={'empty'}
						teamTwo={<Stuttgart />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Dortmund />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Villarreal />}
						teamTwo={<Bilbao />}
						scoreFirstTeamOne={6}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={5}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Getafe />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Werder />}
						teamTwo={<Galatasaray />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={5}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={6}
					/>
					<Square
						teamOne={<Everton />}
						teamTwo={<Lille />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={4}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Quarter-Finals 1/4</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<Square
						teamOne={<Napoli />}
						teamTwo={<Genoa />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={9}
						scoreSecondTeamTwo={4}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Stuttgart />}
							teamTwo={<Dortmund />}
							scoreFirstTeamOne={4}
							scoreSecondTeamOne={1}
							scoreFirstTeamTwo={4}
							scoreSecondTeamTwo={3}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Villarreal />}
							teamTwo={<Getafe />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={3}
							scoreSecondTeamTwo={0}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Galatasaray />}
							teamTwo={<Lille />}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={2}
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
							teamOne={<Napoli />}
							teamTwo={<Stuttgart />}
							scoreFirstTeamOne={2}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={9}
							scoreSecondTeamTwo={1}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Villarreal />}
							teamTwo={<Lille />}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={0}
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
							teamOne={<Napoli />}
							teamTwo={<Lille />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={4}
							scoreFirstTeamTwo={4}
							scoreSecondTeamTwo={6}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KingsCupPlayOffs;
