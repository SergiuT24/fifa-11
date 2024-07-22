import React from 'react';
import PlayOffTitle from './PlayOffTitle';
import PlayOffBracket from './PlayOffBracket';

const PlayOffs = () => {
	return (
		<div className='p-14'>
			<div className='flex justify-around'>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'1/4 Quarter-Finals'} />
					<div className='line-quarterone border rounded-lg p-3'>
						<PlayOffBracket img={<img src='https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png' />} team={'France'} score={'0'} scoreTwo={'1'} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png" />} team={'Brazil'} score={'4'} scoreTwo={'0'} />
					</div>
					<div className='line-quarter border rounded-lg p-3'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png" />} team={'Germany'} score={'1'} scoreTwo={'4'} />
						<PlayOffBracket img={<img src='https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png' />} team={'England'} score={'1'} scoreTwo={'2'} />
					</div>
				</div>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'1/2 semi-final'} />
					<div className='line-one border rounded-lg p-3'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png" />} team={'Portugal'} score={'2'} scoreTwo={'2'} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png" />} team={'Brazil'} score={'0'} scoreTwo={'1'} />
					</div>
					<div className='line-two border rounded-lg p-3'>
						<PlayOffBracket img={<img src='https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png' />} team={'Spain'} score={'5'} scoreTwo={'4'} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png" />} team={'Germany'} score={'1'} scoreTwo={'1'} />
					</div>
				</div>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'final'} />
					<div className='line-tree border rounded-lg p-3 mt-11'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png" />} team={'Portugal'} score={'0'} scoreTwo={'0'} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png" />} team={'Spain'} score={'1'} scoreTwo={'3'} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayOffs;
