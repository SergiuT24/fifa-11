import React from 'react';
import PostTitle from '../Posts/Post/PostTitle';
import UclTeams from './LeagueComponents/UclTeams';
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
			<UclTeams />
			<UclPlayers />
		</div>
	);
}

export default Ucl;
