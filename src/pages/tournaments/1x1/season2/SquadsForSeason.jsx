import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
			/>
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
			/>
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
			/>
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
			/>
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
			/>
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
			/>
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
			/>
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
			/>
		</div>
	);
}

export default SquadsForSeason;
