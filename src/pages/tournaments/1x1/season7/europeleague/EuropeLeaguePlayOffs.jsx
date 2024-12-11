import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Sporting from '../../../../../components/league/4star-teams/Sporting';
import Galatasaray from '../../../../../components/league/4star-teams/Galatasaray';
import Wolfsburg from '../../../../../components/league/4star-teams/Wolfsburg';
import WestHam from '../../../../../components/league/4star-teams/WestHam';

const EuropeLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Wolfsburg />}
						teamTwo={<Galatasaray />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Sporting />}
						teamTwo={<WestHam />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={7}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Galatasaray />}
						teamTwo={<Sporting />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={5}
						scoreFirstTeamTwo={'2 | OT 2'}
						scoreSecondTeamTwo={'1 | OT 4'}
					/>
				</div>
			</div>
		</div>
	);
}

export default EuropeLeaguePlayOffs;
