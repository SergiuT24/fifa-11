import React from 'react';
import PostTitle from '../Posts/Post/PostTitle';
import UclTeams from './LeagueComponents/UclTeams';
import UclIntro from './UclIntro';

const Ucl = () => {
	return (
		<div>
			<PostTitle
				trophy={'./cups-img/uefa-champions.png'}
				name={'UEFA Champions League 2024'}
			/>
			<UclIntro />
			<UclTeams />
		</div>
	);
}

export default Ucl;
