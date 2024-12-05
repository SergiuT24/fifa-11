import React from 'react';

const PlayerProfileTitle = ({ avatar, name, id, time, goldenShoe, balonDor, proLeague, middleLeague, ucl, europe, kingsCup, worldCup }) => {
	return (
		<tr className='darkblue border-b border-b-green-950 text-sm'>
			<th className='w-20 h-10'>{avatar}</th>
			<th className='w-10 h-10'>{name}</th>
			<th className='w-10 h-10'>{id}</th>
			<th className='w-10 h-10'>{time}</th>
			<th className='w-24 h-10'>{goldenShoe}</th>
			<th className='w-24 h-10'>{balonDor}</th>
			<th className='w-24 h-10'>{proLeague}</th>
			<th className='w-24 h-10'>{middleLeague}</th>
			<th className='w-24 h-10'>{ucl}</th>
			<th className='w-24 h-10'>{europe}</th>
			<th className='w-24 h-10'>{kingsCup}</th>
			<th className='w-24 h-10'>{worldCup}</th>
		</tr>
	);
}

export default PlayerProfileTitle;
