import React from 'react';
import KingsCupPlayOffs from './KingsCupPlayOffs';
import News from '../../../../../components/league/news/News';

const KingsCupSummary = () => {
	return (
		<div>
			<KingsCupPlayOffs />
			<News
				src={'https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/15/a2/d7e40ad4edcc5d88921c57c41e37018754f35c58e6515055562849.jpg'}
				title={'Челси - Обладатель Кубка: Победа над Лионом в Двухматчевом Триллере Финал Кубка между Челси и Лионом подарил болельщикам настоящую футбольную драму. Оба матча оказались напряжёнными и полными эмоций, с большим количеством голов и неожиданными поворотами. В результате, Челси вышел победителем, одержав победу с общим счётом 5:4 после двух захватывающих встреч.'}
			/>
		</div>
	);
}

export default KingsCupSummary;
