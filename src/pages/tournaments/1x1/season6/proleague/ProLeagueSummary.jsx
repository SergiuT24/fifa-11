import React from 'react';
import { SeasonSix1x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';
import LatestScores from '../../../../../components/league/latest-scores/LatestScores';
import News from '../../../../../components/league/news/News';


const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonSix1x1 />
			<News
				src={'https://assets.goal.com/images/v3/blt4b8a98883c2329fc/Inter_UCL_2009.jpg?auto=webp&format=pjpg&width=640&quality=60'}
				title={'Интер празднует триумф в Про Лиге сезона 6 (1x1) под руководством Jsnick! 🎉⚽ Про Лига завершилась блестящей победой Интера, который доминировал на протяжении всего сезона. Впечатляющая статистика команды: 14 побед, 3 ничьих и всего одно поражение! В активе Интера – 82 забитых гола при разнице мячей +52 (82:30). Этот результат обеспечил клубу заслуженное первое место с 45 очками.Капитан команды, Jsnick, показал высокий класс, уверенно ведя Интер к успеху. Финальная форма команды говорит сама за себя: из последних 10 матчей Интер выиграл 8 и дважды сыграл вничью.На втором месте финишировал Наполи с 43 очками, отставая всего на 2 пункта. Наполи также провел отличный сезон, но в решающие моменты уступил лидерство. Брешиа, занявшая третье место, набрала 34 очка.Этот сезон запомнится как выдающийся для Интера и Jsnick! 🏆💙'}
			/>
			<LatestScores />
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
