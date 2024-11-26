import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Brescia from './../../../../components/league/3star-teams/Brescia';
import Inter from './../../../../components/league/teams/Inter';
import AcMilan from './../../../../components/league/teams/AcMilan';
import Roma from './../../../../components/league/teams/Roma';
import Fiorentina from './../../../../components/league/4star-teams/Fiorentina';
import Lazio from './../../../../components/league/4star-teams/Lazio';
import Napoli from './../../../../components/league/4star-teams/Napoli';
import Palermo from './../../../../components/league/4star-teams/Palermo';
import Sampdoria from './../../../../components/league/4star-teams/Sampdoria';
import Bergamo from '../../../../components/league/3star-teams/Bergamo';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Brescia />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Fiorentina />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Napoli />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Inter />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Nikita'}
				imgOne={'/img/players/nikita.png'}
				club={<AcMilan />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Roma />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Igvasalek'}
				imgOne={'/img/players/igvasalek.png'}
				club={<Lazio />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<Sampdoria />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<Palermo />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Dagestan'}
				imgOne={'/img/players/dagestan.png'}
				club={<Bergamo />} />
		</div>
	);
}

export default SquadsForSeason;
