import React from 'react';
import LeagueTableVersion3 from './LeagueTableVersion3.jsx';

import { initialTeams as initialTeamsSeven1x1, additionalTeams as additionalTeamsSeasonSeven1x1, matchResults as matchResultsSeasonSeven1x1 } from '../../../data/seasonSeven1x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsUCLSeven1x1, additionalTeams as additionalTeamsUCLSeasonSeven1x1, matchResults as matchResultsUCLSeasonSeven1x1 } from '../../../data/seasonSeven1x1/UCLTableResult.jsx';
import { initialTeams as initialTeamsEuropeSeven1x1, additionalTeams as additionalTeamsEuropeSeasonSeven1x1, matchResults as matchResultsEuropeSeasonSeven1x1 } from '../../../data/seasonSeven1x1/EuropeTableResults.jsx';
// Season 8 1x1
import { initialTeams as initialTeams81x1, additionalTeams as additionalTeamsSeason81x1, matchResults as matchResultsSeason81x1 } from '../../../data/season81x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsUCL81x1, additionalTeams as additionalTeamsUCLSeason81x1, matchResults as matchResultsUCLSeason81x1 } from '../../../data/season81x1/UCLTableResult.jsx';
import { initialTeams as initialTeamsEurope81x1, additionalTeams as additionalTeamsEuropeSeason81x1, matchResults as matchResultsEuropeSeason81x1 } from '../../../data/season81x1/EuropeTableResults.jsx';

// Season 9 1x1
import { initialTeams as initialTeams91x1, additionalTeams as additionalTeamsSeason91x1, matchResults as matchResultsSeason91x1 } from '../../../data/season91x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsUCL91x1, additionalTeams as additionalTeamsUCLSeason91x1, matchResults as matchResultsUCLSeason91x1 } from '../../../data/season91x1/UCLTableResult.jsx';
import { initialTeams as initialTeamsEurope91x1, additionalTeams as additionalTeamsEuropeSeason91x1, matchResults as matchResultsEuropeSeason91x1 } from '../../../data/season91x1/EuropeTableResults.jsx';

// Season 10 1x1
import { initialTeams as initialTeams101x1, additionalTeams as additionalTeamsSeason101x1, matchResults as matchResultsSeason101x1 } from '../../../data/season101x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsUCL101x1, additionalTeams as additionalTeamsUCLSeason101x1, matchResults as matchResultsUCLSeason101x1 } from '../../../data/season101x1/UCLTableResult.jsx';
import { initialTeams as initialTeamsEurope101x1, additionalTeams as additionalTeamsEuropeSeason101x1, matchResults as matchResultsEuropeSeason101x1 } from '../../../data/season101x1/EuropeTableResults.jsx';

// Season 11 1x1
import { initialTeams as initialTeams111x1, additionalTeams as additionalTeamsSeason111x1, matchResults as matchResultsSeason111x1 } from '../../../data/season111x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsUCL111x1, additionalTeams as additionalTeamsUCLSeason111x1, matchResults as matchResultsUCLSeason111x1 } from '../../../data/season111x1/UCLTableResult.jsx';
import { initialTeams as initialTeamsEurope111x1, additionalTeams as additionalTeamsEuropeSeason111x1, matchResults as matchResultsEuropeSeason111x1 } from '../../../data/season101x1/EuropeTableResults.jsx';

// Season 12 1x1
import { initialTeams as initialTeams121x1, additionalTeams as additionalTeamsSeason121x1, matchResults as matchResultsSeason121x1 } from '../../../data/season121x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsUCL121x1, additionalTeams as additionalTeamsUCLSeason121x1, matchResults as matchResultsUCLSeason121x1 } from '../../../data/season121x1/UCLTableResult.jsx';
import { initialTeams as initialTeamsEurope121x1, additionalTeams as additionalTeamsEuropeSeason121x1, matchResults as matchResultsEuropeSeason121x1 } from '../../../data/season121x1/EuropeTableResults.jsx';


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

