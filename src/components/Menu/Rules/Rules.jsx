import React from 'react';

const Rules = () => {
	const russianRules = [
		"Играем оригинальными составами, которые предоставляет игра с патчем 1.01.",
		"В турнире участвуют шесть команд, которые разделены на две группы по три команды в каждой.",
		"Играется 6 минут, режим классика, скорость обычная, В дождь и в снег не играем.",
		"Запрещено умышленно затягивать время, под затягиванием времени подразумевается перепасовка или удержание мяча на своей половине поля более 5 - ти игровых минут подряд.",
		"Можно использовать свою схему для игр.Накрутка игроков запрещена.Каждый участник может запросить скриншот одного игрока из состава во время конференций перед началом матча.Если будет обнаружена накрутка игроков, это автоматически приведёт к поражению.",
		"Рассинхронизация: При рассинхронизации игроков в матче голы в промежуток игры засчитываются с обоих сторон! Перезаходим и доигрываем столько, сколько обговорили.Желательно скрины одной из сторон для подтверждения, если соперник не верит.",
		"Групповой этап. На групповом этапе команды играют между собой в один круг, проводя матчи дома и на выезде.",
		"В случае если две команды или более набрали одинаковое количество очков, итоговые места в группе распределяются между ними по дополнительным показателям в следующем порядке: количество очков, набранных в личных встречах между этими командами; разность забитых и пропущенных мячей в личных встречах между этими командами; количество забитых мячей в личных встречах между этими командами; разность забитых и пропущенных мячей во всех матчах;количество забитых мячей во всех матчах",
		"Плей-офф. По итогам группового этапа команды, занявшие первые места в своих группах, проходят напрямую в полуфинал. Команды, занявшие вторые места, играют с командами, занявшими третьи места в противоположных группах, в четвертьфинале за выход в полуфинал.",
		"Формат матчей. Все матчи проводятся в формате «шесть минут» (классический режим).",
		"Послематчевые действия. По итогам каждой игры участники должны направить скриншоты с событиями матча, как в этом примере, в личное сообщение в Дискорде Берсеку.",
		null,
		"Дополнение состава. Можно дополнять состав сборной игроками, которых нет в стандартном составе FIFA 11."
	];

	const englishRules = [
		"Participants. Six teams participate in the tournament, divided into two groups of three teams each.",
		"System. The tournament is held in two stages: group stage and playoffs.",
		"Draw. The draw will take place on June 8 at 12:00.",
		"Group stage. In the group stage, teams play each other once in a round-robin format, playing matches at home and away.",
		"Playoffs. Based on the results of the group stage, the teams that finish first in their groups advance directly to the semifinals. Teams that finish second and third play in the quarterfinals.",
		"Match format. All matches are held in a 'six minutes' format (classic mode).",
		"Post-match actions. After each game, participants must send a screenshot with an example that will be posted on the website, Berserk.",
		"Ban on the use of custom schemes. Teams cannot use custom schemes during the tournament.",
		"Addition to the squad. You can supplement the national team with players who are not in the standard FIFA 11 roster."
	];

	return (
		<div className="flex flex-col md:flex-row justify-around p-8">
			<div className="rules w-full md:w-1/2 p-4 rounded-lg shadow-md mb-4 md:mb-0">
				<h2 className="text-2xl font-bold mb-4">Регламент турнира</h2>
				<ol className="list-decimal list-inside space-y-2">
					{russianRules.map((rule, index) => (
						<li key={index}><strong>{index}. </strong>{rule || <img src="/match-details-img/1.png" alt="Match Details" />}</li>
					))}
				</ol>
			</div>
			<div className="rules w-full md:w-1/2 p-4 rounded-lg shadow-md">
				<h2 className="text-2xl font-bold mb-4">Tournament Rules</h2>
				<ol className="list-decimal list-inside space-y-2">
					{englishRules.map((rule, index) => (
						<li key={index}>{rule}</li>
					))}
				</ol>
			</div>
		</div>
	);
}

export default Rules;
