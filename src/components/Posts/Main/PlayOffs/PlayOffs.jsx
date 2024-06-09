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
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Place 2 Group B'} score={'?'} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Place 3 Group A'} score={'?'} />
					</div>
					<div className='line-quarter border rounded-lg p-3'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Place 2 Group A'} score={'?'} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Place 3 Group B'} score={'?'} />
					</div>
				</div>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'1/2 semi-final'} />
					<div className='line-one border rounded-lg p-3'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Place 1 Group A'} score={'?'} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Team-Name'} score={'?'} />
					</div>
					<div className='line-two border rounded-lg p-3'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Place 1 Group B'} score={'?'} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Team-Name'} score={'?'} />
					</div>
				</div>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'final'} />
					<div className='line-tree border rounded-lg p-3 mt-11'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Team-Name'} score={0} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Team-Name'} score={0} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default PlayOffs;
