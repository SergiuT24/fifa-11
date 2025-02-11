import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fenerbahce from '../../../../../components/league/4star-teams/Fenerbahce';
import Wolfsburg from '../../../../../components/league/4star-teams/Wolfsburg';
import Genoa from '../../../../../components/league/4star-teams/Genoa';
import Napoli from '../../../../../components/league/4star-teams/Napoli';


const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Fenerbahce />}
						teamTwo={<Genoa />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<Wolfsburg />}
						teamTwo={<Napoli />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={5}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={2}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Genoa />}
						teamTwo={<Napoli />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={5}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;
