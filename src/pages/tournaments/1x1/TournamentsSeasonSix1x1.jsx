import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import ProLeagueMain from './season6/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season6/championsleague/ChampionsLeagueMain';
import KingsCupMain from './season6/kingscup/KingsCupMain';
import SquadsForSeason from './season6/SquadsForSeason';
import TeamsForRandom from './season6/TeamsForRandom';

const TournamentsSeasonSix1x1 = () => {
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
				<div className='flex-col'>
					{renderContent()}
				</div>
				<SquadsForSeason />
			</div>
		</div>
	);
}

export default TournamentsSeasonSix1x1;
