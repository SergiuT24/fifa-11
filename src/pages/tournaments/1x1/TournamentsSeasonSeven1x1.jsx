import React, { useState } from 'react';
import SidebarDivisions from '../../../components/sidebar/SidebarDivisions';
import ProLeagueMain from './season7/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season7/championsleague/ChampionsLeagueMain';
import EuropeLeagueMain from './season7/europeleague/EuropeLeagueMain';
import KingsCupMain from './season7/kingscup/KingsCupMain';
import SquadsForSeason from './season7/SquadsForSeason';
import TeamsForRandom from './season7/TeamsForRandom';

const TournamentsSeasonSix1x1 = () => {
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
			<div className='flex'>
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

export default TournamentsSeasonSix1x1;
