import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Chelsea from '../../../../../components/league/teams/Chelsea';
import Tottenham from '../../../../../components/league/teams/Tottenham';
import Arsenal from '../../../../../components/league/teams/Arsenal';
import ManchesterCity from '../../../../../components/league/teams/ManchesterCity';

const EuropeLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<ManchesterCity />}
						teamTwo={<Arsenal />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Tottenham />}
						teamTwo={<Chelsea />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<ManchesterCity />}
						teamTwo={<Tottenham />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={'2 EX 1'}
						scoreSecondTeamTwo={'4 EX 3'}
					/>
				</div>
			</div>
		</div>
	);
}

export default EuropeLeaguePlayOffs;
