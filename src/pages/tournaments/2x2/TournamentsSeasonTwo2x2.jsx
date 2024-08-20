import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import ProLeagueSeasonTwo2x2 from './season2/proleague/ProLeagueSeasonTwo2x2';
import ChampionsLeagueSeasonTwo2x2 from './season2/championsleague/ChampionsLeagueSeasonTwo2x2';
import KingsCupSeasonTwo2x2 from './season2/kingscup/KingsCupSeasonTwo2x2';
import SquadsSeasonTwo2x2 from './season2/SquadsSeasonTwo2x2';
import TeamsForRandomSeasonTwo2x2 from './season2/TeamsForRandomSeasonTwo2x2';

const TournamentsSeasonTwo2x2 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Pro League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Pro League':
				return <ProLeagueSeasonTwo2x2 />;
			case 'Champions League':
				return <ChampionsLeagueSeasonTwo2x2 />;
			case `King's Cup`:
				return <KingsCupSeasonTwo2x2 />;
			default:
				return <ProLeagueSeasonTwo2x2 />;
		}
	};

	return (
		<div className='flex-1 justify-center items-center'>
			<div className='flex'>
				<div>
					<Sidebar selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
					<TeamsForRandomSeasonTwo2x2 />
				</div>
				{renderContent()}
				<SquadsSeasonTwo2x2 />
			</div>
		</div>
	);
}

export default TournamentsSeasonTwo2x2;
