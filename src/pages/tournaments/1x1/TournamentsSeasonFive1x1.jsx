import React, { useState } from 'react';
import Sidebar1x1 from '../../../components/sidebar/Sidebar1x1';
import ProLeagueMain from './season5/proleague/ProLeagueMain';
import WorldCupMain from './season5/worldcup/WorldCupMain';
import KingsCupMain from './season5/kingscup/KingsCupMain';
import SquadsForSeason from './season5/SquadsForSeason';
import TeamsForRandom from './season5/TeamsForRandom';

const TournamentsSeasonOne1x1 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Pro League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Pro League':
				return <ProLeagueMain />;
			case 'World Cup':
				return <WorldCupMain />;
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
					<Sidebar1x1 selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
					<TeamsForRandom />
				</div>
				{renderContent()}
				<SquadsForSeason />
			</div>
		</div>
	);
}

export default TournamentsSeasonOne1x1;
