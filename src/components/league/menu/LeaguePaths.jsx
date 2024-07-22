import React from 'react';

const LeaguePaths = ({ leagueCount }) => {
	return (
		<div className='flex gap-2 p-4'>
			<p>Tournament</p>
			<p>&gt;</p>
			<p>{leagueCount}</p>
		</div>
	);
}

export default LeaguePaths;
