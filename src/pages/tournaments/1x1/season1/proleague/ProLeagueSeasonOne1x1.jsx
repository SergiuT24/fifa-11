import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import ProLeagueSummary from './ProLeagueSummary';
import ProLeagueNews from './ProLeagueNews';
import ProLeaguePlayerStatsSeasonOne1x1 from './ProLeaguePlayerStatsSeasonOne1x1';
import ProLeagueBestGoals from './ProLeagueBestGoals';

const ProLeagueSeasonOne1x1 = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <ProLeagueSummary />
			case 'News':
				return <ProLeagueNews />
			case 'Player Stats':
				return <ProLeaguePlayerStatsSeasonOne1x1 />
			case 'Best Goals':
				return <ProLeagueBestGoals />
			default:
				return <ProLeagueSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'1x1 > Pro League > Start: August 7 20:00 (MSK) - End: 18 August 20:00 (MSK)'}
				logo={'/img/league/pro-league1x1.png'}
				name={'Pro League'}
				season={'Season 1'}
				cupImg={'/img/trophy/pro-league.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default ProLeagueSeasonOne1x1;
