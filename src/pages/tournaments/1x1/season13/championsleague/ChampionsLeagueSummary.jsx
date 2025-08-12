import React from 'react';
import ChampionsLeaguePlayOffs from './ChampionsLeaguePlayOffs';
import { UCL131x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion3';

const ChampionsLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-24'>
			<UCL131x1 />
			<ChampionsLeaguePlayOffs />
		</div>
	);
}

export default ChampionsLeagueSummary;
