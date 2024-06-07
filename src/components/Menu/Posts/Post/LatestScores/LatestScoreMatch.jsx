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
					<div className='flex gap-4 items-center'>
						<div>
							<p>{scoreOne}</p>
							<p>{scoreTwo}</p>
						</div>
						<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd">
							<path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" fill="white" />
						</svg>

					</div>
				</button>
			</div>
			{showDetails && <MatchDetails />}
		</div>
	);
}

export default LatestScoreMatch;
