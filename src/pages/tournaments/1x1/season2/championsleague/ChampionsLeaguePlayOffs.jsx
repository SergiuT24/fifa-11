import React from 'react';
import Square from '../../../../../components/league/square/Square';
import AcMilan from '../../../../../components/league/teams/AcMilan';
import BayernMunich from '../../../../../components/league/teams/BayernMunich';
import Arsenal from '../../../../../components/league/teams/Arsenal';
import Liverpool from '../../../../../components/league/teams/Liverpool';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import Chelsea from '../../../../../components/league/teams/Chelsea';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import AtleticoMadrid from '../../../../../components/league/teams/AtleticoMadrid';
import Lyon from '../../../../../components/league/teams/Lyon';
import Barcelona from '../../../../../components/league/teams/Barcelona';

const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>1/8-Finals</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Barcelona />}
						teamTwo={<AtleticoMadrid />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Arsenal />}
						teamTwo={<Liverpool />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10 mt-9'>
				<h2 className='text-center'>Play Offs: Quarter-Finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<Lyon />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<Chelsea />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10 mt-9'>
				<h2 className='text-center'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<BayernMunich />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<AcMilan />}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={'empty'}
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
