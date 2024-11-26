import React from 'react';

const PlayedGame = ({ teamOne, scoreOne, teamTwo, scoreTwo }) => {
	// Stilizare dinamică pentru scor
	const getScoreStyle = (score, otherScore) =>
		score > otherScore ? 'font-bold text-green-500' : '';

	return (
		<div className='flex gap-4 text-xs p-2 border-b border-b-green-950 hover:bg-teal-900'>
			<div className='flex items-center'>26.11.22:00</div>
			<ul className='w-3/4'>
				<li className='flex items-center justify-between mb-2'>
					<div className='flex items-center'>{teamOne}</div>
					<div className={getScoreStyle(scoreOne, scoreTwo)}>{scoreOne}</div>
				</li>
				<li className='flex items-center justify-between'>
					<div className='flex items-center'>{teamTwo}</div>
					<div className={getScoreStyle(scoreTwo, scoreOne)}>{scoreTwo}</div>
				</li>
			</ul>
		</div>
	);
};

export default PlayedGame;

