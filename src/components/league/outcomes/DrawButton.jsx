import React, { useState } from 'react';

const DrawButton = ({ title }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className='relative inline-block'>
			<button
				className='w-5 h-5 rounded-md bg-custom-orange'
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				<span>D</span>
			</button>
			{showTooltip && (
				<div className='absolute z-10 top-full -left-10 mb-2 w-max p-3 bg-gray-500 text-white text-xs rounded-md'>
					{title}
				</div>
			)}
		</div>
	);
};

export default DrawButton;
