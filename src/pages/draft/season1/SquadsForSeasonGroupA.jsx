import React from 'react';
import PlayersTeam from '../../../components/league/players/PlayersTeam';
import Porto from '../../../components/league/teams/Porto';
import Arsenal from '../../../components/league/teams/Arsenal';
import Roma from '../../../components/league/teams/Roma';
import Valencia from '../../../components/league/teams/Valencia';
import BayernMunich from '../../../components/league/teams/BayernMunich';
import Liverpool from '../../../components/league/teams/Liverpool';

const SquadsForSeasonGroupA = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'Group A'}
				playerOne={'Berserk (C.)'}
				imgOne={'/img/players/berserk.png'}
				club={<Porto />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'Niks'}
				imgOne={'/img/players/nikita.png'}
				club={<Arsenal />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Roma />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Valencia />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<BayernMunich />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Liverpool />} />
		</div>
	);
}

export default SquadsForSeasonGroupA;
