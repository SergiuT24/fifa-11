import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import EuropeLeagueSummary from './EuropeLeagueSummary';
import EuropeLeagueNews from './EuropeLeagueNews';
import EuropeLeaguePlayerStats from './EuropeLeaguePlayerStats';

const EuropeLeagueMain = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <EuropeLeagueSummary />
			case 'News':
				return <EuropeLeagueNews />
			case 'Player Stats':
				return <EuropeLeaguePlayerStats />
			default:
				return <EuropeLeagueSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'1x1 > Europe League'}
				logo={'https://play-lh.googleusercontent.com/wEDc7PkgogH9nx9UfGIORcO5XNND8oPGnOyVujbdrMyVtbAr-G4K-er8Mbkrw5pIIA'}
				name={'Europe League'}
				season={'Season 16'}
				cupImg={'/img/trophy/europe-cup.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default EuropeLeagueMain;
