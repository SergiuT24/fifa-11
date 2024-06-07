import React, { useState } from 'react';
import Team from './Team.jsx/Team';
import MatchDetails from './MatchDetails';

const LatestScoreMatch = ({ teamOne, scoreOne, flagOne, flagTwo, teamTwo, scoreTwo }) => {
	const [showDetails, setShowDetails] = useState(false);

	const handleClick = () => {
		setShowDetails(!showDetails); // Toggle the showDetails state
	};

	return (
		<div className='w-full flex flex-col justify-center h-auto'>
			<div style={{ backgroundColor: '#0f2d37' }} className='rounded-lg m-2 h-6'>
				<h5 className='pl-4 font-bold text-sm'>{teamOne} Home</h5>
			</div>
			<div className='rounded-lg m-2 flex justify-center'>
				<button onClick={handleClick} title='click to see match details' className='flex justify-between w-96 h-14 hover:bg-sky-700'>
					<div>
						<Team flag={flagOne} team={teamOne} />
						<Team flag={flagTwo} team={teamTwo} />
					</div>
					<div>
						<p>{scoreOne}</p>
						<p>{scoreTwo}</p>
					</div>
				</button>
			</div>
			{showDetails && <MatchDetails />}
		</div>
	);
}

export default LatestScoreMatch;
