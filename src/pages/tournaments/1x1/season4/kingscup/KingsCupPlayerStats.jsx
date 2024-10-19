import React from 'react';
import { KingsCupSeasonTwoPlayerStats1x1 } from '../../../../../components/league/playerStats/UniversalPlayerStats';
import PlayerStatsAbout from '../../../../../components/league/playerStats/PlayerStatsAbout';

const KingsCupPlayerStats = () => {
	return (
		<div>
			<KingsCupSeasonTwoPlayerStats1x1 />
			<PlayerStatsAbout />
		</div>
	);
}

export default KingsCupPlayerStats;
