import React from 'react';
import PlayersTeam from '../../../components/league/players/PlayersTeam';
import Lyon from '../../../components/league/teams/Lyon';
import Sevilla from '../../../components/league/teams/Sevilla';
import Juventus from '../../../components/league/teams/Juventus';
import AstonVilla from '../../../components/league/teams/AstonVilla';
import ManchesterCity from '../../../components/league/teams/ManchesterCity';
import AcMilan from '../../../components/league/teams/AcMilan';

const SquadsForSeasonGroupB = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'Group B'}
				playerOne={'HAM (C.)'}
				imgOne={'/img/players/avatar.png'}
				club={<Lyon />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<Sevilla />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<Juventus />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<AstonVilla />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<ManchesterCity />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'A.Wenger'}
				imgOne={'/img/players/wenger.png'}
				club={<AcMilan />} />
		</div>
	);
}

export default SquadsForSeasonGroupB;
