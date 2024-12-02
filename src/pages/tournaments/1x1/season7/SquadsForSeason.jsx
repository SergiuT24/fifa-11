import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Psv from '../../../../components/league/4star-teams/Psv';
import Fenerbahce from '../../../../components/league/4star-teams/Fenerbahce';
import WestHam from '../../../../components/league/4star-teams/WestHam';
import Psg from '../../../../components/league/4star-teams/Psg';
import Galatasaray from '../../../../components/league/4star-teams/Galatasaray';
import Werder from '../../../../components/league/4star-teams/Werder';
import Stuttgart from '../../../../components/league/4star-teams/Stuttgart';
import Palermo from '../../../../components/league/4star-teams/Palermo';
import Sporting from '../../../../components/league/4star-teams/Sporting';
import FulHam from '../../../../components/league/4star-teams/FulHam';
import Wolfsburg from '../../../../components/league/4star-teams/Wolfsburg';
import Napoli from '../../../../components/league/4star-teams/Napoli';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Dagestan'}
				imgOne={'/img/players/dagestan.png'}
				club={<Psv />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<Fenerbahce />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<WestHam />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Nikita'}
				imgOne={'/img/players/nikita.png'}
				club={<Psg />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Galatasaray />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Werder />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<Stuttgart />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Palermo />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<FulHam />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'A.Wenger'}
				imgOne={'/img/players/wenger.png'}
				club={<Napoli />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Sporting />} />
			<PlayersTeam
				team={'TEAM 12'}
				playerOne={'Igvasalek'}
				imgOne={'/img/players/igvasalek.png'}
				club={<Wolfsburg />} />
		</div>
	);
}

export default SquadsForSeason;
