import React from 'react';
import LatestScoreName from './LatestScoreName';
import LatestScoreTable from './LatestScoreTable';

const LatestScores = () => {
	return (
		<div className='latest-scores w-10/12 bg-white h-auto rounded-lg p-5 flex flex-col gap-2'>
			<div className='title-latest-scores h-14 flex items-center '>
				<h1 className=' text-xl'>Latest Scores</h1>
			</div>
			<LatestScoreName
				emblem={<img className=' w-6 h-3' src='https://static.flashscore.com/res/_fs/build/world.b7d16db.png' />}
				name={'WORLD: World Championship Group Stage'}
			/>
			<LatestScoreTable />
			<LatestScoreTable />
			<LatestScoreTable />
			<LatestScoreTable />
			<LatestScoreTable />
			<LatestScoreTable />
			<LatestScoreTable />
			<LatestScoreTable />
		</div>
	);
}

export default LatestScores;
