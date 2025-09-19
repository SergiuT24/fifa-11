import React from 'react';
import { Season171x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion3';
import News from '../../../../../components/league/news/News'
import LeagueTableLegendDivisions from '../../../../../components/league/table/LeagueTableLegendDivisions';


const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<Season171x1 />
			<LeagueTableLegendDivisions />
		</div>
	);
}

export default ProLeagueSummary;
