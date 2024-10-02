import React from 'react';

const LeagueTableLegend = ({ tournament }) => {
	return (
		<div className='tableLegend flex flex-col gap-5 text-xs'>
			<div className='flex gap-4 items-center'>
				<div className=' bg-blue-600 w-4 h-10'></div>
				<div>
					<p>Winner Pro League Season 1</p>
					<p>Promotion - World Cup (Play Offs: SEMI-FINALS 1/2,</p>
					<p>Promotion - King's Cup</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-purple-700 w-4 h-6'></div>
				<div>
					<p>Promotion - World Cup (Play Offs: SEMI-FINALS 1/2,</p>
					<p>Promotion - King's Cup</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-orange-500 w-4 h-14'></div>
				<div>
					<p>Promotion - World Cup (Play Offs: SEMI-FINALS 1/4)</p>
					<p>Promotion - King's Cup</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-red-600 w-4 h-10'></div>
				<div>
					<p>Promotion - World Cup (Play Offs: SEMI-FINALS 1/4)</p>
					<p>Promotion - King's Cup</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-pink-200 w-4 h-10'></div>
				<div>
					<p>Promotion - King's Cup</p>
				</div>
			</div>
		</div>
	);
}

export default LeagueTableLegend;
