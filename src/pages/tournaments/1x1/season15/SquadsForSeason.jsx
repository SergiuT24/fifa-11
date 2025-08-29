import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Juventus from '../../../../components/league/teams/Juventus';
import Arsenal from '../../../../components/league/teams/Arsenal';
import ACMilan from '../../../../components/league/teams/AcMilan';
import ManchesterCity from '../../../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import RealMadrid from '../../../../components/league/teams/RealMadrid';
import Barcelona from '../../../../components/league/teams/Barcelona';
import Lyon from '../../../../components/league/teams/Lyon';
import Liverpool from '../../../../components/league/teams/Liverpool';
import Tottenham from '../../../../components/league/teams/Tottenham';
import Inter from '../../../../components/league/teams/Inter';
import Chelsea from '../../../../components/league/teams/Chelsea';
import AtleticoMadrid from '../../../../components/league/teams/AtleticoMadrid';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Julls'}
				imgOne={'/img/players/avatar.png'}
				club={<Juventus />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<Arsenal />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<ACMilan />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'matuu'}
				imgOne={'/img/players/matuu.png'}
				club={<ManchesterCity />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Chelsea />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'DAG'}
				imgOne={'/img/players/dagestan.png'}
				club={<RealMadrid />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<Lyon />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<AtleticoMadrid />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Liverpool />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Tottenham />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'A.Wenger'}
				imgOne={'/img/players/wenger.png'}
				club={<ManchesterUnited />} />
			<PlayersTeam
				team={'TEAM 12'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<Inter />} />
			<PlayersTeam
				team={'TEAM 13'}
				playerOne={'Alexandr'}
				imgOne={'/img/players/avatar.png'}
				club={<Barcelona />} />
		</div>
	);
}

export default SquadsForSeason;
