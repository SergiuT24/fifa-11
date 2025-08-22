import React, { useState } from 'react';
import SidebarDivisions from '../../../components/sidebar/SidebarDivisions';
import ProLeagueMain from './season14/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season14/championsleague/ChampionsLeagueMain';
import EuropeLeagueMain from './season14/europeleague/EuropeLeagueMain';
import KingsCupMain from './season14/kingscup/KingsCupMain';
import SquadsForSeason from './season14/SquadsForSeason';
import TeamsForRandom from './season14/TeamsForRandom';

const TournamentsSeason141x1 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Pro League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Pro League':
				return <ProLeagueMain />;
			case 'Champions League':
				return <ChampionsLeagueMain />;
			case 'Europe League':
				return <EuropeLeagueMain />
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
					<SidebarDivisions selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
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

export default TournamentsSeason141x1;
