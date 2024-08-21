import React from 'react';
import LeagueTable from './LeagueTable.jsx';
import { initialTeams as initialTeamsSeasonOne1x1, matchResults as matchResultsSeasonOne1x1 } from '../../../data/seasonOne1x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonOne2x2, matchResults as matchResultsSeasonOne2x2 } from '../../../data/seasonOne2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonTwo2x2, matchResults as matchResultsSeasonTwo2x2 } from '../../../data/seasonTwo2x2/ProLeagueTableResults.jsx';

const SeasonOne1x1 = () => (
	<LeagueTable
		initialTeams={initialTeamsSeasonOne1x1}
		matchResults={matchResultsSeasonOne1x1}
		seasonTitle="Pro League Season 1 (1x1)"
	/>
);

const SeasonOne2x2 = () => (
	<LeagueTable
		initialTeams={initialTeamsSeasonOne2x2}
		matchResults={matchResultsSeasonOne2x2}
		seasonTitle="Pro League Season 1 (2x2)"
	/>
);

const SeasonTwo2x2 = () => (
	<LeagueTable
		initialTeams={initialTeamsSeasonTwo2x2}
		matchResults={matchResultsSeasonTwo2x2}
		seasonTitle="Pro League Season 2 (2x2)"
	/>
);

export { SeasonOne1x1, SeasonOne2x2, SeasonTwo2x2 };
