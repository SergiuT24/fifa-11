import React from 'react';

const LoseButton = ({ title }) => {
	return (
		<button title={title} className='w-5 h-5 rounded-md bg-red-500'><span>L</span></button>
	);
}

export default LoseButton;
