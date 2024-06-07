import React from 'react';
import PlayersTeam from './PlayersTeam';

const Players = () => {
	return (
		<div className='flex gap-11'>
			<PlayersTeam team={'TEAM 1'} playerOne={'Anna'} imgOne={'./players-img/Anna.png'} playerTwo={'DartRin'} imgTwo={'./players-img/Rin.png'} />
			<PlayersTeam team={'TEAM 2'} playerOne={'Box'} imgOne={'./players-img/Box.png'} playerTwo={'14 France'} imgTwo={'./players-img/France.png'} />
			<PlayersTeam team={'TEAM 3'} playerOne={'none'} playerTwo={'none'} />
			<PlayersTeam team={'TEAM 4'} playerOne={'none'} playerTwo={'none'} />
			<PlayersTeam team={'TEAM 5'} playerOne={'none'} playerTwo={'none'} />
			<PlayersTeam team={'TEAM 6'} playerOne={'none'} playerTwo={'none'} />
		</div>
	);
}

export default Players;
