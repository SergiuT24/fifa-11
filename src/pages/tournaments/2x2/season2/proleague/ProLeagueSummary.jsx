import React from 'react';
import { SeasonTwo2x2 } from '../../../../../components/league/table/ProLeagueTableSeasons';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';
import News from '../../../../../components/league/news/News'


const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonTwo2x2 />
			<LeagueTableLegend />
			<News
				src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Xqm07poUrWCPi3BGldk5srJtMdZPihSdOA&s'}
				title={'Начался новый сезон 2 в режиме 2 на 2 в нашей FIFA 11 лиге! Этот сезон обещает быть ещё более захватывающим благодаря новым тренерам и разнообразным командам. В новом сезоне к лиге присоединились несколько известных тренеров, которые уже проявили себя в предыдущих турнирах. Они готовы бросить вызов и показать своё мастерство, привнося новые тактические идеи и стратегии.Этот сезон – отличная возможность для всех участников продемонстрировать свои навыки, а для болельщиков – насладиться качественным футболом и поддержать свои любимые команды. Будьте готовы к борьбе за титул, ведь конкуренция будет жесткой, и победить сможет только сильнейший!'}
			/>
		</div>
	);
}

export default ProLeagueSummary;
