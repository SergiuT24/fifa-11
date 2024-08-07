import React from 'react';
import ProLeagueTableSeasonOne from '../../../../../components/league/table/ProLeagueTableSeasonOne';
import LeagueTableLegend from '../../../../../components/league/table/LeagueTableLegend';
import News from '../../../../../components/league/news/News';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<ProLeagueTableSeasonOne />
			<News
				src={'/img/league/final-table-season-one-2x2.png'}
				title={'Поздравляем игрока HAM из команды Liverpool с завоеванием золотой бутсы сезона 1! С впечатляющими 28 голами он стал лучшим бомбардиром турнира.Ассистентом сезона 1 стал игрок e6JIyHTuKinDaHouse из команды Liverpool, который совершил наибольшее количество голевых передач - 24 ассиста.'}
			/>
			<News
				src={'https://sport.24tv.ua/resources/photos/news/202210/2179763.jpg?v=1666026970000'}
				title={'Игрок HAM из команды Liverpool был удостоен Золотого мяча за свои выдающиеся результаты в Про Лиге и победу в Лиге Чемпионов. Суммарно набрав 69 очков (42.00 в таблице 1, 23.00 в таблице 2 и 4.00 в таблице 3), HAM опередил Mr.Noob из Chelsea, который набрал 66 очков (41.00 в таблице 1, 19.00 в таблице 2 и 6.00 в таблице 3). Поздравляем HAM с заслуженной наградой и впечатляющим сезоном!'}
			/>
			<News
				src={'https://imgresizer.eurosport.com/unsafe/2560x1440/filters:format(jpeg)/origin-imgresizer.eurosport.com/2012/05/05/838013-20441091-2560-1440.jpg'}
				title={'Chelsea Завоевывает Чемпионство Благодаря Разнице Голов: Поздравляем с Победой в Про Лиге тренеров ТОТО и Mr.Noob!'}
			/>
			<LeagueTableLegend />
		</div>
	);
}

export default ProLeagueSummary;
