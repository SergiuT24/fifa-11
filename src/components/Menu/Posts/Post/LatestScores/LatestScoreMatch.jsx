import React from 'react';
import Team from './Team.jsx/Team';
const LatestScoreMatch = ({ teamOne, scoreOne, flagOne, flagTwo, teamTwo, scoreTwo }) => {
	return (
		<div className='w-full'>
			<div style={{ backgroundColor: '#0f2d37' }} className='rounded-lg m-2 h-6'><h5 className='pl-4 font-bold text-sm'>{teamOne} Home</h5></div>
			<div className='rounded-lg m-2 h-6 flex justify-center'>
				<div className='flex justify-between w-96'>
					<div>
						<Team flag={flagOne} team={teamOne} />
						<Team flag={flagTwo} team={teamTwo} />
					</div>
					<div>
						<p>{scoreOne}</p>
						<p>{scoreTwo}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default LatestScoreMatch;
