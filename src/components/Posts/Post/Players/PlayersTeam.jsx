import React from 'react';
import PlayersImg from './PlayersImg';
import Team from '../LatestScores/Team.jsx/Team';

const PlayersTeam = ({ team, playerOne, playerTwo, imgOne, imgTwo, flag, teamName, club }) => {
	return (
		<div className='flex flex-col font-bold gap-2 text-xs logo w-44 rounded-2xl p-2'>
			<h3 className='text-center'>{team}</h3>
			<div className='players flex flex-col gap-4 text-left'>
				<div className='flex gap-1 items-center'>
					<PlayersImg avatar={imgOne} />
					<p>{playerOne}</p>
				</div>
				<div>
					<div className='flex gap-1 items-center'>
						<PlayersImg avatar={imgTwo} />
						<p>{playerTwo}</p>
					</div>
				</div>
				<div className='text-sm'>
					<div className='flex items-left'>{club}</div>
					<Team flag={flag} team={teamName} />
				</div>
			</div>
		</div>
	);
}

export default PlayersTeam;
