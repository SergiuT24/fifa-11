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
				leagueCount={'1x1 > World Cup'}
				logo={'/img/league/world-cup.png'}
				name={'World Cup'}
				season={'Season 10'}
				cupImg={'/img/trophy/world-cup.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default ChampionsLeagueMain;
