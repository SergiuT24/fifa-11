import React from 'react';
import { SeasonSix1x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';
import LatestScores from '../../../../../components/league/latest-scores/LatestScores';


const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonSix1x1 />
			<LatestScores />
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
