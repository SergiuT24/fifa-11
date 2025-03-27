import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Arsenal from '../../../../../components/league/teams/Arsenal';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import BayernMunich from '../../../../../components/league/teams/BayernMunich';



const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Arsenal />}
						teamTwo={<ManchesterUnited />}
						scoreFirstTeamOne={6}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={1}
					/>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<BayernMunich />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={7}
						scoreFirstTeamTwo={0}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Arsenal />}
						teamTwo={<BayernMunich />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;
