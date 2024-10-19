import React from 'react';
import WorldCupPlayOffs from './WorldCupPlayOffs';
import News from '../../../../../components/league/news/News'


const WorldCupSummary = () => {
	return (
		<div>
			<WorldCupPlayOffs />
			<News
				src={'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh0a0KryDkquuHB_Uzt8LMsmEEraFJh9NKpXMHQbNwme6qfgfdW0auBQpV5lk9qiazARG-AbvN4z_Dv_8wzJpd0ZKbeGiUcfkh-Mc0mmxsGZ-QzyH4hOkpysT6ptw2cE81xVaI1mS1vx1g/s1600/England-Football-Team-Euro-2012-Posters.jpg'}
				title={'Англия обыгрывает Германию и Францию и выходит в финал Чемпионата Мира Сборная Англии продолжает впечатлять на Чемпионате Мира, одержав две важные победы на пути к финалу. В четвертьфинале англичане встретились с Германией, в напряжённой борьбе сумев одержать победу и выйти в полуфинал. В полуфинальном матче им предстояло встретиться с ещё более серьёзным соперником — сборной Франции. Благодаря этим выдающимся успехам, сборная Англии вышла в финал турнира и теперь находится всего в одном шаге от заветного трофея.'}
			/>
		</div>
	);
}

export default WorldCupSummary;
