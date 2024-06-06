import React from 'react';
import PlayOffTeam from './PlayOffTeam';

const PlayOffBracket = ({ img, team, score }) => {
	return (
		<div>
			<div>
				<PlayOffTeam
					img={img}
					team={team}
					score={score}
				/>
			</div>
		</div >
	);
}

export default PlayOffBracket;
