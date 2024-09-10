import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import AcMilan from '../../../../components/league/teams/AcMilan';
import BayernMunich from '../../../../components/league/teams/BayernMunich';
import Arsenal from '../../../../components/league/teams/Arsenal';
import Liverpool from '../../../../components/league/teams/Liverpool';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import Chelsea from '../../../../components/league/teams/Chelsea';
import RealMadrid from '../../../../components/league/teams/RealMadrid';
import AtleticoMadrid from '../../../../components/league/teams/AtleticoMadrid';
import Lyon from '../../../../components/league/teams/Lyon';
import Barcelona from '../../../../components/league/teams/Barcelona';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<AcMilan />}
			/>
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<BayernMunich />}
			/>
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<Liverpool />}
			/>
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Chelsea />}
			/>
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'D.Drogba'}
				imgOne={'/img/players/d-drogba.png'}
				club={<Barcelona />}
			/>
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<ManchesterUnited />}
			/>
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Lyon />}
			/>
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<AtleticoMadrid />}
			/>
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Arsenal />}
			/>
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Nikita'}
				imgOne={'/img/players/nikita.png'}
				club={<RealMadrid />}
			/>
		</div>
	);
}

export default SquadsForSeason;
