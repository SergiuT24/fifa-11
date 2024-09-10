import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import ProLeagueMain from './season2/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season2/championsleague/ChampionsLeagueMain';
import KingsCupMain from './season2/kingscup/KingsCupMain';
import SquadsForSeason from './season2/SquadsForSeason';
import TeamsForRandom from './season2/TeamsForRandom';

const TournamentsSeasonTwo1x1 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Pro League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Pro League':
				return <ProLeagueMain />;
			case 'Champions League':
				return <ChampionsLeagueMain />;
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
					<Sidebar selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
					<TeamsForRandom />
				</div>
				{renderContent()}
				<SquadsForSeason />
			</div>
		</div>
	);
}

export default TournamentsSeasonTwo1x1;
