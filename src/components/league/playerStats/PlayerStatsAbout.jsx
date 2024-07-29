import React from 'react';

const PlayerStatsAbout = () => {
	return (
		<div className='player-stats flex flex-col mt-6 gap-4'>
			<h2>Player Note:</h2>
			<h3 className='text-sm'>
				Оценка игрока поможет определить победителя Золотого мяча в конце сезона. Поскольку победителем может быть только один, важно учитывать все аспекты игры. За каждый забитый гол игрок получит 2.00 балла, а за каждую результативную передачу (ассист) — 1.00 балл.
			</h3>
			<h3 className='text-sm'>
				Player note will help determine the winner of the Golden Ball at the end of the season. Since there can only be one winner, it is important to consider all aspects of the game. Each goal scored by a player will be worth 2.00 points, and each assist will be worth 1.00 point.
			</h3>
		</div>
	);
}

export default PlayerStatsAbout;
