import React, { useState } from 'react';
import Sidebar1x1 from '../../../components/sidebar/Sidebar1x1';
import ProLeagueMain from './season3/proleague/ProLeagueMain';
import WorldCupMain from './season3/worldcup/WorldCupMain';
import KingsCupMain from './season3/kingscup/KingsCupMain';
import SquadsForSeason from './season3/SquadsForSeason';
import TeamsForRandom from './season3/TeamsForRandom';

const TournamentsSeasonTree2x2 = () => {
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
				return <ProLeagueMain />;
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
				<div className='flex flex-col'>
					<SquadsForSeason />
					<div className='flex justify-center mt-20'>
						<img className='w-64' src='/img/background/cr7.png' />
					</div>
				</div>
			</div>
		</div>
	);
}

export default TournamentsSeasonTree2x2;
