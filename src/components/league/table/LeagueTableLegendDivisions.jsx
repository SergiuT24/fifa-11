import React from 'react';

const LeagueTableLegendDivisions = ({ tournament }) => {
	return (
		<div className='tableLegend flex flex-col gap-5 text-xs'>
			<p className='text-lg'>Pro Division:</p>
			<div className='flex gap-4 items-center'>
				<div className=' bg-blue-600 w-4 h-10'></div>
				<div>
					<p className='text-lg'>Winner Pro Division</p>
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
					<p>5 place - Playoff matches against the 2th place team from the Second Division for to stay in Pro Division.</p>
					<p>6 place Relegation - Second Division</p>
				</div>
			</div>
			<p className='text-lg'>Second Division:</p>
			<div className='flex gap-4 items-center'>
				<div className=' bg-blue-600 w-4 h-10'></div>
				<div>
					<p className='text-lg'>Winner Second Division</p>
					<p>Promotion - Pro Division</p>
					<p>Promotion - Champions League</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-purple-700 w-4 h-6'></div>
				<div>
					<p>Promotion - Champions League</p>
					<p>Promotion - Playoff matches against the 5th place team from the Pro Division for promotion to the Pro Division.</p>
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
