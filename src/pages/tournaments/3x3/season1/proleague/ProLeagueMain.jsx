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
				leagueCount={'3x3 > Pro League > Start: Sep 16 17:00 (MSK) - End: 30 Sep 17:00 (MSK)'}
				logo={'/img/league/pro-league3x3.png'}
				name={'Pro League'}
				season={'Season 1'}
				cupImg={'/img/trophy/pro-league.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default ProLeagueMain;
