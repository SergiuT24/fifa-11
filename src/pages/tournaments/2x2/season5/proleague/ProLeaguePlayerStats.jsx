import React from 'react';
import { ProLeagueSeasonTreePlayerStats2x2 } from '../../../../../components/league/playerStats/UniversalPlayerStats';
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const ProLeaguePlayerStats = () => {
	return (
		<div>
			<ProLeagueSeasonTreePlayerStats2x2 />
			<PlayerStatsAbout />
		</div>
	);
}

export default ProLeaguePlayerStats;
