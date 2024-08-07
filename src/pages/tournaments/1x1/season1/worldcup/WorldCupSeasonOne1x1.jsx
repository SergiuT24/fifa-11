import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import WorldCupSummary from './WorldCupSummary';
import WorldCupNews from './WorldCupNews';
import WorldCupPlayerStatsSeasonOne1x1 from './WorldCupPlayerStatsSeasonOne1x1';

const WorldCupSeasonOne1x1 = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <WorldCupSummary />
			case 'News':
				return <WorldCupNews />
			case 'Player Stats':
				return <WorldCupPlayerStatsSeasonOne1x1 />
			default:
				return <WorldCupSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'1x1 > World Cup'}
				logo={'/img/league/world-cup.png'}
				name={'World Cup'}
				season={'Season 1'}
				cupImg={'/img/trophy/world-cup.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default WorldCupSeasonOne1x1;
