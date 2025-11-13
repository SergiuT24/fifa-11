import React from 'react';
import { Season181x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion3';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';
import News from '../../../../../components/league/news/News';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<Season181x1 />
			<LeagueTableLegendWorldCup />
		</div>
	);
}

export default ProLeagueSummary;
