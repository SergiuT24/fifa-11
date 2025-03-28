import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import ChampionsLeagueSummary from './ChampionsLeagueSummary';
import ChampionsLeagueNews from './ChampionsLeagueNews';
import ChampionsLeaguePlayOffs from './ChampionsLeaguePlayOffs';

const ChampionsLeagueMain = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <ChampionsLeagueSummary />
			case 'News':
				return <ChampionsLeagueNews />
			case 'Player Stats':
				return <ChampionsLeaguePlayOffs />
			default:
				return <ChampionsLeagueSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'3x3 > Champions League'}
				logo={'/img/league/champions-league.png'}
				name={'Champions League'}
				season={'Season 1'}
				cupImg={'/img/trophy/champions-league.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default ChampionsLeagueMain;
