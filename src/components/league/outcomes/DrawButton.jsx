import React from 'react';

const DrawButton = ({ title }) => {
	return (
		<button title={title} className='w-5 h-5 rounded-md bg-custom-orange'><span>D</span></button>
	);
}

export default DrawButton;
