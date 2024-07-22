import React from 'react';

const LeagueButton = ({ value, isSelected, onClick }) => {
	return (
		<button
			className={`${isSelected ? 'text-red-600 border-b-2 border-b-red-600 uppercase' : 'text-white'}`}
			onClick={onClick}
		>
			{value}
		</button>
	);
}

export default LeagueButton;
