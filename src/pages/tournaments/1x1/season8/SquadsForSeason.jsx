import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Fenerbahce from '../../../../components/league/4star-teams/Fenerbahce';
import Genoa from '../../../../components/league/4star-teams/Genoa';
import Wolfsburg from '../../../../components/league/4star-teams/Wolfsburg';
import Napoli from '../../../../components/league/4star-teams/Napoli';
import Galatasaray from '../../../../components/league/4star-teams/Galatasaray';
import Besiktas from '../../../../components/league/4star-teams/Besiktas';
import Everton from '../../../../components/league/4star-teams/Everton';
import Fiorentina from '../../../../components/league/4star-teams/Fiorentina';
import Werder from '../../../../components/league/4star-teams/Werder';
import Villareal from '../../../../components/league/4star-teams/Villarreal';
import Cska from '../../../../components/league/4star-teams/Cska';
import Palermo from '../../../../components/league/4star-teams/Palermo';
import Lille from '../../../../components/league/4star-teams/Lille';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Dagestan'}
				imgOne={'/img/players/dagestan.png'}
				club={<Fenerbahce />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<Everton />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Fiorentina />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Quaresma_07'}
				imgOne={'/img/players/avatar.png'}
				club={<Genoa />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Werder />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Villareal />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<Wolfsburg />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Napoli />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Cska />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Galatasaray />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'Malemiria'}
				imgOne={'/img/players/malemiria.png'}
				club={<Palermo />} />
			<PlayersTeam
				team={'TEAM 12'}
				playerOne={'Osprey'}
				imgOne={'/img/players/avatar.png'}
				club={<Besiktas />} />
			<PlayersTeam
				team={'TEAM 13'}
				playerOne={'Nikita'}
				imgOne={'/img/players/nikita.png'}
				club={<Lille />} />
		</div>
	);
}

export default SquadsForSeason;
