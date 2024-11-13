import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Argentina from '../../../../components/league/national-teams/Argentina'
import Italy from '../../../../components/league/national-teams/Italy'
import France from '../../../../components/league/national-teams/France'
import Brazil from '../../../../components/league/national-teams/Brazil'
import Holland from '../../../../components/league/national-teams/Holland'
import Portugal from '../../../../components/league/national-teams/Portugal'
import Spain from '../../../../components/league/national-teams/Spain'
import Uruguay from '../../../../components/league/national-teams/Uruguay'
import Russia from '../../../../components/league/national-teams/Russia'
import Turkey from '../../../../components/league/national-teams/Turkey'
import England from '../../../../components/league/national-teams/England'
import Croatia from '../../../../components/league/national-teams/Croatia'
import Germany from '../../../../components/league/national-teams/Germany'

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-2'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Spain />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Russia />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<Argentina />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Uruguay />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<France />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Dagestan'}
				imgOne={'/img/players/dagestan.png'}
				club={<Brazil />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Igvasalek'}
				imgOne={'/img/players/igvasalek.png'}
				club={<Portugal />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'Vitaly'}
				imgOne={'/img/players/vitaly.png'}
				club={<Turkey />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Germany />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Wenger'}
				imgOne={'/img/players/wenger.png'}
				club={<Holland />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'Nikita'}
				imgOne={'/img/players/nikita.png'}
				club={<Italy />} />
			<PlayersTeam
				team={'TEAM 12'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<England />} />
			<PlayersTeam
				team={'TEAM 13'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Croatia />} />
		</div>
	);
}

export default SquadsForSeason;
