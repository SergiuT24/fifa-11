import React from 'react';
import TableA from './TableA';
import TableB from './TableB';
import TableLegend from './TableLegend';

const MainTables = () => {
	return (
		<div className='main-tables flex flex-col gap-5 p-5' style={{ backgroundColor: '#001e28' }}>
			<TableA />
			<TableB />
			<TableLegend />
		</div>
	);
}

export default MainTables;
