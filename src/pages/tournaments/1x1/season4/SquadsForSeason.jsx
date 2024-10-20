import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Everton from '../../../../components/league/4star-teams/Everton';
import Bordeaux from '../../../../components/league/4star-teams/Bordeaux';
import Bilbao from '../../../../components/league/4star-teams/Bilbao';
import Cska from '../../../../components/league/4star-teams/Cska';
import Fenerbahce from '../../../../components/league/4star-teams/Fenerbahce';
import Genoa from '../../../../components/league/4star-teams/Genoa';
import Getafe from '../../../../components/league/4star-teams/Getafe';
import Sampdoria from '../../../../components/league/4star-teams/Sampdoria';
import Lille from '../../../../components/league/4star-teams/Lille';
import WestHam from '../../../../components/league/4star-teams/WestHam';
import Sporting from '../../../../components/league/4star-teams/Sporting';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Everton />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<Genoa />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Sporting />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Getafe />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Fenerbahce />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Dagestan'}
				imgOne={'/img/players/dagestan.png'}
				club={<Sampdoria />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Lille />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Cska />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'Niks'}
				imgOne={'/img/players/nikita.png'}
				club={<WestHam />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Robinho'}
				imgOne={'/img/players/avatar.png'}
				club={<Bilbao />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<Bordeaux />} />
		</div>
	);
}

export default SquadsForSeason;
