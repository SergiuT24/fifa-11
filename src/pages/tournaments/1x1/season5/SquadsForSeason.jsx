import React from 'react';
import PlayersTeam from '../../../../components/league/players/PlayersTeam';
import Argentina from '../../../../components/league/national-teams/Argentina'
import Italy from '../../../../components/league/national-teams/Italy'
import France from '../../../../components/league/national-teams/France'
import Brazil from '../../../../components/league/national-teams/Brazil'
import Holland from '../../../../components/league/national-teams/Holland'
import Portugal from '../../../../components/league/national-teams/Portugal'
import Spain from '../../../../components/league/national-teams/Spain'
import Uruguay from '../../../../components/league/national-teams/Uruguay'

const SquadsForSeason = () => {
	return (
		<div className='flex flex-col gap-5 ml-4'>
			<PlayersTeam
				team={'TEAM 1'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
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
			<PlayersTeam
				team={'TEAM 7'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 8'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 9'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 10'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 11'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 12'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
			<PlayersTeam
				team={'TEAM 13'}
				playerOne={'empty'}
				imgOne={'/img/players/avatar.png'}
				club={'empty'} />
		</div>
	);
}

export default SquadsForSeason;
