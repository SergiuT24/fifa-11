import React from 'react';
import ChampionsLeaguePlayOffsSeasonOne2x2 from './ChampionsLeaguePlayOffsSeasonOne2x2';
import News from '../../../../../components/league/news/News';

const ChampionsLeagueSummary = () => {
	return (
		<div>
			<ChampionsLeaguePlayOffsSeasonOne2x2 />
			<News
				src={'https://www.telegraph.co.uk/content/dam/football/2019/06/03/TELEMMGLPICT000199468591_trans_NvBQzQNjv4BqbZ07jF9yh9MNNAzQwvFzae8tFoUY_qS3leVuUx-vZ2E.jpeg'}
				title={'Liverpool одержал победу над Chelsea в захватывающем финальном матче Лиги Чемпионов обеспечив им титул чемпиона. Chelsea, несмотря на поражение, продемонстрировал отличную игру на протяжении всего турнира.'}
			/>
		</div>
	);
}

export default ChampionsLeagueSummary;
