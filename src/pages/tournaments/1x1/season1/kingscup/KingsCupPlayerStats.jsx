import React from 'react';
import { KingsCupSeasonOnePlayerStats1x1 } from '../../../../../components/league/playerStats/UniversalPlayerStats';
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const KingsCupPlayerStats = () => {
	return (
		<div>
			<KingsCupSeasonOnePlayerStats1x1 />
			<PlayerStatsAbout />
		</div>
	);
}

export default KingsCupPlayerStats;
