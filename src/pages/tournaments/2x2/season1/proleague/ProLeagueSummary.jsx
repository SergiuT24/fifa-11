import React from 'react';
import ProLeagueTableSeasonOne from '../../../../../components/league/table/ProLeagueTableSeasonOne';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';
import News from '../../../../../components/league/news/News';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<ProLeagueTableSeasonOne />
			<News
				src={'https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2012/05/05/838013-20441091-2560-1440.jpg'}
				title={'Chelsea Завоевывает Чемпионство Благодаря Разнице Голов: Поздравляем с Победой в Про Лиге тренеров ТОТО и Mr.Noob!'}
			/>
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
