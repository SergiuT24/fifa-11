import React from 'react';
import PlayersImg from './PlayersImg';
import Team from '../LatestScores/Team.jsx/Team';

const PlayersTeam = ({ team, playerOne, playerTwo, imgOne, imgTwo, flag, teamName }) => {
	return (
		<div className='logo w-44 rounded-2xl font-bold p-2 mx-auto'>
			<h3 className=' text-center'>{team}</h3>
			<div className='players flex flex-col gap-3 text-left pl-4'>
				<div className='flex gap-3 items-center'>
					<PlayersImg avatar={imgOne} />
					<p>{playerOne}</p>
				</div>
				<div>
					<div className='flex gap-3 items-center'>
						<PlayersImg avatar={imgTwo} />
						<p>{playerTwo}</p>
					</div>
				</div>
				<div className='pl-8 text-sm'>
					<Team flag={flag} team={teamName} />
				</div>
			</div>
		</div>
	);
}

export default PlayersTeam;
