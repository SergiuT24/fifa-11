import React, { useState } from 'react';
import Sidebar1x1 from '../../../components/sidebar/Sidebar1x1';
import ProLeagueMain from './season10/proleague/ProLeagueMain';
import ChampionsLeagueMain from './season10/championsleague/ChampionsLeagueMain';
import EuropeLeagueMain from './season10/europeleague/EuropeLeagueMain';
import KingsCupMain from './season10/kingscup/KingsCupMain';
import SquadsForSeason from './season10/SquadsForSeason';
import TeamsForRandom from './season10/TeamsForRandom';

const TournamentsSeason101x1 = () => {
	const [selectedLeague, setSelectedLeague] = useState('Pro League');

	const renderContent = () => {
		switch (selectedLeague) {
			case 'Pro League':
				return <ProLeagueMain />;
			case 'World Cup':
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
					<Sidebar1x1 selectedLeague={selectedLeague} setSelectedLeague={setSelectedLeague} />
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

export default TournamentsSeason101x1;
