import React from 'react';
import { SeasonTwo2x2 } from '../../../../../components/league/table/ProLeagueTableSeasons';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonTwo2x2 />
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
