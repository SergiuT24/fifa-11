import React from 'react';
import { ProLeagueSeasonTwoPlayerStats1x1 } from '../../../../../components/league/playerStats/UniversalPlayerStats';
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const ProLeaguePlayerStats = () => {
	return (
		<div>
			<ProLeagueSeasonTwoPlayerStats1x1 />
			<PlayerStatsAbout />
		</div>
	);
}

export default ProLeaguePlayerStats;
