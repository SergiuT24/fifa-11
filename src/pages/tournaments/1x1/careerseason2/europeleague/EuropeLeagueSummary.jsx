import React from 'react';
import EuropeLeaguePlayOffs from './EuropeLeaguePlayOffs';
import News from '../../../../../components/league/news/News';
import { EuropeCareerTwo } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion3';

const EuropeLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-24'>
			<EuropeCareerTwo />
			<EuropeLeaguePlayOffs />
		</div>
	);
}

export default EuropeLeagueSummary;
