import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import CSKA from '../../../../components/league/4star-teams/Cska';
import Werder from '../../../../components/league/4star-teams/Werder';
import Villarreal from '../../../../components/league/4star-teams/Villarreal';
import Galatasaray from '../../../../components/league/4star-teams/Galatasaray';
import PSV from '../../../../components/league/4star-teams/Psv';
import Bilbao from '../../../../components/league/4star-teams/Bilbao';
import Wolfsburg from '../../../../components/league/4star-teams/Wolfsburg';
import Getafe from '../../../../components/league/4star-teams/Getafe';
import OM from '../../../../components/league/4star-teams/OM';
import Fenerbahce from '../../../../components/league/4star-teams/Fenerbahce';
import Dortmund from '../../../../components/league/4star-teams/Dortmund';
import Fiorentina from '../../../../components/league/4star-teams/Fiorentina';
import FulHam from '../../../../components/league/4star-teams/FulHam';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Kevin'}
				imgOne={'/img/players/kevin.png'}
				club={<Bilbao />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<OM />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Fiorentina />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'matuu'}
				imgOne={'/img/players/matuu.png'}
				club={<Dortmund />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Getafe />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Drogba'}
				imgOne={'/img/players/d-drogba.png'}
				club={<Fenerbahce />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<CSKA />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Villarreal />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Werder />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<FulHam />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'Rayon-13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Wolfsburg />} />
			<PlayersTeam
				team={'TEAM 12'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<PSV />} />
			<PlayersTeam
				team={'TEAM 13'}
				playerOne={'Perfect'}
				imgOne={'/img/players/perfect.png'}
				club={<Galatasaray />} />
		</div>
	);
}

export default SquadsForSeason;
