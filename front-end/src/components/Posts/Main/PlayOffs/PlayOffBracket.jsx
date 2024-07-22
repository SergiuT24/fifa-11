import React from 'react';
import PlayOffTeam from './PlayOffTeam';

const PlayOffBracket = ({ img, team, score, scoreTwo }) => {
	return (
		<div>
			<div>
				<PlayOffTeam
					img={img}
					team={team}
					score={score}
					scoreTwo={scoreTwo}
				/>
			</div>
		</div >
	);
}

export default PlayOffBracket;
