import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Inter from '../../../../components/league/teams/Inter';
import BayernMunich from '../../../../components/league/teams/BayernMunich';
import Liverpool from '../../../../components/league/teams/Liverpool';
import Barcelona from '../../../../components/league/teams/Barcelona';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import ACMilan from '../../../../components/league/teams/AcMilan';
import ManchesterCity from '../../../../components/league/teams/ManchesterCity';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'Perfect'}
				imgTwo={'/img/players/perfect.png'}
				club={<ManchesterUnited />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'Jsnick'}
				imgTwo={'/img/players/jsnick.png'}
				club={<Barcelona />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				playerTwo={'Dag'}
				imgTwo={'/img/players/dagestan.png'}
				club={<Liverpool />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Kevin'}
				imgOne={'/img/players/kevin.png'}
				playerTwo={'Matuu'}
				imgTwo={'/img/players/matuu.png'}
				club={<ManchesterCity />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				playerTwo={'M@KSON'}
				imgTwo={'/img/players/makson.png'}
				club={<ACMilan />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'Alexander'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'TOTO'}
				imgTwo={'/img/players/toto.png'}
				club={<BayernMunich />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'A.Wenger'}
				imgOne={'/img/players/wenger.png'}
				playerTwo={'Julls'}
				imgTwo={'/img/players/avatar.png'}
				club={<Inter />} />
		</div>
	);
}

export default SquadsForSeason;
