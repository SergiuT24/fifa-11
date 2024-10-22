import React from 'react';
import { SeasonFour1x1 } from '../../../../../components/league/table/ProLeagueTableSeasonsVersion2';
import LeagueTableLegendWorldCup from '../../../../../components/league/table/LeagueTableLegendWorldCup';
import News from '../../../../../components/league/news/News';

const ProLeagueSummary = () => {
	return (
		<div className='flex flex-col gap-10'>
			<SeasonFour1x1 />
			<News
				src={'https://cdn.vox-cdn.com/thumbor/zpl3iaqDEIdGPvA3CvO7bXdGXlI=/0x0:2041x1331/1200x800/filters:focal(1001x235:1327x561)/cdn.vox-cdn.com/uploads/chorus_image/image/66536673/830843500.jpg.0.jpg'}
				title={'Эвертон под руководством Хама одержал победу в Про Лиге 1v1, сезон 4 Команда Эвертон, управляемая игроком Хама, продемонстрировала невероятный уровень игры в 4 сезоне Про Лиги 1v1 и заняла первое место с впечатляющим результатом. В 18 матчах Эвертон одержал 16 побед, сыграл 1 ничью и потерпел всего 1 поражение, забив при этом 74 гола и пропустив 25, что привело к общему показателю разницы мячей +49.Команда продемонстрировала стабильную и уверенную игру на протяжении всего сезона, что отразилось и в итоговой форме, которая показывает одно из лучших выступлений в истории Про Лиги.'}
			/>
			{/* <LeagueTableLegendWorldCup /> */}
		</div>
	);
}

export default ProLeagueSummary;
