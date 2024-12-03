import React from 'react';
import LeagueTableVersion3 from './LeagueTableVersion3.jsx';

import { initialTeams as initialTeamsSeven1x1, additionalTeams as additionalTeamsSeasonSeven1x1, matchResults as matchResultsSeasonSeven1x1 } from '../../../data/seasonSeven1x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsUCLSeven1x1, additionalTeams as additionalTeamsUCLSeasonSeven1x1, matchResults as matchResultsUCLSeasonSeven1x1 } from '../../../data/seasonSeven1x1/UCLTableResult.jsx';
import { initialTeams as initialTeamsEuropeSeven1x1, additionalTeams as additionalTeamsEuropeSeasonSeven1x1, matchResults as matchResultsEuropeSeasonSeven1x1 } from '../../../data/seasonSeven1x1/EuropeTableResults.jsx';

// Season 7 1x1

const SeasonSeven1x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsSeven1x1}
		additionalTeams={additionalTeamsSeasonSeven1x1}
		matchResults={matchResultsSeasonSeven1x1}
		seasonTitle="Season 7 (1x1) "
		divisionNameOne={'Pro League'}
		divisionNameTwo={'Middle League'}
	/>
);

const UCLSeven1x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsUCLSeven1x1}
		additionalTeams={additionalTeamsUCLSeasonSeven1x1}
		matchResults={matchResultsUCLSeasonSeven1x1}
		seasonTitle="Group Stage "
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

const EuropeSeven1x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsEuropeSeven1x1}
		additionalTeams={additionalTeamsEuropeSeasonSeven1x1}
		matchResults={matchResultsEuropeSeasonSeven1x1}
		seasonTitle="Group Stage"
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

// ========================================================================================


export { SeasonSeven1x1, UCLSeven1x1, EuropeSeven1x1 };