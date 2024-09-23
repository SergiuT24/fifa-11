import React from 'react';
import { SeasonTree1x1 } from '../../../../../components/league/table/ProLeagueTableSeasons';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonTree1x1 />
			{/* <LeagueTableLegendWorldCup /> */}
		</div>
	);
}

export default ProLeagueSummary;
