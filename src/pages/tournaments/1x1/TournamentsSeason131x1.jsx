import React, { useState } from 'react';
import SidebarDivisions from '../../../components/sidebar/SidebarDivisions';
import ProLeagueMain from './season13/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season13/championsleague/ChampionsLeagueMain';
import EuropeLeagueMain from './season13/europeleague/EuropeLeagueMain';
import KingsCupMain from './season13/kingscup/KingsCupMain';
import SquadsForSeason from './season13/SquadsForSeason';
import TeamsForRandom from './season13/TeamsForRandom';

const TournamentsSeason131x1 = () => {
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

export default TournamentsSeason131x1;
