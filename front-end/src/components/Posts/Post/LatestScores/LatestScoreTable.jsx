import React from 'react';
import LatestScoreMatch from './LatestScoreMatch';

const LatestScoreTable = ({ flagOne, flagTwo, teamOne, teamTwo, scoreOne, scoreTwo, source }) => {
	return (
		<div>
			<LatestScoreMatch
				flagOne={flagOne}
				teamOne={teamOne}
				scoreOne={scoreOne}
				flagTwo={flagTwo}
				teamTwo={teamTwo}
				scoreTwo={scoreTwo}
				source={source} />
		</div>
	);
}

export default LatestScoreTable;
