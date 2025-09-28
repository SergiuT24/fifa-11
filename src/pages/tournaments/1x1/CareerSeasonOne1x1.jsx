import React, { useState } from 'react';
import SidebarDivisions from '../../../components/sidebar/SidebarDivisions';
import ProLeagueMain from './careerseason1/proleague/ProLeagueMain';
import ChampionsLeagueMain from './careerseason1/championsleague/ChampionsLeagueMain';
import EuropeLeagueMain from './careerseason1/europeleague/EuropeLeagueMain';
import KingsCupMain from './careerseason1/kingscup/KingsCupMain';
import SquadsForSeason from './careerseason1/SquadsForSeason';
import TeamsForRandom from './careerseason1/TeamsForRandom';

const CareerSeasonOne1x1 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Pro League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Pro League':
				return <ProLeagueMain />;
			case 'Champions League':
				return <ChampionsLeagueMain />;
			case 'Europe League':
				return <EuropeLeagueMain />
			case `King's Cup`:
				return <KingsCupMain />;
			default:
				return <TeamsForRandom />;
		}
	};

	return (
		<div className='flex-1 justify-center items-center'>
			<div className='flex justify-between'>
				<div>
					<SidebarDivisions selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
					<TeamsForRandom />
				</div>
				<div className='flex-col'>
					{renderContent()}
				</div>
				<SquadsForSeason />
			</div>
		</div>
	);
}

export default CareerSeasonOne1x1;
