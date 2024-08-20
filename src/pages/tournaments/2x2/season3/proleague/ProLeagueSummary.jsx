import React from 'react';
import ProLeagueTableSeasonOne from '../../../../../components/league/table/ProLeagueTableSeasonOne';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<ProLeagueTableSeasonOne />
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
