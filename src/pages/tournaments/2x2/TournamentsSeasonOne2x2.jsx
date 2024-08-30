import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import ProLeagueMain from './season1/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season1/championsleague/ChampionsLeagueMain';
import KingsCupMain from './season1/kingscup/KingsCupMain';
import SquadsForSeason from './season1/SquadsForSeason';
import TeamsForRandom from './season1/TeamsForRandom';

const TournamentsSeasonOne2x2 = () => {
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
				return <ProLeagueMain />;
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
				<div className='flex flex-col'>
					<SquadsForSeason />
					<img src='/img/background/cr7.png' />
				</div>
			</div>
		</div>
	);
}

export default TournamentsSeasonOne2x2;
