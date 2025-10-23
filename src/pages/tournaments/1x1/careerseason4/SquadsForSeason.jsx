import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import RealMadrid from '../../../../components/league/teams/RealMadrid';
import Barcelona from '../../../../components/league/teams/Barcelona';
import CSKA from '../../../../components/league/4star-teams/Cska';
import Inter from '../../../../components/league/teams/Inter';
import Anji from '../../../../components/league/teams/Anji';
import Valencia from '../../../../components/league/teams/Valencia';
import Chelsea from '../../../../components/league/teams/Chelsea';
import ACMilan from '../../../../components/league/teams/AcMilan';
import NewcastleUnited from '../../../../components/league/teams/NewcastleUnited';
import WestBrom from '../../../../components/league/teams/WestBrom';
import FCRostov from '../../../../components/league/teams/FCRostov';
import Zenit from '../../../../components/league/4star-teams/Zenit';



const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Robinho'}
				imgOne={'/img/players/avatar.png'}
				club={< Valencia />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<FCRostov />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Barcelona />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Julls'}
				imgOne={'/img/players/avatar.png'}
				club={<NewcastleUnited />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<ACMilan />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'DAG'}
				imgOne={'/img/players/dagestan.png'}
				club={<Anji />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<RealMadrid />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'Drogba'}
				imgOne={'/img/players/d-drogba.png'}
				club={<Inter />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<CSKA />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Calior'}
				imgOne={'/img/players/avatar.png'}
				club={<Chelsea />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/avatar.png'}
				club={<Zenit />} />
			<PlayersTeam
				team={'TEAM 12'}
				playerOne={'Mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<WestBrom />} />
		</div>
	);
}

export default SquadsForSeason;
