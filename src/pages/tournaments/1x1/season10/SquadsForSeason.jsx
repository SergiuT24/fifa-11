import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Argentina from '../../../../components/league/national-teams/Argentina';
import Brazil from '../../../../components/league/national-teams/Brazil';
import England from '../../../../components/league/national-teams/England';
import France from '../../../../components/league/national-teams/France';
import Germany from '../../../../components/league/national-teams/Germany';
import Italy from '../../../../components/league/national-teams/Italy';
import Portugal from '../../../../components/league/national-teams/Portugal';
import Spain from '../../../../components/league/national-teams/Spain';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<France />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Germany />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
				club={<Portugal />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Argentina />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Italy />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Rayon 13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Brazil />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Vitaly'}
				imgOne={'/img/players/vitaly.png'}
				club={<Spain />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<England />} />
		</div>
	);
}

export default SquadsForSeason;
