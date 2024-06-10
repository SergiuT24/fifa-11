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
			{/* <LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
				teamOne={'Germany'}
				scoreOne={'?'}
				flagTwo={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamTwo={'Brazil'}
				scoreTwo={'?'}
			/> */}
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamOne={'Spain'}
				scoreOne={'4'}
				flagTwo={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'}
				teamTwo={'France'}
				scoreTwo={'1'}
				source={'https://www.youtube.com/embed/7_zZIBwBWi4?si=hwBmyVD_uO1gPy2F'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'}
				teamOne={'France'}
				scoreOne={'1'}
				flagTwo={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamTwo={'Spain'}
				scoreTwo={'0'}
				source={'https://www.youtube.com/embed/7_zZIBwBWi4?si=hwBmyVD_uO1gPy2F'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'}
				teamOne={'France'}
				scoreOne={'5'}
				flagTwo={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'}
				teamTwo={'England'}
				scoreTwo={'2'}
				source={'https://www.youtube.com/embed/wirXYgEwaZ4?si=jFXQlTBhks_x62fz'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'}
				teamOne={'England'}
				scoreOne={'1'}
				flagTwo={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'}
				teamTwo={'France'}
				scoreTwo={'5'}
				source={'https://www.youtube.com/embed/chENnmC21rs?si=mharFeOCbF1qQKc-'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'}
				teamOne={'England'}
				scoreOne={'0'}
				flagTwo={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamTwo={'Spain'}
				scoreTwo={'4'}
				source={'https://www.youtube.com/embed/4Fun-Sq3kZg?si=Sh1vKTqW8gdlUQ3r'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamOne={'Spain'}
				scoreOne={'2'}
				flagTwo={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'}
				teamTwo={'England'}
				scoreTwo={'0'}
				source={'https://www.youtube.com/embed/4Fun-Sq3kZg?si=Sh1vKTqW8gdlUQ3r'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamOne={'Portugal'}
				scoreOne={'4'}
				flagTwo={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamTwo={'Brazil'}
				scoreTwo={'4'}
				source={'https://www.youtube.com/embed/JR5rSJ_-Dno?si=MIlXfDX3t5RXhozW'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamOne={'Brazil'}
				scoreOne={'0'}
				flagTwo={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamTwo={'Portugal'}
				scoreTwo={'0'}
				source={'https://www.youtube.com/embed/JR5rSJ_-Dno?si=MIlXfDX3t5RXhozW'}
			/>
		</div>
	);
}

export default LatestScores;
