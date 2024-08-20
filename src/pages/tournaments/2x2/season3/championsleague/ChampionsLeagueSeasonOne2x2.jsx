import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import ChampionsLeagueSummary from './ChampionsLeagueSummary';
import ChampionsLeagueNews from './ChampionsLeagueNews';
import ChampionsLeaguePlayerStatsSeasonOne2x2 from './ChampionsLeaguePlayerStatsSeasonOne2x2';

const ChampionsLeagueSeasonOne2x2 = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <ChampionsLeagueSummary />
			case 'News':
				return <ChampionsLeagueNews />
			case 'Player Stats':
				return <ChampionsLeaguePlayerStatsSeasonOne2x2 />
			default:
				return <ChampionsLeagueSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'2x2 > Champions League'}
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

export default ChampionsLeagueSeasonOne2x2;
