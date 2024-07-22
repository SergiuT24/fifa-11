import React from 'react';
import GoalVideo from './GoalVideo';

const BestGoals = () => {
	return (
		<div className='flex gap-4'>
			<GoalVideo title={'Goal'} videoUrl={'https://clips.twitch.tv/embed?clip=WrongFreezingBasenjiANELE-VyIaQMOqXZR10PDw&parent=www.example.com'} />
		</div>
	);
}

export default BestGoals;
