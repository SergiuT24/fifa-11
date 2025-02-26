import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Leverkusen from '../../../../components/league/4star-teams/Leverkusen';
import OM from '../../../../components/league/4star-teams/OM';
import Galatasaray from '../../../../components/league/4star-teams/Galatasaray';
import Everton from '../../../../components/league/4star-teams/Everton';
import Fiorentina from '../../../../components/league/4star-teams/Fiorentina';
import Wolfsburg from '../../../../components/league/4star-teams/Wolfsburg';
import Villarreal from '../../../../components/league/4star-teams/Villarreal';
import Napoli from '../../../../components/league/4star-teams/Napoli';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Vitaly'}
				imgOne={'/img/players/vitaly.png'}
				club={'empty'} />
		</div>
	);
}

export default SquadsForSeason;
