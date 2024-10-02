import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Holland from '../../../../components/league/national-teams/Holland';
import Germany from '../../../../components/league/national-teams/Germany'
import France from '../../../../components/league/national-teams/France'
import Brazil from '../../../../components/league/national-teams/Brazil'
import Italy from '../../../../components/league/national-teams/Italy'
import England from '../../../../components/league/national-teams/England'
import Uruguay from '../../../../components/league/national-teams/Uruguay'


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'HAM (C.)'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'Jsnick'}
				imgTwo={'/img/players/jsnick.png'}
				club={<France />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'M@KSON (C.)'}
				imgOne={'/img/players/makson.png'}
				playerTwo={'VITALY'}
				imgTwo={'/img/players/vitaly.png'}
				club={<Germany />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'RAYON 13 (C.)'}
				imgOne={'/img/players/rayon13.png'}
				playerTwo={'Sega'}
				imgTwo={'/img/players/avatar.png'}
				club={<Holland />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Anna (C.)'}
				imgOne={'/img/players/anna.png'}
				playerTwo={'TOTO'}
				imgTwo={'/img/players/toto.png'}
				club={<Uruguay />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Robinho (C.)'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'mcrurus'}
				imgTwo={'/img/players/mcrurus.png'}
				club={<England />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Sania (C.)'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'Berserk'}
				imgTwo={'/img/players/berserk.png'}
				club={<Italy />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Matuu (C.)'}
				imgOne={'/img/players/matuu.png'}
				playerTwo={'Kevin'}
				imgTwo={'/img/players/kevin.png'}
				club={<Brazil />} />
		</div>
	);
}

export default SquadsForSeason;
