import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Chelsea from '../../../../../components/league/teams/Chelsea';
import Liverpool from '../../../../../components/league/teams/Liverpool';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import Arsenal from '../../../../../components/league/teams/Arsenal';


const ChampionsLeaguePlayOffsSeasonOne2x2 = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Chelsea />}
						teamTwo={<ManchesterUnited />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Liverpool />}
						teamTwo={<Arsenal />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={2}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={<Liverpool />}
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

export default ChampionsLeaguePlayOffsSeasonOne2x2;
