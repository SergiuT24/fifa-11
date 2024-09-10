import React from 'react';
import { SeasonTwo1x1 } from '../../../../../components/league/table/ProLeagueTableSeasons';
import LeagueTableLegend1x1 from '../../../../../components/league/table/LeagueTableLegend1x1';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonTwo1x1 />
			{/* <LeagueTableLegend1x1 /> */}
		</div>
	);
}

export default ProLeagueSummary;
