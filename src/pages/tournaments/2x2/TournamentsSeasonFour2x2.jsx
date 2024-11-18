import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import ProLeagueMain from './season4/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season4/championsleague/ChampionsLeagueMain';
import KingsCupMain from './season4/kingscup/KingsCupMain';
import SquadsForSeason from './season4/SquadsForSeason';
import TeamsForRandom from './season4/TeamsForRandom';

const TournamentsSeasonFour2x2 = () => {
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

export default TournamentsSeasonFour2x2;
