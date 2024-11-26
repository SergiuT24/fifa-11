import React, { useState, useEffect } from 'react';
import PlayedGame from './PlayedGame';
import { initialTeams } from '../../../data/seasonSix1x1/ProLeagueTableResults';

const LatestScores = () => {
	const [matchResults, setMatchResults] = useState([]);

	const fetchResults = async () => {
		try {
			const response = await fetch(`https://match-results-bucket.s3.eu-central-1.amazonaws.com/matchResults.json?timestamp=${Date.now()}`);
			const data = await response.json();

			// Actualizează datele în state
			setMatchResults(
				data.map(item => ({
					id: item.id,
					teamOne: item.teamOne,
					scoreOne: item.scoreOne,
					teamTwo: item.teamTwo,
					scoreTwo: item.scoreTwo,
				}))
			);
		} catch (error) {
			console.error('Error fetching match results:', error);
		}
	};

	// Fetch rezultatele la montarea componentei
	useEffect(() => {
		fetchResults();
	}, []);

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
				{matchResults.slice().reverse().map(({ id, teamOne, scoreOne, teamTwo, scoreTwo }) => (
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
