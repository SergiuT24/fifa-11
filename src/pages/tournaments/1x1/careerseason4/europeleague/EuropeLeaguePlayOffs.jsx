import React from 'react';
import Square from '../../../../../components/league/square/Square';
import CSKA from '../../../../../components/league/4star-teams/Cska';
import Zenit from '../../../../../components/league/4star-teams/Zenit';
import FCRostov from '../../../../../components/league/teams/FCRostov';
import Barcelona from '../../../../../components/league/teams/Barcelona';


const EuropeLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Barcelona />}
						teamTwo={<Zenit />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<CSKA />}
						teamTwo={<FCRostov />}
						scoreFirstTeamOne={5}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={<CSKA />}
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
