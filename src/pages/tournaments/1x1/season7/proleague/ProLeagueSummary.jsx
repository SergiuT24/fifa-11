import React from 'react';
import { SeasonSeven1x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion3';
import News from '../../../../../components/league/news/News'
import LeagueTableLegendDivisions from '../../../../../components/league/table/LeagueTableLegendDivisions';
// import LatestScores from '../../../../../components/league/latest-scores/LatestScores';


const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonSeven1x1 />
			{/* <LatestScores /> */}
			<LeagueTableLegendDivisions />
		</div>
	);
}

export default ProLeagueSummary;
