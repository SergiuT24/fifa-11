import React from 'react';
import Square from '../../../../../components/league/square/Square';
import CSKA from '../../../../../components/league/4star-teams/Cska';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import Anji from '../../../../../components/league/teams/Anji';
import Valencia from '../../../../../components/league/teams/Valencia';


const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Anji />}
						teamTwo={<RealMadrid />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={5}
					/>
					<Square
						teamOne={<Valencia />}
						teamTwo={<CSKA />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<CSKA />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;
