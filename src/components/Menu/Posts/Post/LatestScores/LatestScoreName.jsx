import React from 'react';

const LatestScoreName = ({ emblem, name, }) => {
	return (
		<div>
			<div className='flex justify-between bg-blue-950 p-1 rounded'>
				<div className='flex items-center gap-2'>
					{emblem}
					<h4 className=' text-yellow-500 font-bold'>{name}</h4>
				</div>
				<p>Draw</p>
			</div>
		</div>
	);
}

export default LatestScoreName;
