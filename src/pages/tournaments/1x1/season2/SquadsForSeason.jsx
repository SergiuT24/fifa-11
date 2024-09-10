import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'Jsnick'}
				imgOne={'/img/players/jsnick.png'}
			/>
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'Berserk'}
				imgOne={'/img/players/berserk.png'}
			/>
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'mysterio'}
				imgOne={'/img/players/mysterio.png'}
			/>
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'HAM'}
				imgOne={'/img/players/avatar.png'}
			/>
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'D.Drogba'}
				imgOne={'/img/players/d-drogba.png'}
			/>
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'DartRin'}
				imgOne={'/img/players/rin.png'}
			/>
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'Anna'}
				imgOne={'/img/players/anna.png'}
			/>
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'TOTO'}
				imgOne={'/img/players/toto.png'}
			/>
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'M@KSON'}
				imgOne={'/img/players/makson.png'}
			/>
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'Nikita'}
				imgOne={'/img/players/nikita.png'}
			/>
		</div>
	);
}

export default SquadsForSeason;
