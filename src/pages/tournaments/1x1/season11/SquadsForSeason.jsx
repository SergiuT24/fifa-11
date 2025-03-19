import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import RealMadrid from '../../../../components/league/teams/RealMadrid';
import ManchesterCity from '../../../../components/league/teams/ManchesterCity';
import Barcelona from '../../../../components/league/teams/Barcelona';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import Chelsea from '../../../../components/league/teams/Chelsea';
import Arsenal from '../../../../components/league/teams/Arsenal';
import Lyon from '../../../../components/league/teams/Lyon';
import BayernMunich from '../../../../components/league/teams/BayernMunich';
import Inter from '../../../../components/league/teams/Inter';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Dagestan'}
				imgOne={'/img/players/dagestan.png'}
				club={<RealMadrid />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<ManchesterCity />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Barcelona />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<ManchesterUnited />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Chelsea />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Arsenal />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Lyon />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<BayernMunich />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<Inter />} />
		</div>
	);
}

export default SquadsForSeason;
