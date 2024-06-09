import React from 'react';
import PlayOffTitle from './PlayOffTitle';
import PlayOffBracket from './PlayOffBracket';

const PlayOffs = () => {
	return (
		<div className='p-14'>
			<div className='flex justify-around'>
				<div className='flex flex-col gap-8 relative'>
					<PlayOffTitle value={'semi-final'} />
					<div className='line-one border rounded-lg p-3'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Team-Name'} score={0} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Team-Name'} score={0} />
					</div>
					<div className='line-two border rounded-lg p-3'>
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Team-Name'} score={0} />
						<PlayOffBracket img={<img src="https://static.flashscore.com/res/image/data/CKvcQ6zS-vZG58BBc.png" />} team={'Team-Name'} score={0} />
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
