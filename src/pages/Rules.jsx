import React from 'react';

const Rules = () => {
	const russianRules = [
		"Играем оригинальными составами, которые предоставляет игра с патчем 1.01.",
		"В турнире участвуют шесть команд, которые разделены на две группы по три команды в каждой.",
		"Играется 6 минут, режим классика, скорость обычная, В дождь и в снег не играем.",
		"Запрещено умышленно затягивать время, под затягиванием времени подразумевается перепасовка или удержание мяча на своей половине поля более 5 - ти игровых минут подряд.",
		"Можно использовать свою схему для игр.Накрутка игроков запрещена.Каждый участник может запросить скриншот одного игрока из состава во время конференций перед началом матча.Если будет обнаружена накрутка игроков, это автоматически приведёт к поражению.",
		"Рассинхронизация: При рассинхронизации игроков в матче голы в промежуток игры засчитываются с обоих сторон! Перезаходим и доигрываем столько, сколько обговорили.Желательно скрины одной из сторон для подтверждения, если соперник не верит.",
		"Групповой этап. На групповом этапе команды играют между собой в два круга, проводя матчи дома и на выезде.",
		"В случае если две команды или более набрали одинаковое количество очков, итоговые места в группе распределяются между ними по дополнительным показателям в следующем порядке: количество очков, набранных в личных встречах между этими командами; разность забитых и пропущенных мячей в личных встречах между этими командами; количество забитых мячей в личных встречах между этими командами; разность забитых и пропущенных мячей во всех матчах;количество забитых мячей во всех матчах",
		"Плей-офф. По итогам группового этапа команды, занявшие первые места в своих группах, проходят напрямую в полуфинал. Команды, занявшие вторые места, играют с командами, занявшими третьи места в противоположных группах, в четвертьфинале за выход в полуфинал.",
		"Формат матчей. Все матчи проводятся в формате «шесть минут» (классический режим).",
		"Послематчевые действия. По итогам каждой игры участники должны направить скриншоты с событиями матча, как в этом примере, в личное сообщение в Дискорде Берсеку.",
		null,
		"Дополнение состава. Можно дополнять состав сборной игроками, которых нет в стандартном составе FIFA 11."
	];

	const englishRules = [
		"Play with the original teams provided by the game with patch 1.01.",
		"The tournament consists of six teams, divided into two groups of three teams each.",
		"Each match lasts 6 minutes, classic mode, normal speed. Do not play in rain or snow.",
		"Intentionally stalling time is prohibited. Stalling is defined as passing or holding the ball on your side of the field for more than 5 consecutive in-game minutes.",
		"You can use your own formation for the games. Boosting players is prohibited. Each participant can request a screenshot of one player from the opponent's squad during the pre-match conference. If player boosting is detected, it will automatically result in a loss.",
		"Desynchronization: In case of desynchronization during the match, goals scored during the desynced period count for both sides. Re-enter the match and play the remaining agreed time. Screenshots from one side are recommended for confirmation if the opponent does not believe.",
		"Group Stage: In the group stage, teams play each other once, with matches held both home and away.",
		"If two or more teams have the same number of points, final positions in the group are determined by the following tiebreakers: points in head-to-head matches between the tied teams; goal difference in head-to-head matches between the tied teams; goals scored in head-to-head matches between the tied teams; goal difference in all matches; goals scored in all matches.",
		"Playoffs: After the group stage, the first-place teams in each group advance directly to the semifinals. Second-place teams play against third-place teams from the opposite groups in the quarterfinals for a spot in the semifinals.",
		"Match Format: All matches are played in a 'six minutes' format (classic mode).",
		"Post-match actions: After each game, participants must send screenshots of the match events, like in this example, to Berserk via personal message on Discord.",
		null,
		"Squad Additions: You can add players to the national team who are not in the standard FIFA 11 roster."
	];

	return (
		<div className="flex flex-col md:flex-row justify-around p-8">
			<div className="rules w-full md:w-1/2 p-4 rounded-lg shadow-md mb-4 md:mb-0">
				<h2 className="text-2xl font-bold mb-4">Регламент турнира</h2>
				<ol className="list-decimal list-inside space-y-2">
					{russianRules.map((rule, index) => (
						<li key={index}><strong>{index + 1}. </strong>{rule || <img src="/match-details-img/1.png" alt="Match Details" />}</li>
					))}
				</ol>
			</div>
			<div className="rules w-full md:w-1/2 p-4 rounded-lg shadow-md">
				<h2 className="text-2xl font-bold mb-4">Tournament Rules</h2>
				<ol className="list-decimal list-inside space-y-2">
					{englishRules.map((rule, index) => (
						<li key={index}><strong>{index + 1}. </strong>{rule || <img src="/match-details-img/1.png" alt="Match Details" />}</li>
					))}
				</ol>
			</div>
		</div>
	);
}

export default Rules;
