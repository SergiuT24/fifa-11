import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import RealMadrid from '../../../../components/league/teams/RealMadrid';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import Barcelona from '../../../../components/league/teams/Barcelona';
import Anji from '../../../../components/league/teams/Anji';
import Celtic from '../../../../components/league/teams/Celtic';
import Start from '../../../../components/league/teams/Start';
import CSKA from '../../../../components/league/4star-teams/Cska';
import AcMilan from '../../../../components/league/teams/AcMilan';
import Arsenal from '../../../../components/league/teams/Arsenal';
import Zenit from '../../../../components/league/4star-teams/Zenit';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<RealMadrid />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<ManchesterUnited />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Barcelona />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'DAG'}
				imgOne={'/img/players/dagestan.png'}
				club={<Anji />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Celtic />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<Start />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<CSKA />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<AcMilan />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<Arsenal />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Zenit />} />
		</div>
	);
}

export default SquadsForSeason;
