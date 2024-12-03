import React from 'react';

const LeagueTableLegendDivisions = ({ tournament }) => {
	return (
		<div className='tableLegend flex flex-col gap-5 text-xs'>
			<p className='text-lg'>Pro League:</p>
			<div className='flex gap-4 items-center'>
				<div className=' bg-blue-600 w-4 h-10'></div>
				<div>
					<p className='text-lg'>Winner Pro League</p>
					<p>Promotion - Champions League</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-purple-700 w-4 h-6'></div>
				<div>
					<p>Promotion - Champions League</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-orange-500 w-4 h-14'></div>
				<div>
					<p>Promotion - Champions League</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-red-600 w-4 h-10'></div>
				<div>
					<p>Promotion - Europe League</p>
					<p>5 place - Playoff matches against the 2nd place team from the Middle League to stay in the Pro League.</p>
					<p>6 place Relegation - Middle League</p>
				</div>
			</div>
			<p className='text-lg'>Middle League:</p>
			<div className='flex gap-4 items-center'>
				<div className=' bg-blue-600 w-4 h-10'></div>
				<div>
					<p className='text-lg'>Winner Middle League</p>
					<p>Promotion - Pro League</p>
					<p>Promotion - Champions League</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-purple-700 w-4 h-6'></div>
				<div>
					<p>Promotion - Champions League</p>
					<p>Promotion - Playoff matches against the 5th place team from the Pro League for promotion to the Pro League.</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-orange-500 w-4 h-14'></div>
				<div>
					<p>Promotion - Europe League</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-red-600 w-4 h-10'></div>
				<div>
					<p>Promotion - Europe League</p>
				</div>
			</div>
		</div>
	);
}

export default LeagueTableLegendDivisions;
