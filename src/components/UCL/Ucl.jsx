import React from 'react';
import PostTitle from '../Posts/Post/PostTitle';
import UclClubs from './LeagueComponents/UclClubs';
import UclIntro from './UclIntro';
import UclPlayers from './LeagueComponents/UclPlayers';

const Ucl = () => {
	return (
		<div>
			<PostTitle
				trophy={'/img/cups/uefa-champions.png'}
				name={'UEFA Champions League 2024'}
			/>
			<UclIntro />
			<UclClubs />
			<UclPlayers />
		</div>
	);
}

export default Ucl;
