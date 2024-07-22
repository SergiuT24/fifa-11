import React from 'react';

const LeagueTableComponent = ({ rank, img, team, mp, w, d, l, g, gd, pts, form, club }) => {
	let rowStyle = {};
	if (rank === 1) {
		rowStyle = { backgroundColor: 'rgb(0, 70, 130)' };
	} else if (rank === 2 || rank === 3) {
		rowStyle = { backgroundColor: 'red' };
	}

	return (
		<tr className='table-line'>
			<th className='w-6 h-8' title='rank' style={rowStyle}>{rank}</th>
			<th className='flex justify-start pl-6 gap-2 items-center w-56 h-8'>{img}{team}{club}</th>
			<th className='w-8 h-8' title="Matches played">{mp}</th>
			<th className='w-8 h-8' title="Wins">{w}</th>
			<th className='w-8 h-8' title='Draws'>{d}</th>
			<th className='w-8 h-8' title='Losses'>{l}</th>
			<th className='w-12 h-8' title='Goals'>{g}</th>
			<th className='w-12 h-8' title='Goal difference'>{gd}</th>
			<th className='w-12 h-8' title='Points'>{pts}</th>
			<th className='w-40 h-8' title='Form'>{form}</th>
		</tr>
	);
}

export default LeagueTableComponent;
