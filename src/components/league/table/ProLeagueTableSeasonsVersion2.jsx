import React from 'react';
import LeagueTableVersion2 from './LeagueTableVersion2.jsx';

import { initialTeams as initialTeamsSeasonTree2x2, matchResults as matchResultsSeasonTree2x2 } from '../../../data/seasonTree2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonFour1x1, matchResults as matchResultsSeasonFour1x1 } from '../../../data/seasonFour1x1/ProLeagueTableResults.jsx';

const SeasonTree2x2 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonTree2x2}
		matchResults={matchResultsSeasonTree2x2}
		seasonTitle="Season 3 (2x2) "
	/>
);

const SeasonFour1x1 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonFour1x1}
		matchResults={matchResultsSeasonFour1x1}
		seasonTitle="Season 4 (1x1) "
	/>
);

export { SeasonTree2x2, SeasonFour1x1 };