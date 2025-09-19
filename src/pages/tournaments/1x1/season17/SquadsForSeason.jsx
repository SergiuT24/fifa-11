import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Stuttgart from '../../../../components/league/4star-teams/Stuttgart';
import Bilbao from '../../../../components/league/4star-teams/Bilbao';
import Genoa from '../../../../components/league/4star-teams/Genoa';
import Dortmund from '../../../../components/league/4star-teams/Dortmund';
import Getafe from '../../../../components/league/4star-teams/Getafe';
import Schalke from '../../../../components/league/4star-teams/Schalke';
import Werder from '../../../../components/league/4star-teams/Werder';
import Napoli from '../../../../components/league/4star-teams/Napoli';
import Villarreal from '../../../../components/league/4star-teams/Villarreal';
import Everton from '../../../../components/league/4star-teams/Everton';
import PSV from '../../../../components/league/4star-teams/Psv';
import Galatasaray from '../../../../components/league/4star-teams/Galatasaray';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Gatuso'}
				imgOne={'/img/players/avatar.png'}
				club={< Bilbao />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<Genoa />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Dortmund />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'matuu'}
				imgOne={'/img/players/matuu.png'}
				club={<Getafe />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Schalke />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'DAG'}
				imgOne={'/img/players/dagestan.png'}
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
				club={<Napoli />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'OBADA'}
				imgOne={'/img/players/avatar.png'}
				club={<Villarreal />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<Galatasaray />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'Kevin'}
				imgOne={'/img/players/kevin.png'}
				club={<PSV />} />
			<PlayersTeam
				team={'TEAM 12'}
				playerOne={'Alexandr'}
				imgOne={'/img/players/avatar.png'}
				club={<Everton />} />
		</div>
	);
}

export default SquadsForSeason;
