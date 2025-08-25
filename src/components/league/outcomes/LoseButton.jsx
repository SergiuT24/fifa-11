import React, { useState } from 'react';

const LoseButton = ({ title }) => {
	const [showTooltip, setShowTooltip] = useState(false);

	return (
		<div className='relative inline-block'>
			<button
				className='w-[18px] h-5 rounded-md bg-custom-red'
				onMouseEnter={() => setShowTooltip(true)}
				onMouseLeave={() => setShowTooltip(false)}
			>
				<span className='font-thin'>L</span>
			</button>
			{showTooltip && (
				<div className='absolute z-10 top-full -left-10 mb-2 w-max p-3 bg-gray-500 text-white text-xs rounded-md'>
					{title}
				</div>
			)}
		</div>
	);
};

export default LoseButton;
