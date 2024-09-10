import React from 'react';
import KingsCupPlayOffs from './KingsCupPlayOffs';
import News from '../../../../../components/league/news/News';

const KingsCupSummary = () => {
	return (
		<div>
			<KingsCupPlayOffs />
			<News
				src={'https://c8.alamy.com/comp/2FK6AWD/parma-italy-28th-april-2021-acf-fiorentina-chairman-rocco-b-comisso-lifts-the-trophy-with-the-players-following-final-whistle-in-the-primavera-coppa-italia-match-at-stadio-ennio-tardini-parma-picture-credit-should-read-jonathan-moscrop-sportimage-2FK6AWD.jpg'}
				title={'В первом финальном матче Кубка Короля между "Фиорентиной" и ЦСКА, прошедшем в Москве, ЦСКА одержал победу со счётом 2-1. Российская команда показала уверенную игру, доминируя большую часть времени, однако "Фиорентина" сумела забить важный гол на выезде, что дало им шанс на успешное продолжение противостояния в ответной игре.Во втором матче, который прошёл во Флоренции, "Фиорентина" вернула себе инициативу, одержав впечатляющую победу со счётом 5-1. Итальянский клуб продемонстрировал атакующий футбол и взял под контроль игру с самого начала, не оставив шансов ЦСКА. Таким образом, "Фиорентина" выиграла финал по сумме двух встреч со счётом 6-3 и стала обладателем Кубка Короля.'}
			/>
		</div>
	);
}

export default KingsCupSummary;
