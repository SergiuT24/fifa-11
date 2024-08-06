import React from 'react';
import News from '../../../../../components/league/news/News'

const ChampionsLeagueNews = () => {
	return (
		<div>
			<News
				src={'https://www.telegraph.co.uk/content/dam/football/2019/06/03/TELEMMGLPICT000199468591_trans_NvBQzQNjv4BqbZ07jF9yh9MNNAzQwvFzae8tFoUY_qS3leVuUx-vZ2E.jpeg'}
				title={'Liverpool одержал победу над Chelsea в захватывающем финальном матче Лиги Чемпионов обеспечив им титул чемпиона. Chelsea, несмотря на поражение, продемонстрировал отличную игру на протяжении всего турнира.'}
			/>
			<News
				src={'https://cdn.shoot.co.uk/wp-content/uploads/2017/05/2007-05-01T222559Z_1_MT1ACI4255583_RTRMADP_3_SOCCER-CHAMPIONS-LIV-CHE.jpg'}
				title={'Ливерпуль Побеждает Арсенал в Напряжённых Полуфинальных Матчах Лиги Чемпионов!'}
			/>
		</div>
	);
}

export default ChampionsLeagueNews;
