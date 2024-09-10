import React from 'react';
import { SeasonTwo1x1 } from '../../../../../components/league/table/ProLeagueTableSeasons';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonTwo1x1 />
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
