import React from 'react';

const LeagueTableLegend = ({ tournament }) => {
	return (
		<div className='tableLegend flex flex-col gap-5 text-xs'>
			<div className='flex gap-4 items-center'>
				<div className=' bg-blue-600 w-4 h-10'></div>
				<div>
					<p>Winner Pro League Season</p>
					<p>Promotion - Champions League (Play Offs: SEMI-FINALS 1/2, played versus 4rd place)</p>
					<p>Promotion - King's Cup (Play Offs: SEMI-FINALS 1/2)</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-purple-700 w-4 h-6'></div>
				<div>
					<p>Promotion - Champions League (Play Offs: SEMI-FINALS 1/2, played versus 3rd place)</p>
					<p>Promotion - King's Cup (Play Offs: SEMI-FINALS 1/2)</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-orange-500 w-4 h-14'></div>
				<div>
					<p>Promotion - Champions League (Play Offs: SEMI-FINALS 1/2)</p>
					<p>Promotion - King's Cup (Play Offs: SEMI-FINALS 1/4)</p>
					<p>King's Cup (3rd place plays against 5th place)</p>
					<p>King's Cup (4rd place plays against 6th place)</p>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div className=' bg-red-600 w-4 h-10'></div>
				<div>
					<p>Promotion - King's Cup (Play Offs: SEMI-FINALS 1/4)</p>
					<p>King's Cup (5rd place plays against 3th place)</p>
					<p>King's Cup (6rd place plays against 4th place)</p>
				</div>
			</div>
		</div>
	);
}

export default LeagueTableLegend;
