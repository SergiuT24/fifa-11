import React from 'react';
import ChampionsLeaguePlayOffs from './ChampionsLeaguePlayOffs';
import News from '../../../../../components/league/news/News';

const ChampionsLeagueSummary = () => {
	return (
		<div>
			<ChampionsLeaguePlayOffs />
			<News
				src={'https://srv4.imgonline.com.ua/result_img/imgonline-com-ua-2to1-ZFBNKpUNOTlJ6.jpg'}
				title={'Выход в финал Лиги чемпионов стал значимым событием для «Фиорентины» и ЦСКА, двух команд, которые продемонстрировали высокий уровень футбола на протяжении всего турнира.'}
			/>
		</div>
	);
}

export default ChampionsLeagueSummary;
