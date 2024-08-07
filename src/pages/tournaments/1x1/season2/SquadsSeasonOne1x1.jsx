import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Argentina from '../../../../components/league/national-teams/Argentina'
import Italy from '../../../../components/league/national-teams/Italy'
import France from '../../../../components/league/national-teams/France'
import Brazil from '../../../../components/league/national-teams/Brazil'
import Holland from '../../../../components/league/national-teams/Holland'
import Portugal from '../../../../components/league/national-teams/Portugal'
import Spain from '../../../../components/league/national-teams/Spain'

const SquadsSeasonOne1x1 = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Italy />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'D.Drogba'}
				imgOne={'/img/players/d-drogba.png'}
				club={<Argentina />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<France />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<Brazil />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<Holland />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Portugal />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<Spain />} />
		</div>
	);
}

export default SquadsSeasonOne1x1;
