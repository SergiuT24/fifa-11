import React from 'react';

const RandomTeam = ({ flag, name, num }) => {
	return (
		<div className='logo flex flex-col gap-2 rounded-xl py-2 items-center w-36'>
			<h5 className='text-center text-lg'>{num}</h5>
			<div className='flex gap-2'>
				<img src={flag} />
				<p className=''>{name}</p>
			</div>
		</div>
	);
}

export default RandomTeam;
