import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import KingsCupSeasonOneSummary2x2 from './KingsCupSeasonOneSummary2x2';
import KingsCupSeasonOneNews2x2 from './KingsCupSeasonOneNews';
import KingsCupPlayerStatsSeasonOne2x2 from './KingsCupPlayerStatsSeasonOne2x2';

const KingsCupSeasonOne2x2 = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <KingsCupSeasonOneSummary2x2 />
			case 'News':
				return <KingsCupSeasonOneNews2x2 />
			case 'Player Stats':
				return <KingsCupPlayerStatsSeasonOne2x2 />
			default:
				return <KingsCupSeasonOneSummary2x2 />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={`2x2 > King's Cup`}
				logo={'/img/league/kings-cup.png'}
				name={`King's Cup`}
				season={'Season 1'}
				cupImg={'/img/trophy/kings-cup.png'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default KingsCupSeasonOne2x2;
