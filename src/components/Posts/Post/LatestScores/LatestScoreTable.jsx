import React from 'react';
import LatestScoreMatch from './LatestScoreMatch';

const LatestScoreTable = ({ flagOne, flagTwo, teamOne, teamTwo, scoreOne, scoreTwo }) => {
	return (
		<div>
			<LatestScoreMatch
				flagOne={flagOne}
				teamOne={teamOne}
				scoreOne={scoreOne}
				flagTwo={flagTwo}
				teamTwo={teamTwo}
				scoreTwo={scoreTwo} />
		</div>
	);
}

export default LatestScoreTable;
