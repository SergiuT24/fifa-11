import React from 'react';
import Square from '../../../../../components/league/square/Square';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import Valencia from '../../../../../components/league/teams/Valencia';
import Anji from '../../../../../components/league/teams/Anji';
import CSKA from '../../../../../components/league/4star-teams/Cska';



const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<Valencia />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<Anji />}
						teamTwo={<CSKA />}
						scoreFirstTeamOne={4}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={2}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<Anji />}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={2}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;
