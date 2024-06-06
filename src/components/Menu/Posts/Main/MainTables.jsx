import React from 'react';
import TableA from './TableA';
import TableB from './TableB';
import TableLegend from './TableLegend';

const MainTables = () => {
	return (
		<div className='flex flex-col gap-5'>
			<TableA />
			<TableB />
			<TableLegend />
		</div>
	);
}

export default MainTables;
