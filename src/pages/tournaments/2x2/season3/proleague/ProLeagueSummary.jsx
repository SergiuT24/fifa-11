import React from 'react';
import { SeasonTree2x2 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';
import News from '../../../../../components/league/news/News';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonTree2x2 />
			<News
				src={'https://icdn.football-italia.net/wp-content/uploads/2024/06/italy-v-uruguay-group-d-2014-fifa-world-cup-brazil.jpg'}
				title={'Италия стала чемпионом 3-го сезона Лиги 2 на 2! После напряженной борьбы, Италия завоевала титул чемпиона Лиги 2 на 2 в 3 сезоне, набрав 29 очков. Франция, которая была основным конкурентом на протяжении всего сезона, завершила турнир с 25 очками и заняла второе место. Итальянская команда продемонстрировала отличную игру, стабильно набирая очки в каждом матче и, в итоге, обогнав своего главного соперника.Поздравляем Италию с победой и ждем новых захватывающих сезонов!'}
			/>
			<LeagueTableLegendWorldCup />
		</div>
	);
}

export default ProLeagueSummary;
