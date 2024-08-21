import React from 'react';
import KingsCupPlayOffs from './KingsCupPlayOffs';
import News from '../../../../../components/league/news/News';

const KingsCupSummary = () => {
	return (
		<div>
			<KingsCupPlayOffs />
			<News
				src={'https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2011/10/23/774410-20917588-2560-1440.jpg'}
				title={'В захватывающем финальном матче Кубка Короля игроки Arsenal D.Drogba и mysterio одержали победу над Bayern Munich. Игра завершилась со счетом 2:1, Arsenal стал победителем. Поздравляем команду Arsenal с заслуженной победой в турнире!'}
			/>
		</div>
	);
}

export default KingsCupSummary;