// Season 8 1x1
const Season81x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeams81x1}
		additionalTeams={additionalTeamsSeason81x1}
		matchResults={matchResultsSeason81x1}
		seasonTitle="Season 8 (1x1) "
		divisionNameOne={'Pro League'}
		divisionNameTwo={'Middle League'}
	/>
);

const UCL81x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsUCL81x1}
		additionalTeams={additionalTeamsUCLSeason81x1}
		matchResults={matchResultsUCLSeason81x1}
		seasonTitle="Group Stage "
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

const Europe81x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsEurope81x1}
		additionalTeams={additionalTeamsEuropeSeason81x1}
		matchResults={matchResultsEuropeSeason81x1}
		seasonTitle="Group Stage"
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

// Season 9 1x1
const Season91x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeams91x1}
		additionalTeams={additionalTeamsSeason91x1}
		matchResults={matchResultsSeason91x1}
		seasonTitle="Season 9 (1x1) "
		divisionNameOne={'Pro League'}
		divisionNameTwo={'Middle League'}
	/>
);

const UCL91x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsUCL91x1}
		additionalTeams={additionalTeamsUCLSeason91x1}
		matchResults={matchResultsUCLSeason91x1}
		seasonTitle="Group Stage "
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

const Europe91x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsEurope91x1}
		additionalTeams={additionalTeamsEuropeSeason91x1}
		matchResults={matchResultsEuropeSeason91x1}
		seasonTitle="Group Stage"
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

// Season 10 1x1
const Season101x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeams101x1}
		additionalTeams={additionalTeamsSeason101x1}
		matchResults={matchResultsSeason101x1}
		seasonTitle="Season 10 (1x1) "
		divisionNameOne={'Pro League'}
		divisionNameTwo={'Middle League'}
	/>
);

const UCL101x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsUCL101x1}
		additionalTeams={additionalTeamsUCLSeason101x1}
		matchResults={matchResultsUCLSeason101x1}
		seasonTitle="Group Stage "
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

const Europe101x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsEurope101x1}
		additionalTeams={additionalTeamsEuropeSeason101x1}
		matchResults={matchResultsEuropeSeason101x1}
		seasonTitle="Group Stage"
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

// Season 11 1x1
const Season111x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeams111x1}
		additionalTeams={additionalTeamsSeason111x1}
		matchResults={matchResultsSeason111x1}
		seasonTitle="Season 11 (1x1) "
		divisionNameOne={'Pro League'}
		divisionNameTwo={'Middle League'}
	/>
);

const UCL111x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsUCL111x1}
		additionalTeams={additionalTeamsUCLSeason111x1}
		matchResults={matchResultsUCLSeason111x1}
		seasonTitle="Group Stage "
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

const Europe111x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsEurope111x1}
		additionalTeams={additionalTeamsEuropeSeason111x1}
		matchResults={matchResultsEuropeSeason111x1}
		seasonTitle="Group Stage"
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

// Season 12 1x1
const Season121x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeams121x1}
		additionalTeams={additionalTeamsSeason121x1}
		matchResults={matchResultsSeason121x1}
		seasonTitle="Season 12 (1x1) "
		divisionNameOne={'Pro League'}
		divisionNameTwo={'Middle League'}
	/>
);

const UCL121x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsUCL121x1}
		additionalTeams={additionalTeamsUCLSeason121x1}
		matchResults={matchResultsUCLSeason121x1}
		seasonTitle="Group Stage "
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

const Europe121x1 = () => (
	<LeagueTableVersion3
		initialTeams={initialTeamsEurope121x1}
		additionalTeams={additionalTeamsEuropeSeason121x1}
		matchResults={matchResultsEuropeSeason121x1}
		seasonTitle="Group Stage"
		divisionNameOne={'Group A'}
		divisionNameTwo={'Group B'}
	/>
);

// ========================================================================================


export {
	SeasonSeven1x1,
	UCLSeven1x1,
	EuropeSeven1x1,
	Season81x1,
	UCL81x1,
	Europe81x1,
	Season91x1,
	UCL91x1,
	Europe91x1,
	Season101x1,
	UCL101x1,
	Europe101x1,
	Season111x1,
	UCL111x1,
	Europe111x1,
	Season121x1,
	UCL121x1,
	Europe121x1,
};