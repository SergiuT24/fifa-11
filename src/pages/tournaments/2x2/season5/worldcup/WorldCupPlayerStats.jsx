import React from 'react';
import { WorldCupSeasonTreePlayerStats2x2 } from '../../../../../components/league/playerStats/UniversalPlayerStats';
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const WorldCupPlayerStats = () => {
	return (
		<div>
			<WorldCupSeasonTreePlayerStats2x2 />
			<PlayerStatsAbout />
		</div>
	);
}

export default WorldCupPlayerStats;
