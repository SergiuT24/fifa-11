import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import KingsCupSummary from './KingsCupSummary';
import KingsCupNews from './KingsCupNews'
import KingsCupPlayerStats from './KingsCupPlayerStats';

const KingsCupMain = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <KingsCupSummary />
			case 'News':
				return <KingsCupNews />
			case 'Player Stats':
				return <KingsCupPlayerStats />
			default:
				return <KingsCupSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={`1x1 > King's Cup`}
				logo={'/img/league/kings-cup1x1.png'}
				name={`King's Cup`}
				season={'Season 11'}
				cupImg={'/img/trophy/kings-cup.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default KingsCupMain;
