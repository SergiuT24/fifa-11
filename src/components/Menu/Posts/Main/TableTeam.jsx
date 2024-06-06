import React from 'react';

const TableTeam = ({ rank, img, team, mp, w, d, l, g, gd, pts, form, }) => {
	const rowStyle = (rank === 1 || rank === 2) ? { backgroundColor: 'rgb(0, 70, 130)' } : {};

	return (
		<tr className='table-line'>
			<th className=' w-6 h-8' style={rowStyle}>{rank}</th>
			<th className='flex justify-start pl-6 gap-2 items-center w-56 h-8'>{img}{team}</th>
			<th className=' w-8 h-8'>{mp}</th>
			<th className=' w-8 h-8'>{w}</th>
			<th className=' w-8 h-8'>{d}</th>
			<th className=' w-8 h-8'>{l}</th>
			<th className=' w-12 h-8'>{g}</th>
			<th className=' w-12 h-8'>{gd}</th>
			<th className=' w-12 h-8'>{pts}</th>
			<th className=' w-40 h-8'>{form}</th>
		</tr>
	);
}

export default TableTeam;
