import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fiorentina from '../../../../../components/league/4star-teams/Fiorentina';
import Schalke from '../../../../../components/league/4star-teams/Schalke';
import Cska from '../../../../../components/league/4star-teams/Cska';
import Galatasaray from '../../../../../components/league/4star-teams/Galatasaray';
import Zenit from '../../../../../components/league/4star-teams/Zenit';
import Napoli from '../../../../../components/league/4star-teams/Napoli';


const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-8 px-3 py-20 darkblue'>
			<div className='flex flex-col gap-6'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/4</h2>
				<div className='flex flex-col gap-32 justify-center'>
					<Square
						teamOne={<Galatasaray />}
						teamTwo={<Napoli />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={1}
					/>
					<Square
						teamOne={<Schalke />}
						teamTwo={<Zenit />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-500'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex flex-col gap-16'>
					<Square
						teamOne={<Fiorentina />}
						teamTwo={<Galatasaray />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={7}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Cska />}
						teamTwo={'winner from 3vs5 place'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-6 justify-center'>
				<h2 className='text-center text-orange-600'>FINAL</h2>
				<div>
					<Square
						teamOne={<Fiorentina />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
		</div >
	);
}

export default KingsCupPlayOffs;
