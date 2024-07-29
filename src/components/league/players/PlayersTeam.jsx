import React from 'react';
import PlayersImg from './PlayersImg';

const PlayersTeam = ({ team, playerOne, playerTwo, imgOne, imgTwo, club }) => {
	return (
		<div className='text-xs darkblue flex justify-around gap-2 w-80 rounded-2xl p-2'>
			<div className='players flex flex-col gap-2 text-left'>
				<h3 className='text-center'>{team}</h3>
				<div className='flex gap-2 items-center'>
					<PlayersImg avatar={imgOne} />
					<p>{playerOne}</p>
				</div>
				<div>
					<div className='flex gap-2 items-center'>
						<PlayersImg avatar={imgTwo} />
						<p>{playerTwo}</p>
					</div>
				</div>
			</div>
			<div className='flex items-center'>
				<div>{club}</div>
			</div>
		</div>
	);
}

export default PlayersTeam;
