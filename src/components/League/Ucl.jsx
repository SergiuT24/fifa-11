import React from 'react';
import PostTitle from '../Posts/Post/PostTitle';
import UclTeams from './LeagueComponents/UclTeams';

const Ucl = () => {
	return (
		<div>
			<PostTitle
				trophy={'./cups-img/uefa-champions.png'}
				name={'UEFA Champions League 2024'}
			/>
			<UclTeams />
		</div>
	);
}

export default Ucl;
