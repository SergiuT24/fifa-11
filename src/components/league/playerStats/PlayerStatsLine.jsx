import React from 'react';

const PlayerStatsLine = ({ rank, player, team, mp, g, a, note }) => {
	return (
		<tr className='table text-xs border-b'>
			<th className='w-6 h-8' title='rank'>{rank}</th>
			<th className=' w-52 h-8 text-start'>{player}</th>
			<th className='w-52 h-8 text-start' title="Team">{team}</th>
			<th className='w-12 h-8' title='Matches Played'>{mp}</th>
			<th className='w-12 h-8' title='Goals'>{g}</th>
			<th className='w-12 h-8' title='Assist'>{a}</th>
			<th className='w-12 h-8' title='Note'>{note}</th>
		</tr>
	);
}

export default PlayerStatsLine;
