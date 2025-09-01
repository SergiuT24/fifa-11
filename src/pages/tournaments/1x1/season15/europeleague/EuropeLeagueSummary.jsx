import React from 'react';
import EuropeLeaguePlayOffs from './EuropeLeaguePlayOffs';
import News from '../../../../../components/league/news/News';
import { Europe151x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion3';

const EuropeLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-24'>
			<Europe151x1 />
			<EuropeLeaguePlayOffs />
		</div>
	);
}

export default EuropeLeagueSummary;
