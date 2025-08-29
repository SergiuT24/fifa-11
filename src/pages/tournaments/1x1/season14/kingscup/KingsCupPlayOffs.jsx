import React from 'react';
import Square from '../../../../../components/league/square/Square';
import CSKA from './../../../../../components/league/4star-teams/Cska';
import Werder from './../../../../../components/league/4star-teams/Werder';
import Villarreal from './../../../../../components/league/4star-teams/Villarreal';
import Galatasaray from './../../../../../components/league/4star-teams/Galatasaray';
import PSV from './../../../../../components/league/4star-teams/Psv';
import Bilbao from './../../../../../components/league/4star-teams/Bilbao';
import Wolfsburg from './../../../../../components/league/4star-teams/Wolfsburg';
import Getafe from './../../../../../components/league/4star-teams/Getafe';
import OM from './../../../../../components/league/4star-teams/OM';
import Lazio from './../../../../../components/league/4star-teams/Lazio';
import Dortmund from './../../../../../components/league/4star-teams/Dortmund';
import Fiorentina from './../../../../../components/league/4star-teams/Fiorentina';
import FulHam from './../../../../../components/league/4star-teams/FulHam';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<Bilbao />}
						teamTwo={<Werder />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Getafe />}
						teamTwo={<Galatasaray />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Fiorentina />}
						teamTwo={<Wolfsburg />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={3}
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
						teamOne={<OM />}
						teamTwo={<FulHam />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={1}
					/>
					<Square
						teamOne={<Lazio />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Dortmund />}
						teamTwo={<PSV />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Villarreal />}
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
						teamOne={<Werder />}
						teamTwo={<Getafe />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<Wolfsburg />}
							teamTwo={<CSKA />}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={3}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={4}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<OM />}
							teamTwo={<Lazio />}
							scoreFirstTeamOne={4}
							scoreSecondTeamOne={4}
							scoreFirstTeamTwo={'3 OT 1'}
							scoreSecondTeamTwo={'3 OT 2'}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<Dortmund />}
							teamTwo={<Villarreal />}
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
							teamOne={'empty'}
							teamTwo={<CSKA />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<Lazio />}
							teamTwo={<Dortmund />}
							scoreFirstTeamOne={6}
							scoreSecondTeamOne={0}
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
							teamOne={'empty'}
							teamTwo={<Lazio />}
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
