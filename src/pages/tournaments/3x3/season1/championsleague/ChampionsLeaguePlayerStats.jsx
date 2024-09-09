import React from 'react';
import { UCLSeasonOnePlayerStats3x3 } from '../../../../../components/league/playerStats/UniversalPlayerStats'
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const ChampionsLeaguePlayerStats = () => {
	return (
		<div>
			<UCLSeasonOnePlayerStats3x3 />
			<PlayerStatsAbout />
		</div>
	);
}

export default ChampionsLeaguePlayerStats;
