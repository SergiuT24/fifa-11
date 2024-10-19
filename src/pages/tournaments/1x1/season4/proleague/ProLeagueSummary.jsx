import React from 'react';
import { SeasonFour1x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonFour1x1 />
			<LeagueTableLegendWorldCup />
		</div>
	);
}

export default ProLeagueSummary;
