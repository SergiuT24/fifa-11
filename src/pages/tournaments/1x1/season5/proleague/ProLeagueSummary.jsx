import React from 'react';
import { SeasonFive1x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';
import News from '../../../../../components/league/news/News';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonFive1x1 />
			{/* <News
				src={'/img/league/final-table-season-one-1x1.png'}
				title={'Поздравляем игрока Berserk из команды Holland с впечатляющими 71 голами он стал лучшим бомбардиром турнира.'}
			/>
			<News
				src={'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/Y7V6DFNMUVODFJK2D3ABTRE5NM.jpg'}
				title={'В недавно завершившемся турнире 1х1 по FIFA 11 в про-лиге, команда Италии одержала победу в напряженной борьбе за первое место. Оба соперника, Италия и Бразилия, набрали по 34 очка в турнирной таблице. Однако именно итальянская сборная оказалась на первом месте благодаря успешным результатам в личных встречах.В ключевых матчах между этими командами Италия сумела одержать две победы над сборной Бразилии, что и решило судьбу первенства. Итальянцы продемонстрировали отличные навыки и стратегию, обеспечив себе высшую позицию на пьедестале.Это достижение для сборной Италии стало важным моментом в их киберспортивной карьере и продемонстрировало их лидерство в этом турнире. Бразильская команда, несмотря на высокие результаты, уступила первое место, но показала достойный уровень игры, что делает их соперниками на будущее.Турнир стал отличным примером напряженной и увлекательной борьбы, которая ожидает фанатов FIFA 11 и в дальнейшем.'}
			/> */}
			<LeagueTableLegendWorldCup />
		</div>
	);
}

export default ProLeagueSummary;
