import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import WestBrom from '../../../../../components/league/teams/WestBrom';
import FSVMainz from '../../../../../components/league/teams/FSVMainz';
import NewcastleUnited from '../../../../../components/league/teams/NewcastleUnited';


const EuropeLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Barcelona />}
						teamTwo={<WestBrom />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<FSVMainz />}
						teamTwo={<NewcastleUnited />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Barcelona />}
						teamTwo={<NewcastleUnited />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
		</div>
	);
}

export default EuropeLeaguePlayOffs;
