import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import WorldCupSummary from './WorldCupSummary';
import WorldCupNews from './WorldCupNews';
import WorldCupPlayerStats from './WorldCupPlayerStats';

const WorldCupMain = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <WorldCupSummary />
			case 'News':
				return <WorldCupNews />
			case 'Player Stats':
				return <WorldCupPlayerStats />
			default:
				return <WorldCupSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'2x2 > World Cup'}
				logo={'/img/league/world-cup.png'}
				name={'World Cup'}
				season={'Season 3'}
				cupImg={'/img/trophy/world-cup.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default WorldCupMain;
