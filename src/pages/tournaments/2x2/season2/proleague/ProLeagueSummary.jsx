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
				src={'/img/league/final-table-season-two-2x2.png'}
				title={'Золотая бутса за самое большое количество голов присуждена!Мы рады объявить, что Золотая бутса за самое большое количество голов в этом турнире досталась игроку, который продемонстрировал выдающиеся навыки и результативность на поле.Anna из команды Fiorentina забила впечатляющие 39 голов в текущем турнире, что делает её обладателем Золотой бутсы за лучшее нападение. Поздравляем её с этим выдающимся достижением и отличной игрой!'}
			/>
			<News
				src={'https://sport.24tv.ua/resources/photos/news/202210/2179763.jpg?v=1666026970000'}
				title={'Золотой мяч турнира достается игроку Anna! Мы рады объявить, что на основе самых выдающихся результатов в этом турнире, Золотой мяч вручён игроку с самым высоким рейтингом среди топ-3 игроков турнира.Топ-3 игрока турнира по итогам соревнований: Anna из команды Fiorentina — 129.00 рейтинга Perfect из команды Fiorentina — 122.00 рейтинга HAM из команды CSKA — 75.00 рейтинга После внимательного анализа всех результатов и достижений, мы рады сообщить, что Anna из команды Fiorentina получила Золотой мяч благодаря своему выдающемуся рейтингу в 129.00. Поздравляем её с этим заслуженным достижением!,Но это не всё! Anna и ее напарник Perfect также достигли исторического успеха, завоевав требл в этом сезоне, победив в лиге, Лиге чемпионов и кубке. Этот уникальный тройной успех подчеркивает её невероятные достижения и вклад в команду. Поздравляем её и команду Fiorentina и Тренера Perfect с этим выдающимся сезоном!'}
			/>
			<News
				src={'https://images2.minutemediacdn.com/image/upload/c_crop,w_2997,h_1998,x_0,y_0/c_fill,w_720,ar_3:2,f_auto,q_auto,g_auto/images/GettyImages/mmsport/90min_it_international_web/01fmhj34jx8f3rkaj870.jpg'}
				title={'В драматическом финале второго сезона Про Лиги 2 на 2 команда "Фиорентина" под руководством тренеров Анны и Perfect (C.) одержала убедительную победу! Они завершили сезон с впечатляющим результатом: 8 побед и всего 2 поражения в 10 матчах. "Фиорентина" набрала 24 очка и забила 39 голов, пропустив 16, продемонстрировав одну из лучших атак в лиге.Их доминирование на протяжении всего сезона включало серию из пяти побед подряд, что позволило им закрепить лидерство в таблице и оставить своих соперников далеко позади. Особенно запомнились решающие победы над такими соперниками, как "Зенит" и "Шальке 04", где они продемонстрировали свою стратегическую гибкость и высокую командную игру.Тренеры "Фиорентины" Анна и Perfect (C.) выразили благодарность своим игрокам за выдающиеся выступления и отметили, что это лишь начало их успешного пути в Про Лиге. Команда намерена продолжить свои успехи в следующем сезоне и защитить свой титул чемпионов.Поздравляем "Фиорентину" с заслуженной победой и желаем им удачи в предстоящих соревнованиях!'}
			/>
		</div>
	);
}

export default ProLeagueSummary;
