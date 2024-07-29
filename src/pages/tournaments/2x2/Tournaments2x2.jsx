import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import ProLeagueSeasonOne2x2 from './season1/proleague/ProLeagueSeasonOne2x2';
import ChampionsLeagueSeasonOne2x2 from './season1/championsleague/ChampionsLeagueSeasonOne2x2';
import KingsCupSeasonOne2x2 from './season1/kingscup/KingsCupSeasonOne2x2';
import SquadsSeasonOne2x2 from './season1/SquadsSeasonOne2x2';
import TeamsForRandomSeasonOne2x2 from './season1/TeamsForRandomSeasonOne2x2';

const Tournaments2x2 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Pro League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Pro League':
				return <ProLeagueSeasonOne2x2 />;
			case 'Champions League':
				return <ChampionsLeagueSeasonOne2x2 />;
			case `King's Cup`:
				return <KingsCupSeasonOne2x2 />;
			default:
				return <ProLeagueSeasonOne2x2 />;
		}
	};

	return (
		<div className='flex-1 justify-center items-center'>
			<div className='flex'>
				<div>
					<Sidebar selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
					<TeamsForRandomSeasonOne2x2 />
				</div>
				{renderContent()}
				<SquadsSeasonOne2x2 />
			</div>
		</div>
	);
}

export default Tournaments2x2;
