import React from 'react';

const LeagueTableComponent = ({ rank, img, team, mp, w, d, l, g, gd, pts, form, club }) => {
	let rowStyle = {};
	if (rank === 1) {
		rowStyle = { backgroundColor: 'rgb(37, 99, 235)' };
	} else if (rank === 2) {
		rowStyle = { backgroundColor: 'rgb(126, 34, 206)' };
	} else if (rank === 3 || rank === 4) {
		rowStyle = { backgroundColor: 'rgb(249, 115, 22)' };
	} else if (rank === 5 || rank === 6) {
		rowStyle = { backgroundColor: 'red' }
	}

	return (
		<tr className='table-line border-b border-b-green-950 hover:bg-teal-900'>
			<th className='w-4 h-9' title='rank' style={rowStyle}>{rank}</th>
			<th className='flex justify-start pl-6 gap-2 items-center w-56 h-9'>{img}{team}{club}</th>
			<th className='w-8 h-9' title="Matches played">{mp}</th>
			<th className='w-8 h-9' title="Wins">{w}</th>
			<th className='w-8 h-9' title='Draws'>{d}</th>
			<th className='w-8 h-9' title='Losses'>{l}</th>
			<th className='w-12 h-9' title='Goals'>{g}</th>
			<th className='w-12 h-9' title='Goal difference'>{gd}</th>
			<th className='w-12 h-9' title='Points'>{pts}</th>
			<th className='w-40 h-9' >{form}</th>
		</tr>
	);
}

export default LeagueTableComponent;
