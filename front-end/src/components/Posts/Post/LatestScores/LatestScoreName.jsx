import React from 'react';

const LatestScoreName = ({ emblem, name, svg, showGroupStage, handleClick }) => {
	return (
		<div>
			<div className='flex justify-between bg-blue-950 p-1 rounded'>
				<div className='flex items-center gap-2'>
					{emblem}
					<h4 className=' text-yellow-500 font-bold'>{name}</h4>
				</div>
				<div className='flex gap-2'>
					<p>Draw</p>
					<button onClick={handleClick} title='click to see group stage' >
						{svg}
					</button>
				</div>
			</div>
			{showGroupStage && (
				<div className='group-stage'>
				</div>
			)}
		</div>
	);
}

export default LatestScoreName;
