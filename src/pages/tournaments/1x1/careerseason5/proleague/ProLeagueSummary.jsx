import React from 'react';
import { CareerSeasonFive } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion3';
import News from '../../../../../components/league/news/News'
import LeagueTableLegendDivisions from '../../../../../components/league/table/LeagueTableLegendDivisions';


const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<CareerSeasonFive />
			<LeagueTableLegendDivisions />
		</div>
	);
}

export default ProLeagueSummary;
