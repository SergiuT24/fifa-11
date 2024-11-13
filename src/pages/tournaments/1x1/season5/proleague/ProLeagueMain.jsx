import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import ProLeagueSummary from './ProLeagueSummary';
import ProLeagueNews from './ProLeagueNews';
import ProLeaguePlayerStats from './ProLeaguePlayerStats';
import ProLeagueBestGoals from './ProLeagueBestGoals';

const ProLeagueMain = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <ProLeagueSummary />
			case 'News':
				return <ProLeagueNews />
			case 'Player Stats':
				return <ProLeaguePlayerStats />
			case 'Best Goals':
				return <ProLeagueBestGoals />
			default:
				return <ProLeagueSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'1x1 > Pro League > Start: November 13 14:00 (MSK) - End: 27 November 14:00 (MSK)'}
				logo={'/img/league/pro-league1x1.png'}
				name={'Pro League'}
				season={'Season 5'}
				cupImg={'/img/trophy/pro-league.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default ProLeagueMain;
