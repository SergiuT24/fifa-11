import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import France from '../../../../components/league/national-teams/France'
import Brazil from '../../../../components/league/national-teams/Brazil'
import Holland from '../../../../components/league/national-teams/Holland'
import Spain from '../../../../components/league/national-teams/Spain'
import Portugal from '../../../../components/league/national-teams/Portugal'
import England from '../../../../components/league/national-teams/England'
import Argentina from '../../../../components/league/national-teams/Argentina'
import Germany from '../../../../components/league/national-teams/Germany'
import Italy from '../../../../components/league/national-teams/Italy'

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-2'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Argentina />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'Calior'}
				imgOne={'/img/players/avatar.png'}
				club={<Spain />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<England />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<Brazil />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Dagestan'}
				imgOne={'/img/players/dagestan.png'}
				club={<Holland />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Vitaly'}
				imgOne={'/img/players/vitaly.png'}
				club={<France />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Portugal />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'Robinho'}
				imgOne={'/img/players/avatar.png'}
				club={<Italy />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'Berserk'}
				imgOne={'/img/players/jsnick.png'}
				club={<Germany />} />
		</div>
	);
}

export default SquadsForSeason;
