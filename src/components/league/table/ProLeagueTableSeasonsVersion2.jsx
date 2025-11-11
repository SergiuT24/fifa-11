import React from 'react';
import LeagueTableVersion2 from './LeagueTableVersion2.jsx';

import { initialTeams as initialTeamsSeasonTree2x2, matchResults as matchResultsSeasonTree2x2 } from '../../../data/seasonTree2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonFour2x2, matchResults as matchResultsSeasonFour2x2 } from '../../../data/seasonFour2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonFive2x2, matchResults as matchResultsSeasonFive2x2 } from '../../../data/seasonFive2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonSix2x2, matchResults as matchResultsSeasonSix2x2 } from '../../../data/seasonSix2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonSeven2x2, matchResults as matchResultsSeasonSeven2x2 } from '../../../data/seasonSeven2x2/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonFour1x1, matchResults as matchResultsSeasonFour1x1 } from '../../../data/seasonFour1x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonFive1x1, matchResults as matchResultsSeasonFive1x1 } from '../../../data/seasonFive1x1/ProLeagueTableResults.jsx';
import { initialTeams as initialTeamsSeasonSix1x1, matchResults as matchResultsSeasonSix1x1 } from '../../../data/seasonSix1x1/ProLeagueTableResults.jsx';

const SeasonTree2x2 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonTree2x2}
		matchResults={matchResultsSeasonTree2x2}
		seasonTitle="Season 3 (2x2) "
	/>
);

const SeasonFour2x2 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonFour2x2}
		matchResults={matchResultsSeasonFour2x2}
		seasonTitle="Season 4 (2x2) "
	/>
);

const SeasonFive2x2 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonFive2x2}
		matchResults={matchResultsSeasonFive2x2}
		seasonTitle="Season 5 (2x2) "
	/>
);

const SeasonSix2x2 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonSix2x2}
		matchResults={matchResultsSeasonSix2x2}
		seasonTitle="Season 6 (2x2) "
	/>
);

const SeasonSeven2x2 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonSeven2x2}
		matchResults={matchResultsSeasonSeven2x2}
		seasonTitle="Season 7 (2x2) "
	/>
);

const SeasonFour1x1 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonFour1x1}
		matchResults={matchResultsSeasonFour1x1}
		seasonTitle="Season 4 (1x1) "
	/>
);

const SeasonFive1x1 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonFive1x1}
		matchResults={matchResultsSeasonFive1x1}
		seasonTitle="Season 5 (1x1) "
	/>
);

const SeasonSix1x1 = () => (
	<LeagueTableVersion2
		initialTeams={initialTeamsSeasonSix1x1}
		matchResults={matchResultsSeasonSix1x1}
		seasonTitle="Season 6 (1x1) "
	/>
);

export { SeasonTree2x2, SeasonFour1x1, SeasonFive1x1, SeasonFour2x2, SeasonSix1x1, SeasonFive2x2, SeasonSix2x2, SeasonSeven2x2 };