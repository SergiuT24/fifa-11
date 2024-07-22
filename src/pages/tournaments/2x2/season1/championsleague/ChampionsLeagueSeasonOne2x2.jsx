import React, { useState } from 'react';
import LeagueButtons from '../../../../../components/league/menu/LeagueButtons';
import LeagueMenu from '../../../../../components/league/menu/LeagueMenu';
import ChampionsLeagueSummary from './ChampionsLeagueSummary';
import ChampionsLeagueNews from './ChampionsLeagueNews';

const ChampionsLeagueSeasonOne2x2 = () => {
	const [selectedButton, setSelectedButton] = useState('Summary');

	const renderContent = () => {
		switch (selectedButton) {
			case 'Summary':
				return <ChampionsLeagueSummary />
			case 'News':
				return <ChampionsLeagueNews />
			default:
				return <ChampionsLeagueSummary />
		}
	}

	return (
		<div>
			<LeagueMenu
				leagueCount={'2x2'}
				logo={'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhc_6Zq523wqXpVJbDx_KxdCU5G7veENCUsGtZNeU1dpxOmRRNwqeR0cwaNmVbxGlN0Cs5-GKDj5pDpV2R2hcDZTQzNnTtQkDT7RYNAUHWh_8t_HcetbybqvVjvk0h9MOOr9eKtS-T2amo/s1600/ucl3.png'}
				name={'Champions League'}
				season={'Season 1'}
			/>
			<LeagueButtons selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
			{renderContent()}
		</div>
	);
}

export default ChampionsLeagueSeasonOne2x2;
