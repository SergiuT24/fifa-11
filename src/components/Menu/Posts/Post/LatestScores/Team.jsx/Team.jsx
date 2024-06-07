import React from 'react';

const Team = ({ flag, team }) => {
	return (
		<div className='flex h-5 w-5 items-center gap-1'>
			<img src={flag} />
			<p >{team}</p>
		</div>
	);
}

export default Team;
