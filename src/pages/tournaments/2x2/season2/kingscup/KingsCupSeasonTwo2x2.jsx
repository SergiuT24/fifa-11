import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import KingsCupSeasonTwoSummary2x2 from './KingsCupSeasonTwoSummary2x2';

const KingsCupSeasonTwo2x2 = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <KingsCupSeasonTwoSummary2x2 />
			// case 'News':
			// 	return <ChampionsLeagueNews />
			default:
				return <KingsCupSeasonTwoSummary2x2 />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={`2x2 > King's Cup`}
				logo={'/img/league/kings-cup.png'}
				name={`King's Cup`}
				season={'Season 1'}
				cupImg={'/img/trophy/kings-cup.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default KingsCupSeasonTwo2x2;
