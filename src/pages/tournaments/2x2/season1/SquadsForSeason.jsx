import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import BayernMunich from '../../../../components/league/teams/BayernMunich';
import Arsenal from '../../../../components/league/teams/Arsenal';
import ManchesterUnited from '../../../../components/league/teams/ManchesterUnited';
import Chelsea from '../../../../components/league/teams/Chelsea';
import AcMilan from '../../../../components/league/teams/AcMilan';
import Liverpool from '../../../../components/league/teams/Liverpool';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Berserk (C.)'}
				imgOne={'/img/players/berserk.png'}
				playerTwo={'mcrurus'}
				imgTwo={'/img/players/mcrurus.png'}
				club={<BayernMunich />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'D.Drogba (C.)'}
				imgOne={'/img/players/d-drogba.png'}
				playerTwo={'mysterio'}
				imgTwo={'/img/players/mysterio.png'}
				club={<Arsenal />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Anna (C.)'}
				imgOne={'/img/players/anna.png'}
				playerTwo={'NSKRaven'}
				imgTwo={'/img/players/raven.png'}
				club={<ManchesterUnited />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'TOTO (C.)'}
				imgOne={'/img/players/toto.png'}
				playerTwo={'Mr.Noob'}
				imgTwo={'/img/players/mrnoob.png'}
				club={<Chelsea />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'Perfect (C.)'}
				imgOne={'/img/players/perfect.png'}
				playerTwo={'nebro'}
				imgTwo={'/img/players/avatar.png'}
				club={<AcMilan />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				playerTwo={'e6JIyHTuKinDaHouse (C.)'}
				imgTwo={'/img/players/ebluntik.png'}
				club={<Liverpool />} />
		</div>
	);
}

export default SquadsForSeason;
