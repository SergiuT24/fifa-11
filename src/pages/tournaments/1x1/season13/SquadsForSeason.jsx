import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Everton from '../../../../components/league/4star-teams/Everton';
import Genoa from '../../../../components/league/4star-teams/Genoa';
import Leverkusen from '../../../../components/league/4star-teams/Leverkusen';
import Sampdoria from '../../../../components/league/4star-teams/Sampdoria';
import Schalke from '../../../../components/league/4star-teams/Schalke';
import Sporting from '../../../../components/league/4star-teams/Sporting';
import Stuttgart from '../../../../components/league/4star-teams/Stuttgart';
import Villarreal from '../../../../components/league/4star-teams/Villarreal';
import Zenit from '../../../../components/league/4star-teams/Zenit';
import PSV from '../../../../components/league/4star-teams/Psv';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Kevin'}
				imgOne={'/img/players/kevin.png'}
				club={<Leverkusen />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<PSV />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Schalke />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'matuu'}
				imgOne={'/img/players/matuu.png'}
				club={<Genoa />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Villarreal />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Drogba'}
				imgOne={'/img/players/d-drogba.png'}
				club={<Sporting />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<Stuttgart />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Sampdoria />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Zenit />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Everton />} />
		</div>
	);
}

export default SquadsForSeason;
