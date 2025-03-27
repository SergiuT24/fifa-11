import React from 'react';
import Square from '../../../../../components/league/square/Square';
import Fenerbahce from './../../../../../components/league/4star-teams/Fenerbahce';
import WestHam from './../../../../../components/league/4star-teams/WestHam';
import Psg from './../../../../../components/league/4star-teams/Psg';
import Galatasaray from './../../../../../components/league/4star-teams/Galatasaray';
import Werder from './../../../../../components/league/4star-teams/Werder';
import Stuttgart from './../../../../../components/league/4star-teams/Stuttgart';
import Palermo from './../../../../../components/league/4star-teams/Palermo';
import Sporting from './../../../../../components/league/4star-teams/Sporting';
import FulHam from './../../../../../components/league/4star-teams/FulHam';
import Wolfsburg from './../../../../../components/league/4star-teams/Wolfsburg';
import Lazio from './../../../../../components/league/4star-teams/Lazio';
import PSV from './../../../../../components/league/4star-teams/Psv';
import ManchesterCity from '../../../../../components/league/teams/ManchesterCity';
import RealMadrid from '../../../../../components/league/teams/RealMadrid';
import Arsenal from '../../../../../components/league/teams/Arsenal';
import Lyon from '../../../../../components/league/teams/Lyon';
import Chelsea from '../../../../../components/league/teams/Chelsea';
import Barcelona from '../../../../../components/league/teams/Barcelona';
import ManchesterUnited from '../../../../../components/league/teams/ManchesterUnited';
import BayernMunich from '../../../../../components/league/teams/BayernMunich';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
					<Square
						teamOne={<ManchesterCity />}
						teamTwo={<RealMadrid />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={5}
					/>
					<Square
						teamOne={<Arsenal />}
						teamTwo={<Lyon />}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={1}
						scoreFirstTeamTwo={2}
						scoreSecondTeamTwo={3}
					/>
					<Square
						teamOne={<Chelsea />}
						teamTwo={<Barcelona />}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<ManchesterUnited />}
						teamTwo={<BayernMunich />}
						scoreFirstTeamOne={0}
						scoreSecondTeamOne={8}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={2}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Semi-Finals 1/2</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<Square
						teamOne={<RealMadrid />}
						teamTwo={<Arsenal />}
						scoreFirstTeamOne={1}
						scoreSecondTeamOne={6}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={0}
					/>
					<div className='mt-48'>
						<Square
							teamOne={'empty'}
							teamTwo={<BayernMunich />}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Final</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-36'>
						<Square
							teamOne={<Arsenal />}
							teamTwo={'empty'}
							scoreFirstTeamOne={'?'}
							scoreSecondTeamOne={'?'}
							scoreFirstTeamTwo={'?'}
							scoreSecondTeamTwo={'?'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KingsCupPlayOffs;
