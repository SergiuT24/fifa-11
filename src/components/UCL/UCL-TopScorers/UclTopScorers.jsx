import React from 'react';
import UclTopScorersTable from './UclTopScorersTable';

const UclTopScorers = () => {
	return (
		<div className='flex w-full overflow-x-auto pl-3 pb-10'>
			<UclTopScorersTable />
		</div>
	);
}

export default UclTopScorers;
