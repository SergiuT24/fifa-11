import React, { useState } from 'react';
import Sidebar1x1 from '../../../components/sidebar/Sidebar1x1';
import ProLeagueSeasonOne1x1 from './season1/proleague/ProLeagueSeasonOne1x1';
import WorldCupSeasonOne1x1 from './season1/worldcup/WorldCupSeasonOne1x1';
import KingsCupSeasonOne1x1 from './season1/kingscup/KingsCupSeasonOne1x1';
import SquadsSeasonOne1x1 from './season1/SquadsSeasonOne1x1';
import TeamsForRandomSeasonOne1x1 from './season1/TeamsForRandomSeasonOne1x1';

const Tournaments1x1 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Pro League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Pro League':
				return <ProLeagueSeasonOne1x1 />;
			case 'World Cup':
				return <WorldCupSeasonOne1x1 />;
			case `King's Cup`:
				return <KingsCupSeasonOne1x1 />;
			default:
				return <TeamsForRandomSeasonOne1x1 />;
		}
	};

	return (
		<div className='flex-1 justify-center items-center'>
			<div className='flex'>
				<div>
					<Sidebar1x1 selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
					<TeamsForRandomSeasonOne1x1 />
				</div>
				{renderContent()}
				<SquadsSeasonOne1x1 />
			</div>
		</div>
	);
}

export default Tournaments1x1;
