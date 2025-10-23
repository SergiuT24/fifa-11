import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import ChampionsLeagueSummary from './ChampionsLeagueSummary';
import ChampionsLeagueNews from './ChampionsLeagueNews';
import ChampionsLeaguePlayerStats from './ChampionsLeaguePlayerStats';

const ChampionsLeagueMain = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <ChampionsLeagueSummary />
			case 'News':
				return <ChampionsLeagueNews />
			case 'Player Stats':
				return <ChampionsLeaguePlayerStats />
			default:
				return <ChampionsLeagueSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'1x1 > Champions League'}
				logo={'/img/league/champions-league.png'}
				name={'Champions League'}
				season={'Career Season 4'}
				cupImg={'/img/trophy/champions-league.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default ChampionsLeagueMain;
