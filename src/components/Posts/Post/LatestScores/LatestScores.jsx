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
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamOne={'Portugal'}
				scoreOne={'?'}
				flagTwo={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
				teamTwo={'Germany'}
				scoreTwo={'?'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamOne={'Brazil'}
				scoreOne={'?'}
				flagTwo={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamTwo={'Portugal'}
				scoreTwo={'?'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
				teamOne={'Germany'}
				scoreOne={'?'}
				flagTwo={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamTwo={'Brazil'}
				scoreTwo={'?'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'}
				teamOne={'England'}
				scoreOne={'?'}
				flagTwo={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'}
				teamTwo={'France'}
				scoreTwo={'?'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'}
				teamOne={'France'}
				scoreOne={'?'}
				flagTwo={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamTwo={'Spain'}
				scoreTwo={'?'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamOne={'Spain'}
				scoreOne={'?'}
				flagTwo={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'}
				teamTwo={'England'}
				scoreTwo={'?'}
			/>
		</div>
	);
}

export default LatestScores;