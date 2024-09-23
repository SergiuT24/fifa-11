import React from 'react';
import ChampionsLeaguePlayOffs from './ChampionsLeaguePlayOffs';
import News from '../../../../../components/league/news/News';

const ChampionsLeagueSummary = () => {
	return (
		<div>
			<ChampionsLeaguePlayOffs />
			<News
				src={'https://chelseablues.ru/_nw/342/37800243.jpg'}
				title={'Челси – Победитель Лиги Чемпионов: Драматическая Победа над Баварией в Финале Финал Лиги Чемпионов между Челси и Баварией стал настоящим футбольным триллером, который болельщики будут помнить еще долгое время. Игра завершилась в пользу Челси, который вырвал победу на последних минутах матча, забив решающий гол на 90-й минуте и завершив противостояние с общим счетом 3:2.'}
			/>
		</div>
	);
}

export default ChampionsLeagueSummary;
