import React, { useState } from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import LegendLeagueSeasonOne2x2 from './season1/legendleague/LegendLeagueSeasonOne2x2';
import ChampionsLeagueSeasonOne2x2 from './season1/championsleague/ChampionsLeagueSeasonOne2x2';
import KingCupSeasonOne2x2 from './season1/KingCupSeasonOne2x2';

const Tournaments2x2 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Legend League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Legend League':
				return <LegendLeagueSeasonOne2x2 />;
			case 'Champions League':
				return <ChampionsLeagueSeasonOne2x2 />;
			case 'King Cup':
				return <KingCupSeasonOne2x2 />;
			default:
				return <LegendLeagueSeasonOne2x2 />;
		}
	};

	return (
		<div className='flex-1 justify-center items-center'>
			<div className='flex'>
				<Sidebar selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
				{renderContent()}
			</div>
		</div>
	);
}

export default Tournaments2x2;
