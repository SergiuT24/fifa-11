import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import LegendLeagueSummary from './LegendLeagueSummary';
import LegendLeagueNews from './LegendLeagueNews';
import LegendLeagueTopScorers from './LegendLeagueTopScorers';
import LegendLeagueMostAssist from './LegendLeagueMostAssist';
import LegendLeagueBestGoals from './LegendLeagueBestGoals';

const LegendLeagueSeasonOne2x2 = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <LegendLeagueSummary />
			case 'News':
				return <LegendLeagueNews />
			case 'Top Scorers':
				return <LegendLeagueTopScorers />
			case 'Most Assist':
				return <LegendLeagueMostAssist />
			case 'Best Goals':
				return <LegendLeagueBestGoals />
			default:
				return <LegendLeagueSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'2x2'}
				logo={'/img/league/legend-league2x2.png'}
				name={'Legend League'}
				season={'Season 1'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default LegendLeagueSeasonOne2x2;
