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
						teamOne={<Anji/>}
						teamTwo={<Valencia/>}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={4}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<CSKA/>}
						teamTwo={<RealMadrid/>}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={'0 EX 0'}
						scoreSecondTeamTwo={'1 EX 3'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Valencia/>}
						teamTwo={<RealMadrid/>}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={6}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;
