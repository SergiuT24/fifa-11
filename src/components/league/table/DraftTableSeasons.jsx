import React from 'react';
import DraftTable from './DraftTable.jsx';

import { initialTeams as initialTeamsSeasonOne1x1, additionalTeams as additionalTeamsSeasonOne1x1, matchResults as matchResultsSeasonOne1x1 } from '../../../data/draftOne/DraftSeasonOneTableResults1x1.jsx';
import { initialTeams as initialTeamsSeasonOne2x2, additionalTeams as additionalTeamsSeasonOne2x2, matchResults as matchResultsSeasonOne2x2 } from '../../../data/draftOne/DraftSeasonOneTableResults2x2.jsx';
import { initialTeams as initialTeamsSeasonOne3x3, additionalTeams as additionalTeamsSeasonOne3x3, matchResults as matchResultsSeasonOne3x3 } from '../../../data/draftOne/DraftSeasonOneTableResults3x3.jsx';
import { initialTeams as initialTeamsSeasonOne4x4, additionalTeams as additionalTeamsSeasonOne4x4, matchResults as matchResultsSeasonOne4x4 } from '../../../data/draftOne/DraftSeasonOneTableResults4x4.jsx';

const DraftSeasonOne1x1 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOne1x1}
		additionalTeams={additionalTeamsSeasonOne1x1}
		matchResults={matchResultsSeasonOne1x1}
		seasonTitleOne="Group A (1x1) "
		seasonTitleTwo="Group B (1x1) "
		groupStage={'Stage 1x1'}
	/>
);

const DraftSeasonOne2x2 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOne2x2}
		additionalTeams={additionalTeamsSeasonOne2x2}
		matchResults={matchResultsSeasonOne2x2}
		seasonTitleOne="Group A (2x2) "
		seasonTitleTwo="Group B (2x2) "
		groupStage={'Stage 2x2'}
		draftDescription={'Команда выбирается рандомом для каждой группы (1, 2, 3) из тех команд, что уже находятся в группе B. Играются 2 матча против команды-соперника (Team1 vs Team1, Team2 vs Team2, Team3 vs Team3)'}
		first={'Team 1 = place 1 and place 6'}
		second={'Team 2 = place 2 and place 5'}
		tree={'Team 3 = place 3 and place 4'}
		staticPoints={106}
	/>
);

const DraftSeasonOne3x3 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOne3x3}
		additionalTeams={additionalTeamsSeasonOne3x3}
		matchResults={matchResultsSeasonOne3x3}
		seasonTitleOne="Group A (3x3) "
		seasonTitleTwo="Group B (3x3) "
		groupStage={'Stage 3x3'}
		draftDescription={'Команда выбирается рандомом для каждой группы (1, 2) из тех команд, что уже находятся в группе B. Играются 2 матча против команды-соперника (Team1 vs Team1, Team2 vs Team2).'}
		first={'Team 1 = place 1, place 3, place 5'}
		second={'Team 2 = place 2, place 4, place 6'}
	/>
);

const DraftSeasonOne4x4 = () => (
	<DraftTable
		initialTeams={initialTeamsSeasonOne4x4}
		additionalTeams={additionalTeamsSeasonOne4x4}
		matchResults={matchResultsSeasonOne4x4}
		seasonTitleOne="Group A (4x4) "
		seasonTitleTwo="Group B (4x4) "
		groupStage={'Stage 4x4'}
		draftDescription={'Команда выбирается рандомом для каждой группы (1) из тех команд, что уже находятся в группе B. Играются 2 матча против команды-соперника (Team1 vs Team1).'}
		first={'Team 1 = place 1, place 2, place 3, place 4'}
	/>
);


export { DraftSeasonOne1x1, DraftSeasonOne2x2, DraftSeasonOne3x3, DraftSeasonOne4x4 };