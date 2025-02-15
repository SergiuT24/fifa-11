import React from 'react';
import { SeasonFour2x2 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonFour2x2 />
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
