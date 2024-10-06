import React from 'react';
import LeagueTable from './LeagueTable.jsx';
import { initialTeams as initialTeamsSeasonOne1x1, matchResults as matchResultsSeasonOne1x1 } from '../../../data/seasonOne1x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonTwo1x1, matchResults as matchResultsSeasonTwo1x1 } from '../../../data/seasonTwo1x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonTree1x1, matchResults as matchResultsSeasonTree1x1 } from '../../../data/seasonTree1x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonOne2x2, matchResults as matchResultsSeasonOne2x2 } from '../../../data/seasonOne2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonTwo2x2, matchResults as matchResultsSeasonTwo2x2 } from '../../../data/seasonTwo2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonOne3x3, matchResults as matchResultsSeasonOne3x3 } from '../../../data/seasonOne3x3/ProLeagueTableResults.jsx';

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

const SeasonOne3x3 = () => (
	<LeagueTable
		initialTeams={initialTeamsSeasonOne3x3}
		matchResults={matchResultsSeasonOne3x3}
		seasonTitle="Pro League Season 1 (3x3)"
	/>
);

const SeasonTwo1x1 = () => (
	<LeagueTable
		initialTeams={initialTeamsSeasonTwo1x1}
		matchResults={matchResultsSeasonTwo1x1}
		seasonTitle="Season 2 (1x1) "
	/>
);

const SeasonTree1x1 = () => (
	<LeagueTable
		initialTeams={initialTeamsSeasonTree1x1}
		matchResults={matchResultsSeasonTree1x1}
		seasonTitle="Season 3 (1x1) "
	/>
);




export { SeasonOne1x1, SeasonOne2x2, SeasonTwo2x2, SeasonOne3x3, SeasonTwo1x1, SeasonTree1x1 };
