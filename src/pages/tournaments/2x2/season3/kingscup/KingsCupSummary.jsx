import React from 'react';
import KingsCupPlayOffs from './KingsCupPlayOffs';
import News from '../../../../../components/league/news/News'

const KingsCupSummary = () => {
	return (
		<div>
			<KingsCupPlayOffs />
			<News
				src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCRzKz-IIwNHZFYIAvFSN7UoVt-BPSyMwkIQ&s'}
				title={'Бразилия одержала уверенную победу над Германией Сегодняшний матч между Бразилией и Германией закончился триумфом для южноамериканской команды. Бразилия доминировала на поле и одержала победу с крупным счетом 8:1. Впечатляющая игра бразильских нападающих привела к восьми голам, в то время как Германия смогла ответить лишь одним голом, что не смогло повлиять на общий результат.'}
			/>
		</div>
	);
}

export default KingsCupSummary;
