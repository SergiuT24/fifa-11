import React from 'react';
import { SeasonTree2x2 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';
import News from '../../../../../components/league/news/News';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonTree2x2 />
			<News
				src={'https://sport.24tv.ua/resources/photos/news/202210/2179763.jpg?v=1666026970000'}
				title={'Игрок Berserk получил «Золотой мяч», Игрок под ником Berserk был удостоен «Золотого мяча» после впечатляющих выступлений в сезоне, где он набрал 95 баллов, обогнав своего товарища по команде Sania, у которого было 87 баллов. Berserk продемонстрировал исключительную игру, внеся ключевой вклад в победы своей команды как в национальной лиге, так и на международной арене.В течение сезона Berserk consistently показывал высокие результаты, что и привело к его заслуженной награде. Его достижения стали предметом гордости для команды и вызвали широкий резонанс в футбольном сообществе.'}
			/>
			<News
				src={'/img/league/final-table-season-tree-2x2.png'}
				title={'Игрок под ником Berserk продемонстрировал выдающуюся результативность в турнире 2 на 2, забив 28 голов в 18 матчах и завоевав «Золотую бутсу». Этот турнир, состоявшийся недавно, привлек множество талантливых игроков, но Berserk сумел выделиться благодаря своему невероятному голевому чутью и мастерству.'}
			/>
			<News
				src={'https://icdn.football-italia.net/wp-content/uploads/2024/06/italy-v-uruguay-group-d-2014-fifa-world-cup-brazil.jpg'}
				title={'Италия стала чемпионом 3-го сезона Лиги 2 на 2! После напряженной борьбы, Италия завоевала титул чемпиона Лиги 2 на 2 в 3 сезоне, набрав 29 очков. Франция, которая была основным конкурентом на протяжении всего сезона, завершила турнир с 25 очками и заняла второе место. Итальянская команда продемонстрировала отличную игру, стабильно набирая очки в каждом матче и, в итоге, обогнав своего главного соперника.Поздравляем Италию с победой и ждем новых захватывающих сезонов!'}
			/>
			<LeagueTableLegendWorldCup />
		</div>
	);
}

export default ProLeagueSummary;
