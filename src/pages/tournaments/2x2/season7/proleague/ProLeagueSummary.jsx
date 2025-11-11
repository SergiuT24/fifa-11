import React from 'react';
import { SeasonSeven2x2 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';
import News from '../../../../../components/league/news/News';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonSeven2x2 />
			<LeagueTableLegendWorldCup />
		</div>
	);
}

export default ProLeagueSummary;
