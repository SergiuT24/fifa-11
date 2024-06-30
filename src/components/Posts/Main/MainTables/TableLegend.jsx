import React from 'react';

const TableLegend = ({ tournament }) => {
	return (
		<div className='tableLegend flex flex-col gap-5'>
			<div className='flex gap-4'>
				<div className=' bg-blue-600 w-5 h-5'></div>
				<p>Promotion - {tournament} (Play Offs: SEMI-FINALS 1/2)</p>
			</div>
			<div className='flex gap-4'>
				<div className=' bg-red-600 w-5 h-5'></div>
				<p>Promotion - {tournament} (Play Offs: QUARTER-FINALS 1/4)</p>
			</div>
		</div>
	);
}

export default TableLegend;
