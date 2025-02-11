import React, { useState } from 'react';
import SidebarDivisions from '../../../components/sidebar/SidebarDivisions';
import ProLeagueMain from './season9/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season9/championsleague/ChampionsLeagueMain';
import EuropeLeagueMain from './season9/europeleague/EuropeLeagueMain';
import KingsCupMain from './season9/kingscup/KingsCupMain';
import SquadsForSeason from './season9/SquadsForSeason';
import TeamsForRandom from './season9/TeamsForRandom';

const TournamentsSeason91x1 = () => {
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

export default TournamentsSeason91x1;
