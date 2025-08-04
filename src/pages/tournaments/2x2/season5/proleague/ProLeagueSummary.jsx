import React from 'react';
import { SeasonFive2x2 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonFive2x2 />
			<LeagueTableLegendWorldCup />
		</div>
	);
}

export default ProLeagueSummary;
