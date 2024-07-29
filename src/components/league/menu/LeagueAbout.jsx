import React from 'react';

const LeagueAbout = ({ logo, name, season, cupImg }) => {
	return (
		<div className='flex justify-between mx-4 pb-4'>
			<div className='flex gap-4'>
				<img className=' w-28 h-28 rounded-lg' src={logo} />
				<div className='flex flex-col justify-center'>
					<h3 className=' text-lg font-bold'>{name}</h3>
					<h5>{season}</h5>
				</div>
			</div>
			<div className='w-12'>
				<img src={cupImg} alt="trophy" />
			</div>
		</div>
	);
}

export default LeagueAbout;
