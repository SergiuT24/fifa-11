import React from 'react';
import { ProLeagueSeasonOnePlayerStats2x2 } from '../../../../../components/league/playerStats/UniversalPlayerStats';
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const ProLeaguePlayerStats = () => {
	return (
		<div>
			<ProLeagueSeasonOnePlayerStats2x2 />
			<PlayerStatsAbout />
		</div>
	);
}

export default ProLeaguePlayerStats;
