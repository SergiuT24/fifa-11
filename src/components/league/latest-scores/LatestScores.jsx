import React from 'react';
import PlayedGame from './PlayedGame';
import { matchResults, initialTeams } from '../../../data/seasonSix1x1/ProLeagueTableResults';
console.log(matchResults);

const reverseMatchResults = [...matchResults].reverse();
console.log(reverseMatchResults);

const LatestScores = () => {
	const getTeamName = (teamId) => {
		const team = initialTeams.find((t) => t.id === teamId);
		return team ? team.name : teamId;
	};

	return (
		<div className='flex justify-center'>
			<div className='player-stats darkblue p-5 rounded-lg'>
				<div className='flex gap-4 flex-col'>
					<h2>Latest Scores</h2>
					<div>
						<div className='flex gap-3 text-yellow-500 text-sm bg-blue-950 p-1 pl-6'>
							<img
								src='https://static.flashscore.com/res/_fs/build/world.b7d16db.png'
								className='w-6 h-4'
								alt='League Logo'
							/>
							<strong>EUROPE: Pro-League matches</strong>
						</div>
					</div>
				</div>
				{reverseMatchResults.map(({ id, teamOne, scoreOne, teamTwo, scoreTwo }) => (
					<PlayedGame
						key={id}
						teamOne={getTeamName(teamOne)}
						scoreOne={scoreOne}
						teamTwo={getTeamName(teamTwo)}
						scoreTwo={scoreTwo}
					/>
				))}
			</div>
		</div>
	);
};

export default LatestScores;