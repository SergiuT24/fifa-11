import React from 'react';
import LeagueTableVersion2 from './LeagueTableVersion2.jsx';

import { initialTeams as initialTeamsSeasonTree2x2, matchResults as matchResultsSeasonTree2x2 } from '../../../data/seasonTree2x2/ProLeagueTableResults.jsx';

const SeasonTree2x2 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonTree2x2}
		matchResults={matchResultsSeasonTree2x2}
		seasonTitle="Season 3 (2x2) "
	/>
);

export { SeasonTree2x2 };