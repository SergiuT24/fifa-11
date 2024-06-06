import React from 'react';

const TableTeam = ({ rank, img, team, mp, w, d, l, g, gd, pts, form, }) => {
	const rowStyle = (rank === 1 || rank === 2) ? { backgroundColor: 'rgb(0, 70, 130)' } : {};

	return (
		<tr className='table-line'>
			<th className=' w-6 h-8' title='rank' style={rowStyle}>{rank}</th>
			<th className='flex justify-start pl-6 gap-2 items-center w-56 h-8'>{img}{team}</th>
			<th className=' w-8 h-8' title="Matches played">{mp}</th>
			<th className=' w-8 h-8' title="Wins">{w}</th>
			<th className=' w-8 h-8' title='Draws'>{d}</th>
			<th className=' w-8 h-8' title='Losses'>{l}</th>
			<th className=' w-12 h-8' title='Goals'>{g}</th>
			<th className=' w-12 h-8' title='Goal difference'>{gd}</th>
			<th className=' w-12 h-8' title='Points'>{pts}</th>
			<th className=' w-40 h-8' title='Form'>{form}</th>
		</tr>
	);
}

export default TableTeam;
