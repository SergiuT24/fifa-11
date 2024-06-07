import React from 'react';

const TopScorersLine = ({ rank, player, team, g }) => {
	return (
		<tr className='table-line border-b'>
			<th className='w-6 h-8' title='rank'>{rank}</th>
			<th className=' w-72 h-8'>{player}</th>
			<th className='w-72 h-8' title="Team">{team}</th>
			<th className='w-12 h-8' title='Goals'>{g}</th>
		</tr>
	);
}

export default TopScorersLine;
