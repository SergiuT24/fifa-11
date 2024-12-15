import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fiorentina from '../../../../../components/league/4star-teams/Fiorentina';
import CSKA from '../../../../../components/league/4star-teams/Cska';
import Everton from '../../../../../components/league/4star-teams/Everton';
import Villareal from '../../../../../components/league/4star-teams/Villarreal';
import Lille from '../../../../../components/league/4star-teams/Lille';

const EuropeLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<CSKA />}
						teamTwo={<Villareal />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Lille />}
						teamTwo={<Everton />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={2}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={<Lille/>}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
		</div>
	);
}

export default EuropeLeaguePlayOffs;
