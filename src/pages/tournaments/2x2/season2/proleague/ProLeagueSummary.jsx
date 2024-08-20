import React from 'react';
import ProLeagueTableSeasonTwo2x2 from '../../../../../components/league/table/ProLeagueTableSeasonTwo2x2';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<ProLeagueTableSeasonTwo2x2 />
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
