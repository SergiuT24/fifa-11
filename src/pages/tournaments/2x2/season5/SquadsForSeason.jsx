import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Germany from '../../../../components/league/national-teams/Germany'
import France from '../../../../components/league/national-teams/France'
import Brazil from '../../../../components/league/national-teams/Brazil'
import Italy from '../../../../components/league/national-teams/Italy'
import Argentina from '../../../../components/league/national-teams/Argentina';
import Spain from '../../../../components/league/national-teams/Spain';


const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'D.Drogba'}
				imgOne={'/img/players/d-drogba.png'}
				playerTwo={'mysterio'}
				imgTwo={'/img/players/mysterio.png'}
				club={<Spain />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'M@KSON (C.)'}
				imgOne={'/img/players/makson.png'}
				playerTwo={'VITALY'}
				imgTwo={'/img/players/vitaly.png'}
				club={<France />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'Toto'}
				imgTwo={'/img/players/toto.png'}
				club={<Brazil />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'Wenger'}
				imgTwo={'/img/players/wenger.png'}
				club={<Italy />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				playerTwo={'Jsnick'}
				imgTwo={'/img/players/jsnick.png'}
				club={<Argentina />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Matuu (C.)'}
				imgOne={'/img/players/matuu.png'}
				playerTwo={'Kevin'}
				imgTwo={'/img/players/kevin.png'}
				club={<Germany />} />
		</div>
	);
}

export default SquadsForSeason;
