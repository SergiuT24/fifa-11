import React from 'react';
import News from '../../../../../components/league/news/News';

const ChampionsLeagueNews = () => {
	return (
		<div>
			<News
				src={'https://cdn3.sbnation.com/imported_assets/1284683/mutu_gilardino_fiorentina_ansa.jpg'}
				title={'Победа и новый этап в истории клуба Этот триумф стал первой победой «Фиорентины» в Лиге чемпионов, и он навсегда останется в сердцах болельщиков и в истории клуба. Команда показала не только мастерство и тактическую зрелость, но и непоколебимый характер, который помог преодолеть все трудности на пути к главному европейскому трофею.'}
			/>
			<News
				src={'https://srv4.imgonline.com.ua/result_img/imgonline-com-ua-2to1-ZFBNKpUNOTlJ6.jpg'}
				title={'Выход в финал Лиги чемпионов стал значимым событием для «Фиорентины» и ЦСКА, двух команд, которые продемонстрировали высокий уровень футбола на протяжении всего турнира.'}
			/>
		</div>
	);
}

export default ChampionsLeagueNews;
