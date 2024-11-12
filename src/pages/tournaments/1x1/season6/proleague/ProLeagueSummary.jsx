import React from 'react';
import ProLeagueTableSeasonOne1x1 from '../../../../../components/league/table/ProLeagueTableSeasonOne1x1';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<ProLeagueTableSeasonOne1x1 />
			<LeagueTableLegendWorldCup />
		</div>
	);
}

export default ProLeagueSummary;
