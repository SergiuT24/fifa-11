import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Liverpool from '../../../../../components/league/teams/Liverpool';
import AcMilan from '../../../../../components/league/teams/AcMilan';
import AtleticoMadrid from '../../../../../components/league/teams/AtleticoMadrid';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';

const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Quarter-finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<AtleticoMadrid />}
						teamTwo={<AcMilan />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<Liverpool />}
						teamTwo={<RealMadrid />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={5}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={1}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<AtleticoMadrid />}
						teamTwo={<RealMadrid />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={5}
						scoreSecondTeamTwo={4}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;
