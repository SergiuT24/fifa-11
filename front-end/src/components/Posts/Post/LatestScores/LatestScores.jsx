import React, { useState } from 'react';
import LatestScoreName from './LatestScoreName';
import LatestScoreTable from './LatestScoreTable';

const LatestScores = () => {
	const [showGroupStage, setShowGroupStage] = useState(false);
	const handleClick = () => {
		setShowGroupStage(!showGroupStage);
	}

	return (
		<div className='latest-scores w-10/12 bg-white h-auto rounded-lg p-5 flex flex-col gap-2'>
			<div className='title-latest-scores h-14 flex items-center '>
				<h1 className=' text-xl'>Latest Scores</h1>
			</div>
			<LatestScoreName
				emblem={<img className=' w-6 h-3' src='https://static.flashscore.com/res/_fs/build/world.b7d16db.png' />}
				name={'WORLD: Play Offs Final'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamOne={'Portugal'}
				scoreOne={'0'}
				flagTwo={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamTwo={'Spain'}
				scoreTwo={'3'}
				source={'https://www.youtube.com/embed/cAuaXUF_kKo?si=iHZZGoBMg6VZCRjI'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamOne={'Spain'}
				scoreOne={'1'}
				flagTwo={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamTwo={'Portugal'}
				scoreTwo={'0'}
				source={'https://www.youtube.com/embed/cAuaXUF_kKo?si=iHZZGoBMg6VZCRjI'}
			/>
			<LatestScoreName
				emblem={<img className=' w-6 h-3' src='https://static.flashscore.com/res/_fs/build/world.b7d16db.png' />}
				name={'WORLD: Play Offs Semi-Final 1/2'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
				teamOne={'Germany'}
				scoreOne={'1'}
				flagTwo={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamTwo={'Spain'}
				scoreTwo={'4'}
				source={'https://www.youtube.com/embed/Q-aUoFubmFM?si=Zj3D1XWa7aFwNtMQ'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png'}
				teamOne={'Spain'}
				scoreOne={'5'}
				flagTwo={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
				teamTwo={'Germany'}
				scoreTwo={'1'}
				source={'https://www.youtube.com/embed/Q-aUoFubmFM?si=Zj3D1XWa7aFwNtMQ'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamOne={'Brazil'}
				scoreOne={'1'}
				flagTwo={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamTwo={'Portugal'}
				scoreTwo={'2'}
				source={'https://www.youtube.com/embed/Q-aUoFubmFM?si=Zj3D1XWa7aFwNtMQ'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamOne={'Portugal'}
				scoreOne={'2'}
				flagTwo={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamTwo={'Brazil'}
				scoreTwo={'0'}
				source={'https://www.youtube.com/embed/Q-aUoFubmFM?si=Zj3D1XWa7aFwNtMQ'}
			/>
			<LatestScoreName
				emblem={<img className=' w-6 h-3' src='https://static.flashscore.com/res/_fs/build/world.b7d16db.png' />}
				name={'WORLD: Play Offs Quarter-Finals 1/4'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
				teamOne={'Germany'}
				scoreOne={'1'}
				flagTwo={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'}
				teamTwo={'England'}
				scoreTwo={'1'}
				source={'https://www.youtube.com/embed/Hl_Fzx-pg9E?si=Q6Sv4dsF1xjMm4HJ'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png'}
				teamOne={'England'}
				scoreOne={'2'}
				flagTwo={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
				teamTwo={'Germany'}
				scoreTwo={'4'}
				source={'https://www.youtube.com/embed/Hl_Fzx-pg9E?si=Q6Sv4dsF1xjMm4HJ'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'}
				teamOne={'France'}
				scoreOne={'1'}
				flagTwo={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamTwo={'Brazil'}
				scoreTwo={'0'}
				source={'https://www.youtube.com/embed/-qlzdcfEp20?si=w9vR0JMdLXCKtpHe'}
			/>
			<LatestScoreTable
				flagOne={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
				teamOne={'Brazil'}
				scoreOne={'4'}
				flagTwo={'https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png'}
				teamTwo={'France'}
				scoreTwo={'0'}
				source={'https://www.youtube.com/embed/-qlzdcfEp20?si=w9vR0JMdLXCKtpHe'}
			/>
			<LatestScoreName
				emblem={<img className=' w-6 h-3' src='https://static.flashscore.com/res/_fs/build/world.b7d16db.png' />}
				name={'WORLD: World Championship Group Stage'}
				svg={<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
					<path d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm0 1c6.071 0 11 4.929 11 11s-4.929 11-11 11-11-4.929-11-11 4.929-11 11-11zm5.247 8l-5.247 6.44-5.263-6.44-.737.678 6 7.322 6-7.335-.753-.665z" fill="white" />
				</svg>}
				showGroupStage={showGroupStage}
				handleClick={handleClick}
			/>
			{showGroupStage && (
				<div className='group-stage'>
					<LatestScoreTable
						flagOne={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
						teamOne={'Germany'}
						scoreOne={'3'}
						flagTwo={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
						teamTwo={'Portugal'}
						scoreTwo={'1'}
						source={'https://www.youtube.com/embed/zDXcBGjH3lA?si=4tMdXGwv50biiXKP'}
					/>
					<LatestScoreTable
						flagOne={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
						teamOne={'Portugal'}
						scoreOne={'3'}
						flagTwo={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
						teamTwo={'Germany'}
						scoreTwo={'1'}
						source={'https://www.youtube.com/embed/zDXcBGjH3lA?si=4tMdXGwv50biiXKP'}
					/>
					<LatestScoreTable
						flagOne={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
						teamOne={'Germany'}
						scoreOne={'2'}
						flagTwo={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
						teamTwo={'Brazil'}
						scoreTwo={'2'}
						source={'https://www.youtube.com/embed/wyR_5k579u4?si=-5HTVr-R6riBUA-z'}
					/>
					<LatestScoreTable
						flagOne={'https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png'}
						teamOne={'Brazil'}
						scoreOne={'1'}
						flagTwo={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
						teamTwo={'Germany'}
						scoreTwo={'1'}
						source={'https://www.youtube.com/embed/wyR_5k579u4?si=-5HTVr-R6riBUA-z'}
					/>
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
			)}
		</div>
	);
}

export default LatestScores;
