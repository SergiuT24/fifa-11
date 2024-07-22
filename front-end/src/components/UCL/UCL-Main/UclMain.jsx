import React from 'react';
import TableLegend from '../../Posts/Main/MainTables/TableLegend';
import UclTableA from './UclTableA';
import UclTableB from './UclTableB';

const UclMain = () => {
	return (
		<div className='main-tables w-full overflow-x-auto flex flex-col gap-5 p-5' style={{ backgroundColor: '#001e28' }}>
			<UclTableA />
			<UclTableB />
			<TableLegend tournament={'UEFA CHAMPIONS LEAGUE'} />
		</div>
	);
}

export default UclMain;
