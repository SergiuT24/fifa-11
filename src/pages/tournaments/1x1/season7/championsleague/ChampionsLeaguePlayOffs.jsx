import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fiorentina from '../../../../../components/league/4star-teams/Fiorentina';
import Stuttgart from '../../../../../components/league/4star-teams/Stuttgart';
import Palermo from '../../../../../components/league/4star-teams/Palermo';
import Psg from '../../../../../components/league/4star-teams/Psg';
import PSV from '../../../../../components/league/4star-teams/Psv';



const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Stuttgart />}
						teamTwo={<Palermo />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Psg />}
						teamTwo={<PSV />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Psg />}
						teamTwo={'empty'}
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

export default ChampionsLeaguePlayOffs;
