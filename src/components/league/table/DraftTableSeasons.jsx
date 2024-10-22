import React from 'react';
import DraftTable from './DraftTable.jsx';

import { initialTeams as initialTeamsSeasonOneGroupA1x1, matchResults as matchResultsSeasonOneGroupA1x1 } from '../../../data/draftOne/DraftSeasonOneGroupATableResults1x1.jsx';
import { initialTeams as initialTeamsSeasonOneGroupB1x1, matchResults as matchResultsSeasonOneGroupB1x1 } from '../../../data/draftOne/DraftSeasonOneGroupBTableResults1x1.jsx';
import { initialTeams as initialTeamsSeasonOneGroupA2x2, matchResults as matchResultsSeasonOneGroupA2x2 } from '../../../data/draftOne/DraftSeasonOneGroupATableResults2x2.jsx';
import { initialTeams as initialTeamsSeasonOneGroupB2x2, matchResults as matchResultsSeasonOneGroupB2x2 } from '../../../data/draftOne/DraftSeasonOneGroupBTableResults2x2.jsx';
import { initialTeams as initialTeamsSeasonOneGroupA3x3, matchResults as matchResultsSeasonOneGroupA3x3 } from '../../../data/draftOne/DraftSeasonOneGroupATableResults3x3.jsx';
import { initialTeams as initialTeamsSeasonOneGroupB3x3, matchResults as matchResultsSeasonOneGroupB3x3 } from '../../../data/draftOne/DraftSeasonOneGroupBTableResults3x3.jsx';
import { initialTeams as initialTeamsSeasonOneGroupA4x4, matchResults as matchResultsSeasonOneGroupA4x4 } from '../../../data/draftOne/DraftSeasonOneGroupATableResults4x4.jsx';
import { initialTeams as initialTeamsSeasonOneGroupB4x4, matchResults as matchResultsSeasonOneGroupB4x4 } from '../../../data/draftOne/DraftSeasonOneGroupBTableResults4x4.jsx';

const DraftSeasonOneGroupA1x1 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOneGroupA1x1}
		matchResults={matchResultsSeasonOneGroupA1x1}
		seasonTitle="Group A Season 1 (1x1) "
	/>
);

const DraftSeasonOneGroupB1x1 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOneGroupB1x1}
		matchResults={matchResultsSeasonOneGroupB1x1}
		seasonTitle="Group B Season 1 (1x1)"
	/>
);

const DraftSeasonOneGroupA2x2 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOneGroupA2x2}
		matchResults={matchResultsSeasonOneGroupA2x2}
		seasonTitle="Group A Season 1 (2x2) "
	/>
);

const DraftSeasonOneGroupB2x2 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOneGroupB2x2}
		matchResults={matchResultsSeasonOneGroupB2x2}
		seasonTitle="Group B Season 1 (2x2)"
	/>
);

const DraftSeasonOneGroupA3x3 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOneGroupA3x3}
		matchResults={matchResultsSeasonOneGroupA3x3}
		seasonTitle="Group A Season 1 (3x3) "
	/>
);

const DraftSeasonOneGroupB3x3 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOneGroupB3x3}
		matchResults={matchResultsSeasonOneGroupB3x3}
		seasonTitle="Group B Season 1 (3x3)"
	/>
);

const DraftSeasonOneGroupA4x4 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOneGroupA4x4}
		matchResults={matchResultsSeasonOneGroupA4x4}
		seasonTitle="Group A Season 1 (4x4) "
	/>
);

const DraftSeasonOneGroupB4x4 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOneGroupB4x4}
		matchResults={matchResultsSeasonOneGroupB4x4}
		seasonTitle="Group B Season 1 (4x4)"
	/>
);

export { DraftSeasonOneGroupA1x1, DraftSeasonOneGroupB1x1, DraftSeasonOneGroupA2x2, DraftSeasonOneGroupB2x2, DraftSeasonOneGroupA3x3, DraftSeasonOneGroupB3x3, DraftSeasonOneGroupA4x4, DraftSeasonOneGroupB4x4 };