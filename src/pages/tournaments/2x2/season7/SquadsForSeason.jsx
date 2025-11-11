import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Germany from '../../../../components/league/national-teams/Germany'
import France from '../../../../components/league/national-teams/France'
import Brazil from '../../../../components/league/national-teams/Brazil'
import Italy from '../../../../components/league/national-teams/Italy'
import England from '../../../../components/league/national-teams/England'
import Argentina from '../../../../components/league/national-teams/Argentina'

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				playerTwo={'mysterio'}
				imgTwo={'/img/players/mysterio.png'}
				club={<England />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'M@KSON (C.)'}
				imgOne={'/img/players/makson.png'}
				playerTwo={'VITALY'}
				imgTwo={'/img/players/vitaly.png'}
				club={<France />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'RAYON 13 (C.)'}
				imgOne={'/img/players/rayon13.png'}
				playerTwo={'none'}
				imgTwo={'/img/players/avatar.png'}
				club={<Italy />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'Julls'}
				imgTwo={'/img/players/avatar.png'}
				club={<Argentina />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Robinho (C.)'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'mcrurus'}
				imgTwo={'/img/players/mcrurus.png'}
				club={<Brazil />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'DAG'}
				imgOne={'/img/players/dagestan.png'}
				playerTwo={'Calior'}
				imgTwo={'/img/players/avatar.png'}
				club={<Germany />} />
		</div>
	);
}

export default SquadsForSeason;
