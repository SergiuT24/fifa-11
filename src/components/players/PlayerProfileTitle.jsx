import React from 'react';

const PlayerProfileTitle = ({ avatar, name, id, time, goldenShoe, balonDor, proLeague, ucl, kingsCup, worldCup }) => {
	return (
		<tr className='darkblue border-b text-sm'>
			<th className='w-24 h-10'>{avatar}</th>
			<th className='w-40 h-10'>{name}</th>
			<th className='w-24 h-10'>{id}</th>
			<th className='w-28 h-10'>{time}</th>
			<th className='w-32 h-10'>{goldenShoe}</th>
			<th className='w-32 h-10'>{balonDor}</th>
			<th className='w-32 h-10'>{proLeague}</th>
			<th className='w-32 h-10'>{ucl}</th>
			<th className='w-32 h-10'>{kingsCup}</th>
			<th className='w-32 h-10'>{worldCup}</th>
		</tr>
	);
}

export default PlayerProfileTitle;
