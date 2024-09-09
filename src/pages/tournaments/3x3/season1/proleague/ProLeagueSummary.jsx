import React from 'react';
import { SeasonOne3x3 } from '../../../../../components/league/table/ProLeagueTableSeasons';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonOne3x3 />
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
