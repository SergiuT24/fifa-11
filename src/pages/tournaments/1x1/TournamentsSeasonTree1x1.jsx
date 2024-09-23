import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import ProLeagueMain from './season3/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season3/championsleague/ChampionsLeagueMain';
import KingsCupMain from './season3/kingscup/KingsCupMain';
import SquadsForSeason from './season3/SquadsForSeason';
import TeamsForRandom from './season3/TeamsForRandom';

const TournamentsSeasonTree1x1 = () => {
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

export default TournamentsSeasonTree1x1;
