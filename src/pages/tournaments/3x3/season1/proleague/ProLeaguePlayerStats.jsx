import React from 'react';
import { ProLeagueSeasonOnePlayerStats3x3 } from '../../../../../components/league/playerStats/UniversalPlayerStats';
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const ProLeaguePlayerStats = () => {
	return (
		<div>
			<ProLeagueSeasonOnePlayerStats3x3 />
			<PlayerStatsAbout />
		</div>
	);
}

export default ProLeaguePlayerStats;
