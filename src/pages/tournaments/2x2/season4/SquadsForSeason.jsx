import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Inter from '../../../../components/league/teams/Inter';
import RealMadrid from '../../../../components/league/teams/RealMadrid';
import Barcelona from '../../../../components/league/teams/Barcelona';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import Arsenal from '../../../../components/league/teams/Arsenal';
import ManchesterCity from '../../../../components/league/teams/ManchesterCity';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'HAM (C.)'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'DartRin'}
				imgTwo={'/img/players/rin.png'}
				club={<Inter />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'Berserk (C.)'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'A.Wenger'}
				imgTwo={'/img/players/wenger.png'}
				club={<RealMadrid />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Anna (C.)'}
				imgOne={'/img/players/anna.png'}
				playerTwo={'Jsnick'}
				imgTwo={'/img/players/jsnick.png'}
				club={<Barcelona />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Igvasalek (C.)'}
				imgOne={'/img/players/igvasalek.png'}
				playerTwo={'Dagestan'}
				imgTwo={'/img/players/dagestan.png'}
				club={<ManchesterUnited />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'VITALY (C.)'}
				imgOne={'/img/players/vitaly.png'}
				playerTwo={'RAYON 13'}
				imgTwo={'/img/players/rayon13.png'}
				club={<Arsenal />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'M@KSON (C.)'}
				imgOne={'/img/players/makson.png'}
				playerTwo={'TOTO'}
				imgTwo={'/img/players/toto.png'}
				club={<ManchesterCity />} />
		</div>
	);
}

export default SquadsForSeason;
