import React from 'react';

const LeagueAbout = ({ logo, name, season }) => {
	return (
		<div className='flex gap-4 mx-4 pb-4'>
			<img className=' w-28 h-28 rounded-lg' src={logo} />
			<div className='flex flex-col justify-center'>
				<h3 className=' text-lg font-bold'>{name}</h3>
				<h5>{season}</h5>
			</div>
		</div>
	);
}

export default LeagueAbout;
