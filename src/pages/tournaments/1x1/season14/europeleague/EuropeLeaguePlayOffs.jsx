import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Werder from '../../../../../components/league/4star-teams/Werder';

const EuropeLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={'Group A 3'}
						teamTwo={'place 8'}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={'Group B 3'}
						teamTwo={<Werder/>}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={0}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={'empty'}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={0}
					/>
				</div>
			</div>
		</div>
	);
}

export default EuropeLeaguePlayOffs;
