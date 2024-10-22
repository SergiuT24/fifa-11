import React from 'react';
import PlayersTeam from '../../../components/league/players/PlayersTeam';

const SquadsForSeasonGroupA = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'Group A'}
				playerOne={'Berserk (C.)'}
				imgOne={'/img/players/berserk.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 2'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 3'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 4'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 5'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 6'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
		</div>
	);
}

export default SquadsForSeasonGroupA;
