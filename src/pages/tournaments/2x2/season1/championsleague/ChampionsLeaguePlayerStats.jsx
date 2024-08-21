import React from 'react';
import { UCLSeasonOnePlayerStats2x2 } from '../../../../../components/league/playerStats/UniversalPlayerStats'
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const ChampionsLeaguePlayerStats = () => {
	return (
		<div>
			<UCLSeasonOnePlayerStats2x2 />
			<PlayerStatsAbout />
		</div>
	);
}

export default ChampionsLeaguePlayerStats;
