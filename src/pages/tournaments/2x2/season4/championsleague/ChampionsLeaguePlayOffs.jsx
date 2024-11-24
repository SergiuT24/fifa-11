import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Inter from '../../../../../components/league/teams/Inter';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import ManchesterCity from '../../../../../components/league/teams/ManchesterCity';

const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Inter />}
						teamTwo={<ManchesterCity />}
						scoreFirstTeamOne={5}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={7}
						scoreSecondTeamTwo={2}
					/>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<Barcelona />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={3}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={3}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={<Inter />}
						teamTwo={<Barcelona />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;
