import React from 'react';
import PlayerStatsTables from './PlayerStatsTables.jsx';
// Season 1 1x1
import { initialPlayers as initialPlayersProLeague1x1, playerStats as playerStatsProLeague1x1 } from '../../../data/seasonOne1x1/ProLeaguePlayerStats.jsx';
import { initialPlayers as initialPlayersWorldCup1x1, playerStats as playerStatsWorldCup1x1 } from '../../../data/seasonOne1x1/WorldCupPlayerStats.jsx';
import { initialPlayers as initialPlayersKingsCup1x1, playerStats as playerStatsKingsCup1x1 } from '../../../data/seasonOne1x1/KingsCupPlayerStats.jsx';
// Season 1 2x2
import { initialPlayers as initialPlayersSeasonOnePro2x2, playerStats as playerStatsSeasonOnePro2x2 } from '../../../data/seasonOne2x2/ProLeaguePlayerStats.jsx';
import { initialPlayers as initialPlayersSeasonOneUCL2x2, playerStats as playerStatsSeasonOneUCL2x2 } from '../../../data/seasonOne2x2/UCLPlayerStats.jsx';
import { initialPlayers as initialPlayersSeasonOneKings2x2, playerStats as playerStatsSeasonOneKings2x2 } from '../../../data/seasonOne2x2/KingsCupPlayerStats.jsx';
// Season 2 2x2
import { initialPlayers as initialPlayersSeasonTwoPro2x2, playerStats as playerStatsSeasonTwoPro2x2 } from '../../../data/seasonTwo2x2/ProLeaguePlayerStats.jsx';
import { initialPlayers as initialPlayersSeasonTwoUCL2x2, playerStats as playerStatsSeasonTwoUCL2x2 } from '../../../data/seasonTwo2x2/UCLPlayerStats.jsx';
import { initialPlayers as initialPlayersSeasonTwoKings2x2, playerStats as playerStatsSeasonTwoKings2x2 } from '../../../data/seasonTwo2x2/KingsCupPlayerStats.jsx';
// Season 1 3x3
import { initialPlayers as initialPlayersSeasonOnePro3x3, playerStats as playerStatsSeasonOnePro3x3 } from '../../../data/seasonOne3x3/ProLeaguePlayerStats.jsx';
import { initialPlayers as initialPlayersSeasonOneUCL3x3, playerStats as playerStatsSeasonOneUCL3x3 } from '../../../data/seasonOne3x3/UCLPlayerStats.jsx';
import { initialPlayers as initialPlayersSeasonOneKings3x3, playerStats as playerStatsSeasonOneKings3x3 } from '../../../data/seasonOne3x3/KingsCupPlayerStats.jsx';

// Season 1 1x1
const ProLeagueSeasonOnePlayerStats1x1 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersProLeague1x1}
		playerStats={playerStatsProLeague1x1}
	/>
);
const WorldCupSeasonOnePlayerStats1x1 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersWorldCup1x1}
		playerStats={playerStatsWorldCup1x1}
	/>
);
const KingsCupSeasonOnePlayerStats1x1 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersKingsCup1x1}
		playerStats={playerStatsKingsCup1x1}
	/>
);
// Season 1 2x2
const ProLeagueSeasonOnePlayerStats2x2 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonOnePro2x2}
		playerStats={playerStatsSeasonOnePro2x2}
	/>
);
const UCLSeasonOnePlayerStats2x2 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonOneUCL2x2}
		playerStats={playerStatsSeasonOneUCL2x2}
	/>
);
const KingsCupSeasonOnePlayerStats2x2 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonOneKings2x2}
		playerStats={playerStatsSeasonOneKings2x2}
	/>
);
// Season 2 2x2
const ProLeagueSeasonTwoPlayerStats2x2 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonTwoPro2x2}
		playerStats={playerStatsSeasonTwoPro2x2}
	/>
);
const UCLSeasonTwoPlayerStats2x2 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonTwoUCL2x2}
		playerStats={playerStatsSeasonTwoUCL2x2}
	/>
);
const KingsCupSeasonTwoPlayerStats2x2 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonTwoKings2x2}
		playerStats={playerStatsSeasonTwoKings2x2}
	/>
);
// Season 1 3x3
const ProLeagueSeasonOnePlayerStats3x3 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonOnePro3x3}
		playerStats={playerStatsSeasonOnePro3x3}
	/>
);
const UCLSeasonOnePlayerStats3x3 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonOneUCL3x3}
		playerStats={playerStatsSeasonOneUCL3x3}
	/>
);
const KingsCupSeasonOnePlayerStats3x3 = () => (
	<PlayerStatsTables
		initialPlayers={initialPlayersSeasonOneKings3x3}
		playerStats={playerStatsSeasonOneKings3x3}
	/>
);

export {
	//Season 1 1x1
	ProLeagueSeasonOnePlayerStats1x1,
	WorldCupSeasonOnePlayerStats1x1,
	KingsCupSeasonOnePlayerStats1x1,
	// Season 1 2x2
	ProLeagueSeasonOnePlayerStats2x2,
	UCLSeasonOnePlayerStats2x2,
	KingsCupSeasonOnePlayerStats2x2,
	// Season 2 2x2
	ProLeagueSeasonTwoPlayerStats2x2,
	UCLSeasonTwoPlayerStats2x2,
	KingsCupSeasonTwoPlayerStats2x2,
	// Season 1 3x3
	ProLeagueSeasonOnePlayerStats3x3,
	UCLSeasonOnePlayerStats3x3,
	KingsCupSeasonOnePlayerStats3x3
};
