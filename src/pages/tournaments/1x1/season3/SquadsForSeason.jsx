import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Chelsea from '../../../../components/league/teams/Chelsea';
import Inter from '../../../../components/league/teams/Inter';
import Barcelona from '../../../../components/league/teams/Barcelona';
import AcMilan from '../../../../components/league/teams/AcMilan';
import RealMadrid from '../../../../components/league/teams/RealMadrid';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'RAYON13'}
				imgOne={'/img/players/rayon13.png'}
				club={<Chelsea />} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
				club={<Inter />} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'Dagestan'}
				imgOne={'/img/players/dagestan.png'}
				club={<Barcelona />} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'Nikita'}
				imgOne={'/img/players/nikita.png'}
				club={<Chelsea />} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
				club={<AcMilan />} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
				club={<Chelsea />} />
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
				club={<RealMadrid />} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
				club={<Inter />} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
				club={<Chelsea />} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'VITALY'}
				imgOne={'/img/players/vitaly.png'}
				club={<AcMilan />} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
				club={<RealMadrid />} />
		</div>
	);
}

export default SquadsForSeason;
