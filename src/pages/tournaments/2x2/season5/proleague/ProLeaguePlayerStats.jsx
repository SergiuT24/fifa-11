import React from 'react';
import { ProLeagueSeasonTwoPlayerStats2x2 } from '../../../../../components/league/playerStats/UniversalPlayerStats';
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const ProLeaguePlayerStats = () => {
	return (
		<div>
			<ProLeagueSeasonTwoPlayerStats2x2 />
			<PlayerStatsAbout />
		</div>
	);
}

export default ProLeaguePlayerStats;
