import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import KingsCupSeasonOneSummary1x1 from './KingsCupSeasonOneSummary1x1';
import KingsCupSeasonOne1x1News from './KingsCupSeasonOne1x1News';

const KingsCupSeasonOne1x1 = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <KingsCupSeasonOneSummary1x1 />
			case 'News':
				return <KingsCupSeasonOne1x1News />
			default:
				return <KingsCupSeasonOneSummary1x1 />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={`1x1 > King's Cup`}
				logo={'/img/league/kings-cup1x1.png'}
				name={`King's Cup`}
				season={'Season 1'}
				cupImg={'/img/trophy/kings-cup.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default KingsCupSeasonOne1x1;
