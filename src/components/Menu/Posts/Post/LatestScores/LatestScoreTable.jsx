import React from 'react';
import LatestScoreMatch from './LatestScoreMatch';

const LatestScoreTable = () => {
	return (
		<div>
			<LatestScoreMatch
				flagOne={'https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png'}
				teamOne={'Portugal'}
				scoreOne={0}
				flagTwo={'https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png'}
				teamTwo={'Germany'}
				scoreTwo={0} />
		</div>
	);
}

export default LatestScoreTable;
