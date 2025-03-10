import React from 'react';
import LeaguePaths from './LeaguePaths';
import LeagueAbout from './LeagueAbout';

const LeagueMenu = ({ leagueCount, logo, name, season, cupImg }) => {
	return (
		<div className='leaguemenu darkblue rounded-xl'>
			<LeaguePaths leagueCount={leagueCount} />
			<LeagueAbout
				logo={logo}
				name={name}
				season={season}
				cupImg={cupImg}
			/>
		</div>
	);
}

export default LeagueMenu;
