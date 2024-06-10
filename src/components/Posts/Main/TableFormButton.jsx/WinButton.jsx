import React from 'react';

const WinButton = ({ title }) => {
	return (
		<button className='w-5 h-5 rounded-md bg-green-500' title={title}><span>W</span></button>
	);
}

export default WinButton;
