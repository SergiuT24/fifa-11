// import React from 'react';

// const Rules = () => {
// 	const russianRules = {
// 		"November 24/11/2024 New Rules": [
// 			"1.С момента записи на турнир игрок автоматически соглашается с обязательством доиграть турнир до конца. В случае, если он снимается с турнира, этот момент идет в силу сразу после проведения жеребьёвки команд, ему будет наложен запрет на участие в следующим турнире!"
// 		],
// 		"November 17/11/2024 New Rules": [
// 			"1. Запрещено использовать сайдлайны (баг фифы, гол в ворота который позволяет спомощью крученного навеса забивать голы с крайне дальнего расстояния, как правило используется около боковых линий и ему предшествует разворот корпуса бьющего игрока). ❗Такой гол отменяется и не входит в итоговый счёт! (переигрывать не надо!)",
// 			"2. Запрещено умышленно затягивать время, под затягиванием времени подразумевается перепасовка или удержание мяча на своей половине поля более 5-ти игровых минут подряд. Также если на 2/3 поля игрок затягивает время длительное время 10 минут игровых давая пасы низом с фланга на фланг и потом пасы назад защитникам тоже считается как затягивания времени. (нарушение переигровка)",
// 			"3. Запрещено использование СВОИХ СХЕМ, УКАЗАНИЙ ИГРОКОВ, ДОМАШНИХ ЗАГОТОВОК ПРИ УГЛОВЫХ! Играем стандартными схемами, что есть в игре. За нарушение снятие всех очков!",
// 			"4. Запрещено менять что-то в моя тактика‚ можно только выбирать контратака, мощный прессинг, владение мячом, длинный пас, а лезть в одну из этих тактик и вручную что-то менять КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО!!!!!!",
// 			"5. В каждом матче капитан команды делает скриншот схемы и тактики, должен быть виден кружок и соперник, в случае если таких фото нету, (переигровка) пример:",
// 			<div className='flex gap-40'>
// 				<img className="w-1/3 h-96" src='/img/rules/team-tactic.png' />
// 				<img className="w-1/3 h-96" src='/img/rules/team-schema.png' />
// 			</div>,
// 		],
// 		"Базовые требования": [
// 			"1. Играем оригинальными составами, предоставляемыми игрой с патчем 1.01. Играть нужно только в оригинальной версии, без патчей, таких как версия с Ф. Торресом в Челси.",
// 			"2. Продолжительность матча — 6 минут, режим — классика, скорость — обычная. Игры проводятся только в ясную погоду; дождь и снег исключены.",
// 			"3. Разрешается использовать свою схему для игры.",
// 			"4. Капитан: (Выбирается на начале турнира), при игре 2 на 2 лишь один в случае смены капитана дисквалификация с турнира и ТП на всех матчей(не действует только если участник был заменен в течение турнира, после замены правила опять действуют).",
// 			"5. Редактирование стандартных положений (угловые, штрафные) запрещено(поскольку соперник не успевает накрывать игроков в штрафной, вам сразу забивают). В случае использования изменённых стандартов команде присуждается техническое поражение со счётом 0:3.",
// 			"6. Рассинхронизация: В случае рассинхронизации во время матча голы, забитые в промежутке игры, засчитываются. Необходимо перезайти в матч и доиграть оставшиеся минуты. Перезапуск всего матча запрещён, так как это может повлиять на результаты других команд. Оставшиеся минуты округляются, и стороны договариваются о дополнительном времени (например, если осталось 25 минут, добавьте 3 минуты экстра времени). Желательно предоставить скриншоты одной из сторон в качестве подтверждения рассинхронизации, если соперник сомневается.",
// 			"7. Каждый участник должен иметь Discord для связи с другими участниками вне рамок Gameranger для определения времени проведения матча.",
// 			"8. Договоренности о матчах должны проводиться между участниками напрямую, а не через администрацию, чтобы определить время, когда можно сыграть матч.",
// 			"9. Запрещено умышленно затягивать время, под затягиванием времени подразумевается перепасовка или удержание мяча на своей половине поля более 10-ти игровых минут подряд.",
// 			"10. Хостинг матчей: Договоритесь, где играть) Первый матч играется на хосте первой команды. Второй матч играется на хосте второй команды. Если игра лагает, оба матча играются у нейтрального хоста(пример марроко хост).",
// 			"11. Лаг: если у вас лагает сразу выходите с матча и играете на хосте хорошым для всех.",
// 			"12. У каждого игрока есть раздел, где он чаще всего онлайн.",
// 			"13. Если игра проводится между игроком из Украины и игроком из России, матчи проводятся на нейтральном хосте."
// 		],
// 		"Скриншоты, видео": [
// 			"1. Необходимо иметь программу для записи экрана или создания скриншотов, такую как FRAPS (https://fraps.com/download.php),(капитаны чтобы делать скрины).",
// 			"2. Если забили красивый гол, сделайте видео и отправьте его после того, как запишете результат (по желанию)."
// 		],
// 		"Отправка результатов матчей": [
// 			"1. Результаты матчей отправляйте в ветку 'Турнир'. Если вы хотите, чтобы ваши голы и ассисты были учтены, записывайте результат как выигравшая, так и проигравшая команда.",
// 			"2. Пример для команды, которая выиграла: Pro League - указываем лигу Inter 3:1 Barcelona PlayerOne - Голы: 2, Ассисты: 1 PlayerTwo - Голы: 1, Ассисты: 2",
// 			"3. Пример для команды, которая проиграла: Inter 3:1 Barcelona PlayerOne - Голы: 1 PlayerTwo - Ассисты: 1"
// 		],
// 		"Читерство, оскорбления игроков, умышленный вред, дисквалификация": [
// 			"1. Нарушение правил турнира или правил поведения.",
// 			"2. Использование читов или других нелегальных средств (накрутка составов) приведет к вечному бану на турнире.",
// 			"3. Намеренное отключение от игры или симуляция плохого интернет-соединения, или включения программ для создания лагов.",
// 			"4. Во время проведения турнира (пока команда не завершит все свои матчи, включая Лигу, ЛЧ и Кубок) строго запрещены любые виды оскорблений, такие как ненормативная лексика в адрес других участников или провокации с явным посылом оскорбления. После завершения всех матчей правила поведения не действуют. Все случаи нарушений будут рассматриваться администрацией турнира, и нарушителям будут назначены санкции.",
// 			"5. В случае оскорблений наказанием будет техническое поражение (ТП 3:0) одного матча между тех команд (матч выбирается в зависимость от этапа турнира (Лиге, ЛЧ, Кубка), которым были адресованы оскорбления, независимо от того, кто именно из команды оскорбил (один или оба игрока). Оба игрока, причастные к оскорблениям, будут подвергнуты наказанию. Для рассмотрения жалобы желательно предоставить скриншот с доказательствами оскорблений. Если игроки или команды получат три технических поражения подряд на основе оскорблений, они будут дисквалифицированы из турнира, а все их оставшиеся матчи будут засчитаны как технические поражения."
// 		],
// 		"Проверка на читерство, накрутка составов": [
// 			"1. Если у вас есть подозрения, что ваши соперники накрутили состав, вы имеете право требовать проверки. Для этого необходимо при заходе в игру в локальной конференции неожиданно запросить скриншоты двух игроков соперника на ваш выбор с детальной статистикой. Скриншоты делаются в перерыве матча, на них должна быть видна команда против которой вы играете и кружочек. Скриншоты должны быть отправлены запрашивающему игроку сразу после завершения матча, макс. время на отправку 5 минут после завержение игры.",
// 			"2. Если соперник после вашего запроса выходит из игры, чтобы перезайти, или не предоставляет скриншоты, ему присуждается техническое поражение (ТП) со счётом 0:3 в этом матче. Команда, уличённая в нарушении, берётся под наблюдение и проверяется всеми противниками на наличие накрутки составов двух игроков в каждом матче.",
// 			"3. Если накрутка подтверждается, капитан команды получает пожизненный бан в турнирах, а его напарник будет находиться под пристальным наблюдением."
// 		],
// 		"Пример скриншотов статистики игрока во время перерыва в матче:": [
// 			"1.Виден оппонент, виден кружочек, видна полная статистика игрока.",
// 			<div className='flex gap-40'>
// 				<img className="w-1/3 h-96" src='/img/rules/player-stat1.jpg' />
// 				<img className="w-1/3 h-96" src='/img/rules/player-stat2.jpg' />
// 			</div>,
// 			<div className='flex gap-40'>
// 				<img className="w-1/3 h-96" src='/img/rules/player-stat3.jpg' />
// 				<img className="w-1/3 h-96" src='/img/rules/player-stat4.jpg' />
// 			</div>,
// 		],
// 		"Пример счета в конце матча(для вас чтобы не было проблем с соперником)": [
// 			<img className="w-2/3 h-96" src='/img/rules/score-example.jpg' />
// 		],
// 		"Раздел лиги": [
// 			"1. Pro League Лига проводится по системе двойного кругового турнира, где каждая команда играет два матча с каждой другой командой. За победу начисляется 3 очка, за ничью — 1 очко, поражения - 0 очков.",
// 			"2. Команда, занявшая первое место в лиге, выигрывает чемпионат. В полуфинале Лиги чемпионов участвуют команды с 1-4 места, первая сетка 1-е vs 4-е места, а также 2-е vs 3-е места. Команды, занявшие 5-е и 6-е места, не выходят в Лигу чемпионов.",
// 			"3. Первая команда также проходит в полуфинал Кубка короля и ожидает результаты матчей 1/4 между командами, занявшими 4-е и 6-е места в лиге. Команда, занявшая 2-е место, также попадает в Кубок короля и ожидает результаты матчей 1/4 между командами, занявшими 3-е и 5-е места в лиге.",
// 			"4. В случае, если две или более команды имеют одинаковое количество очков в конце лиги, места определяются по следующим критериям: Разница голов в матчах между собой. Разница голов в матчах против других команд. Количество забитых голов. Количество пропущенных голов.(не актуально, турнир рабатоет по новым правилам из 5 пункта)",
// 			"5. Новый регламент работы таблицы, введенный (octomber 2 16:00) с начала 3-го сезона турнира 2х2: 1) Сумма очков в личных встречах, 2) Разница мячей (общая), 3) Количество забитых голов, 4) Количество пропущенных голов.",
// 			"6. Также, если игрок получил красную карточку в матче, он пропускает следующий матч. При записи счета прошу указать игрока, получившего красную карточку, желательно приложить фото в качестве доказательства. В случае его появления на поле — техническое поражение."
// 		],
// 		"Лига чемпионов": [
// 			"1. Команды играют два матча между собой, включая финал. Если после двух матчей счёт равен, то играется дополнительный тайм (нейтралиный хост). В случае необходимости, дополнительные таймы продолжаются до тех пор, пока одна из команд не одержит победу."
// 		],
// 		"Кубок Короля": [
// 			"1. Команды играют два матча между собой, включая финал. Если после двух матчей счёт равен, то играется дополнительный тайм (нейтралиный хост). В случае необходимости, дополнительные таймы продолжаются до тех пор, пока одна из команд не одержит победу."
// 		],
// 		"Сроки турнира, замена участника": [
// 			"1. Pro League - играется в течение 2 недель (14 дней, 336 часов) с момента старта.",
// 			"2. Лига чемпионов - играется в течение 1 недели (7 дней, 168 часов, 4 дня (1/2), 3 дня-(финал).) после закрытия Pro League.",
// 			"3. Кубок короля - играется в течение 1 недели (7 дней, 168 часов, 3 дня (1/4), 2 дня (1/2), 2 дня (финал).) после закрытия Pro League.",
// 			"4. Если после начала турнира команда была неактивна, не искала других участников для игры и игнорировала сообщения других участников, а затем появилась за 2 дня до окончания срока и попросила всех играть, но другие участники не могут из-за отсутствия времени, команде присуждаются технические поражения (ТП) во всех матчах. Конечно, все это рассматривается на основе скриншотов от участников.",
// 			"5. Если одной из команд требуется замена одного игрока при игре 2 на 2, замена должна быть произведена в течение 2 дней. Если за это время игрок не нашел нового напарника, рассматривается возможность замены другими участниками, если таковые имеются. Если других двух желающих нет, игрок продолжает искать себе напарника.",
// 			"6. Если напарник, который не хочет играть(или пропадает) и был заменён, при этом продолжает проявлять активность в играх на Gameranger, он наказывается дисквалификацией на следующий турнир.",
// 			"7. Каждый участник турнира обязан приложить все усилия для того, чтобы матч с его участием был сыгран. В случаях, когда одна команда хочет/может играть матч, а другая отказывается/затягивает, ситуация всегда будет решаться в пользу первой команды, независимо от причин."
// 		],
// 		"Номинация на Золотой мяч": [
// 			"1. Золотой мяч получит игрок с наивысшим рейтингом, который рассчитывается по системе: 1 гол — 2 балла, 1 ассист — 1 балл. Также учитывается значимость завоёванных кубков.",
// 			"2. Приоритет значимости кубков: 1.Pro League 2.Лига чемпионов 3.Кубок короля"
// 		],
// 		"Золотая бутса": [
// 			"1. Золотую бутсу получает игрок с наибольшей результативностью голов в рамках сезона."
// 		],
// 		"Заключение": [
// 			"Правила будут дорабатываться и в дальнейшем. Кто не согласен с текущими правилами, не участвует в турнире."
// 		]
// 	};

// 	return (
// 		<div className="rules-container mx-5">
// 			{Object.entries(russianRules).map(([category, rules]) => (
// 				<div key={category} className="rule-section">
// 					<h3 className='text-xl mb-5 mt-9'>&bull; {category}</h3>
// 					<ol className='flex flex-col gap-1 text-sm'>
// 						{rules.map((rule, index) => (
// 							<li key={index}>{rule}</li>
// 						))}
// 					</ol>
// 				</div>
// 			))}
// 		</div>
// 	);
// };

// export default Rules;

import React, { useState } from 'react';

const Rules = () => {
	const [language, setLanguage] = useState('ru'); // Default language is Russian

	// Rules in Russian and English
	const rules = {
		"November 24/11/2024 New Rules": {
			ru: [
				"1.С момента записи на турнир игрок автоматически соглашается с обязательством доиграть турнир до конца. В случае, если он снимается с турнира, этот момент идет в силу сразу после проведения жеребьёвки команд, ему будет наложен запрет на участие в следующем турнире!"
			],
			en: [
				"1. From the moment a player registers for the tournament, they automatically agree to complete the tournament until the end. If they withdraw after the team draw, they will be banned from participating in the next tournament!"
			]
		},
		"November 26/08/2025 New Rules": {
			ru: [
				"1. Запрещено использовать сайдлайны (баг фифы, гол в ворота который позволяет спомощью крученного навеса забивать голы с крайне дальнего расстояния, как правило используется около боковых линий и ему предшествует разворот корпуса бьющего игрока). ❗Такой гол отменяется и не входит в итоговый счёт! (переигрывать не надо!)",
				"2. Запрещено умышленно затягивать время, под затягиванием времени подразумевается перепасовка или удержание мяча на своей половине поля более 5-ти игровых минут подряд. Также если на 2/3 поля игрок затягивает время длительное время 10 минут игровых давая пасы низом с фланга на фланг и потом пасы назад защитникам тоже считается как затягивания времени. (нарушение переигровка)",
				"3. Запрещено использование СВОИХ СХЕМ, УКАЗАНИЙ ИГРОКОВ, ДОМАШНИХ ЗАГОТОВОК ПРИ УГЛОВЫХ! Играем стандартными схемами, что есть в игре. За нарушение снятие всех очков!",
				"4. Запрещено менять что-то в моя тактика‚ можно только выбирать контратака, мощный прессинг, владение мячом, длинный пас, а лезть в одну из этих тактик и вручную что-то менять КАТЕГОРИЧЕСКИ ЗАПРЕЩЕНО!!!!!!",
				"5. В каждом матче капитан команды делает скриншот схемы и тактики, должен быть виден кружок и соперник, в случае если таких фото нету, (переигровка) пример:",
				<div className='flex gap-40'>
					<img className="w-1/3 h-96" src='/img/rules/team-tactic.png' />
					<img className="w-1/3 h-96" src='/img/rules/team-schema.png' />
				</div>,
			],
			en: ["1. Using sideline techniques (a FIFA bug, a goal that allows scoring from a very long distance with a curled cross, typically used near the sidelines and preceded by the shooter turning their body) is prohibited. ❗Such a goal is canceled and does not count in the final score! (No need to replay!)",
				"2. Time-wasting is prohibited. Time-wasting is defined as excessive passing or holding the ball in your own half for more than 5 minutes of game time. Also, if a player spends a prolonged period of time (10 minutes of game time) passing the ball back and forth from flank to flank and then back to defenders in 2/3 of the field, it will also be considered time-wasting. (Violation will result in a replay.)",
				"3. Using YOUR OWN FORMATIONS, PLAYER INSTRUCTIONS, or HOME PRESETS for CORNERS is prohibited! We play using standard formations as available in the game. Violation results in disqualification of all points!",
				"4. Changing anything in 'My Tactics' is prohibited, only counter-attacks, high pressing, possession, and long passes can be selected. Manually modifying any of these tactics is STRICTLY PROHIBITED!!!!",
				"5. In every match, the team captain must take a screenshot of the formation and tactics, showing the circle and the opponent. If such screenshots are missing, a replay is required. Example:",
				<div className='flex gap-40'>
					<img className="w-1/3 h-96" src='/img/rules/team-tactic.png' />
					<img className="w-1/3 h-96" src='/img/rules/team-schema.png' />
				</div>,]
		},
		"Базовые требования / Basic Requirements": {
			ru: [
				"1. Играем оригинальными составами, предоставляемыми игрой с патчем 1.01. Играть нужно только в оригинальной версии, без патчей, таких как версия с Ф. Торресом в Челси.",
				"2. Продолжительность матча — 6 минут, режим — классика, скорость — обычная. Игры проводятся только в ясную погоду; дождь и снег исключены.",
				"3. Разрешается использовать свою схему для игры.",
				"4. Капитан: (Выбирается на начале турнира), при игре 2 на 2 лишь один в случае смены капитана дисквалификация с турнира и ТП на всех матчей(не действует только если участник был заменен в течение турнира, после замены правила опять действуют).",
				"5. Редактирование стандартных положений (угловые, штрафные) запрещено(поскольку соперник не успевает накрывать игроков в штрафной, вам сразу забивают). В случае использования изменённых стандартов команде присуждается техническое поражение со счётом 0:3.",
				"6. Рассинхронизация: В случае рассинхронизации во время матча голы, забитые в промежутке игры, засчитываются. Необходимо перезайти в матч и доиграть оставшиеся минуты. Перезапуск всего матча запрещён, так как это может повлиять на результаты других команд. Оставшиеся минуты округляются, и стороны договариваются о дополнительном времени (например, если осталось 25 минут, добавьте 3 минуты экстра времени). Желательно предоставить скриншоты одной из сторон в качестве подтверждения рассинхронизации, если соперник сомневается.",
				"7. Каждый участник должен иметь Discord для связи с другими участниками вне рамок Gameranger для определения времени проведения матча.",
				"8. Договоренности о матчах должны проводиться между участниками напрямую, а не через администрацию, чтобы определить время, когда можно сыграть матч.",
				"9. Запрещено умышленно затягивать время, под затягиванием времени подразумевается перепасовка или удержание мяча на своей половине поля более 10-ти игровых минут подряд.",
				"10. Хостинг матчей: Договоритесь, где играть) Первый матч играется на хосте первой команды. Второй матч играется на хосте второй команды. Если игра лагает, оба матча играются у нейтрального хоста(пример марроко хост).",
				"11. Лаг: если у вас лагает сразу выходите с матча и играете на хосте хорошым для всех.",
				"12. У каждого игрока есть раздел, где он чаще всего онлайн.",
				"13. Если игра проводится между игроком из Украины и игроком из России, матчи проводятся на нейтральном хосте."
			],
			en: [
				"1. Play with original squads provided by the game with patch 1.01. Only the original version should be played, without patches such as the version with F. Torres at Chelsea.",
				"2. Match duration is 6 minutes, mode is classic, speed is normal. Matches are played only in clear weather; rain and snow are excluded.",
				"3. Using your own formation is allowed.",
				"4. Captain: (Chosen at the start of the tournament), in 2v2 matches only one captain can be changed. If the captain is changed, the team is disqualified from the tournament and the TP is applied to all matches (this rule does not apply if the participant was replaced during the tournament, and the rules apply again after the replacement).",
				"5. Editing standard positions (corners, free kicks) is prohibited (because the opponent won't be able to cover the players in the penalty area in time, and goals will be scored immediately). If modified standards are used, the team is awarded a technical defeat with a score of 0:3.",
				"6. Desynchronization: In case of desynchronization during the match, goals scored during the game are counted. It is necessary to rejoin the match and play the remaining minutes. Restarting the entire match is prohibited, as it may affect the results of other teams. The remaining minutes are rounded, and both sides agree on additional time (for example, if 25 minutes are left, add 3 minutes of extra time). It is preferable to provide screenshots from one side as confirmation of desynchronization if the opponent is in doubt.",
				"7. Every participant must have Discord to communicate with other participants outside of Gameranger to determine match times.",
				"8. Match agreements should be made directly between participants, not through the administration, to determine when the match can be played.",
				"9. Time-wasting is prohibited. Time-wasting is defined as excessive passing or holding the ball in your own half for more than 10 minutes of game time.",
				"10. Match hosting: Agree on where to play. The first match is hosted by the first team's host. The second match is hosted by the second team's host. If there is lag, both matches are played with a neutral host (for example, a Morocco host).",
				"11. Lag: If you experience lag, immediately leave the match and play on a host that works well for everyone.",
				"12. Each player has a section where they are most frequently online.",
				"13. If a match is between a player from Ukraine and a player from Russia, the match is hosted on a neutral host."
			]
		},
		"Скриншоты, видео / Screenshots, Videos": {
			ru: [
				"1. Необходимо иметь программу для записи экрана или создания скриншотов, такую как FRAPS (https://fraps.com/download.php),(капитаны чтобы делать скрины).",
				"2. Если забили красивый гол, сделайте видео и отправьте его после того, как запишете результат (по желанию)."
			],
			en: [
				"1. You must have a screen recording or screenshot software, such as FRAPS (https://fraps.com/download.php), (captains should take screenshots).",
				"2. If you score a beautiful goal, make a video and send it after recording the result (optional)."
			]
		},
		"Отправка результатов матчей / Match Result Submission": {
			ru: ["1. Результаты матчей отправляйте в ветку 'Турнир'. Если вы хотите, чтобы ваши голы и ассисты были учтены, записывайте результат как выигравшая, так и проигравшая команда.",
				"2. Пример для команды, которая выиграла: Pro League - указываем лигу Inter 3:1 Barcelona PlayerOne - Голы: 2, Ассисты: 1 PlayerTwo - Голы: 1, Ассисты: 2",
				"3. Пример для команды, которая проиграла: Inter 3:1 Barcelona PlayerOne - Голы: 1 PlayerTwo - Ассисты: 1"],
			en: [
				"1. Submit match results in the 'Tournament' thread. If you want your goals and assists to be counted, record the result for both the winning and losing teams.",
				"2. Example for the winning team: Pro League - specify the league Inter 3:1 Barcelona PlayerOne - Goals: 2, Assists: 1 PlayerTwo - Goals: 1, Assists: 2",
				"3. Example for the losing team: Inter 3:1 Barcelona PlayerOne - Goals: 1 PlayerTwo - Assists: 1"
			]
		},
		"Читерство, оскорбления игроков, умышленный вред, дисквалификация / Cheating, Player Insults, Intentional Harm, Disqualification": {
			ru: [
				"1. Нарушение правил турнира или правил поведения.",
				"2. Использование читов или других нелегальных средств (накрутка составов) приведет к вечному бану на турнире.",
				"3. Намеренное отключение от игры или симуляция плохого интернет-соединения, или включения программ для создания лагов.",
			],
			en: [
				"1. Violation of tournament rules or behavior rules.",
				"2. Using cheats or other illegal means (boosting squads) will result in a permanent ban from the tournament.",
				"3. Intentionally disconnecting from the game or simulating a bad internet connection, or using programs to create lag.",
			]
		},
		"Проверка на читерство, накрутка составов": {
			ru: [
				"1. Если у вас есть подозрения, что ваши соперники накрутили состав, вы имеете право требовать проверки. Для этого необходимо при заходе в игру в локальной конференции неожиданно запросить скриншоты двух игроков соперника на ваш выбор с детальной статистикой. Скриншоты делаются в перерыве матча, на них должна быть видна команда против которой вы играете и кружочек. Скриншоты должны быть отправлены запрашивающему игроку сразу после завершения матча, макс. время на отправку 5 минут после завержение игры.",
				"2. Если соперник после вашего запроса выходит из игры, чтобы перезайти, или не предоставляет скриншоты, ему присуждается техническое поражение (ТП) со счётом 0:3 в этом матче. Команда, уличённая в нарушении, берётся под наблюдение и проверяется всеми противниками на наличие накрутки составов двух игроков в каждом матче.",
				"3. Если накрутка подтверждается, капитан команды получает пожизненный бан в турнирах, а его напарник будет находиться под пристальным наблюдением."
			],
			en: [
				"1. If you suspect that your opponents have boosted their squad, you have the right to request a check. To do this, when entering the game in a local conference, unexpectedly request screenshots from two of the opponent's players of your choice with detailed statistics. The screenshots should be taken during the halftime break, showing the team you are playing against and the circle. The screenshots must be sent to the requesting player immediately after the match, with a maximum time limit of 5 minutes after the game ends.",
				"2. If the opponent exits the game to rejoin after your request or fails to provide the screenshots, they will receive a technical defeat (TD) with a 0:3 score for that match. The team caught violating this rule will be monitored and checked by all opponents for squad boosting in each match.",
				"3. If boosting is confirmed, the team captain will receive a lifetime ban from the tournament, and their partner will be placed under strict observation."
			]
		},
		"Пример скриншотов статистики игрока во время перерыва в матче: Example of Player Statistics Screenshots During Halftime": {
			ru: [
				"1.Виден оппонент, виден кружочек, видна полная статистика игрока.",
				<div div className='flex gap-40' >
					<img className="w-1/3 h-96" src='/img/rules/player-stat1.jpg' />
					<img className="w-1/3 h-96" src='/img/rules/player-stat2.jpg' />
				</div >,
				<div className='flex gap-40'>
					<img className="w-1/3 h-96" src='/img/rules/player-stat3.jpg' />
					<img className="w-1/3 h-96" src='/img/rules/player-stat4.jpg' />
				</div>,
			],
			en: [
				"1. The opponent is visible, the circle is visible, and the full player statistics are visible.",
				<div className='flex gap-40'>
					<img className="w-1/3 h-96" src='/img/rules/player-stat1.jpg' />
					<img className="w-1/3 h-96" src='/img/rules/player-stat2.jpg' />
				</div>,
				<div className='flex gap-40'>
					<img className="w-1/3 h-96" src='/img/rules/player-stat3.jpg' />
					<img className="w-1/3 h-96" src='/img/rules/player-stat4.jpg' />
				</div>,
			]
		},
		"Пример счета в конце матча(для вас чтобы не было проблем с соперником) / Example of Final Match Score (For You to Avoid Problems with Opponents)": {
			ru: [
				<img className="w-2/3 h-96" src='/img/rules/score-example.jpg' />
			],
			en: [
				<img className="w-2/3 h-96" src='/img/rules/score-example.jpg' />
			]
		},
		"Раздел лиги / League Section": {
			ru: [
				"1. Pro League Лига проводится по системе двойного кругового турнира, где каждая команда играет два матча с каждой другой командой. За победу начисляется 3 очка, за ничью — 1 очко, поражения - 0 очков.",
				"2. Команда, занявшая первое место в лиге, выигрывает чемпионат. В полуфинале Лиги чемпионов участвуют команды с 1-4 места, первая сетка 1-е vs 4-е места, а также 2-е vs 3-е места. Команды, занявшие 5-е и 6-е места, не выходят в Лигу чемпионов.",
				"3. Первая команда также проходит в полуфинал Кубка короля и ожидает результаты матчей 1/4 между командами, занявшими 4-е и 6-е места в лиге. Команда, занявшая 2-е место, также попадает в Кубок короля и ожидает результаты матчей 1/4 между командами, занявшими 3-е и 5-е места в лиге.",
				"4. В случае, если две или более команды имеют одинаковое количество очков в конце лиги, места определяются по следующим критериям: Разница голов в матчах между собой. Разница голов в матчах против других команд. Количество забитых голов. Количество пропущенных голов.(не актуально, турнир рабатоет по новым правилам из 5 пункта)",
				"5. Новый регламент работы таблицы, введенный (octomber 2 16:00) с начала 3-го сезона турнира 2х2: 1) Сумма очков в личных встречах, 2) Разница мячей (общая), 3) Количество забитых голов, 4) Количество пропущенных голов.",
				"6. Также, если игрок получил красную карточку в матче, он пропускает следующий матч. При записи счета прошу указать игрока, получившего красную карточку, желательно приложить фото в качестве доказательства. В случае его появления на поле — техническое поражение."
			],
			en: [
				"1. The Pro League is conducted in a double round-robin format, where each team plays two matches against every other team. A win earns 3 points, a draw earns 1 point, and a loss earns 0 points.",
				"2. The team finishing in first place in the league wins the championship. In the Champions League semifinals, the teams ranked 1st to 4th will participate, with the first bracket being 1st vs 4th and 2nd vs 3rd. Teams finishing in 5th and 6th place do not qualify for the Champions League.",
				"3. The first team also advances to the King's Cup semifinals and awaits the results of the 1/4 finals between the teams in 4th and 6th place in the league. The team finishing in 2nd place also qualifies for the King's Cup and awaits the results of the 1/4 finals between the teams in 3rd and 5th place in the league.",
				"4. If two or more teams have the same number of points at the end of the league, positions are determined by the following criteria: Goal difference in matches between the teams, goal difference in matches against other teams, goals scored, goals conceded. (Not relevant anymore, the tournament now operates under the new rules from point 5).",
				"5. The new table rules introduced (October 2, 16:00) at the start of the 3rd season of the 2v2 tournament: 1) Sum of points in head-to-head matches, 2) Goal difference (overall), 3) Goals scored, 4) Goals conceded.",
				"6. Additionally, if a player receives a red card in a match, they miss the next match. When recording the score, please indicate the player who received the red card and ideally attach a photo as proof. If the player appears on the field, a technical defeat will be awarded."
			]
		},
		"Лига чемпионов / Champions League": {
			ru: [
				"1. Команды играют два матча между собой, включая финал. Если после двух матчей счёт равен, то играется дополнительный тайм (нейтралиный хост). В случае необходимости, дополнительные таймы продолжаются до тех пор, пока одна из команд не одержит победу."
			],
			en: [
				"1. Teams play two matches against each other, including the final. If the score is tied after the two matches, extra time is played (neutral host). If necessary, additional extra times continue until one of the teams wins."
			]
		},
		"Кубок Короля / King's Cup": {
			ru: [
				"1. Команды играют два матча между собой, включая финал. Если после двух матчей счёт равен, то играется дополнительный тайм (нейтралиный хост). В случае необходимости, дополнительные таймы продолжаются до тех пор, пока одна из команд не одержит победу."
			],
			en: [
				"1. Teams play two matches against each other, including the final. If the score is tied after the two matches, extra time is played (neutral host). If necessary, additional extra times continue until one of the teams wins."
			]
		},
		"Сроки турнира, замена участника / Tournament Deadlines, Player Substitution": {
			ru: [
				"1. Pro League - играется в течение 2 недель (14 дней, 336 часов) с момента старта.",
				"2. Лига чемпионов - играется в течение 1 недели (7 дней, 168 часов, 4 дня (1/2), 3 дня-(финал).) после закрытия Pro League.",
				"3. Кубок короля - играется в течение 1 недели (7 дней, 168 часов, 3 дня (1/4), 2 дня (1/2), 2 дня (финал).) после закрытия Pro League.",
				"4. Если после начала турнира команда была неактивна, не искала других участников для игры и игнорировала сообщения других участников, а затем появилась за 2 дня до окончания срока и попросила всех играть, но другие участники не могут из-за отсутствия времени, команде присуждаются технические поражения (ТП) во всех матчах. Конечно, все это рассматривается на основе скриншотов от участников.",
				"5. Если одной из команд требуется замена одного игрока при игре 2 на 2, замена должна быть произведена в течение 2 дней. Если за это время игрок не нашел нового напарника, рассматривается возможность замены другими участниками, если таковые имеются. Если других двух желающих нет, игрок продолжает искать себе напарника.",
				"6. Если напарник, который не хочет играть(или пропадает) и был заменён, при этом продолжает проявлять активность в играх на Gameranger, он наказывается дисквалификацией на следующий турнир.",
				"7. Каждый участник турнира обязан приложить все усилия для того, чтобы матч с его участием был сыгран. В случаях, когда одна команда хочет/может играть матч, а другая отказывается/затягивает, ситуация всегда будет решаться в пользу первой команды, независимо от причин."
			],
			en: [
				"1. Pro League - played over 2 weeks (14 days, 336 hours) from the start.",
				"2. Champions League - played over 1 week (7 days, 168 hours, 4 days for the semifinals, 3 days for the final) after the closure of Pro League.",
				"3. King's Cup - played over 1 week (7 days, 168 hours, 3 days for the quarterfinals, 2 days for the semifinals, 2 days for the final) after the closure of Pro League.",
				"4. If a team has been inactive after the start of the tournament, not looking for other participants to play or ignoring messages, and then appears 2 days before the end and asks everyone to play, but other participants cannot due to lack of time, the team will receive technical defeats (TF) in all their matches. This will be considered based on screenshots from participants.",
				"5. If a team needs to substitute a player for 2v2 play, the substitution should be done within 2 days. If no new partner is found during this time, the possibility of substitution by other participants will be considered. If there are no other participants willing to replace, the player continues searching for a partner.",
				"6. If a partner who doesn't want to play (or disappears) and has been replaced continues to show activity in games on Gameranger, they will be disqualified from the next tournament.",
				"7. Every participant of the tournament must make every effort to play the match. In cases where one team wants/has the ability to play but the other refuses/delays, the situation will always be resolved in favor of the first team, regardless of the reasons."
			]
		},
		"Номинация на Золотой мяч / Ballon d'Or Nomination": {
			ru: [
				"1. Золотой мяч получит игрок с наивысшим рейтингом, который рассчитывается по системе: 1 гол — 2 балла, 1 ассист — 1 балл. Также учитывается значимость завоёванных кубков.",
				"2. Приоритет значимости кубков: 1.Pro League 2.Лига чемпионов 3.Кубок короля"
			],
			en: [
				"1. The Ballon d'Or will go to the player with the highest rating, calculated by the system: 1 goal = 2 points, 1 assist = 1 point. The importance of the cups won is also taken into account.",
				"2. Priority of cup significance: 1. Pro League, 2. Champions League, 3. King's Cup."
			]
		},
		"Золотая бутса / Golden Boot": {
			ru: [
				"1. Золотую бутсу получает игрок с наибольшей результативностью голов в рамках сезона."
			],
			en: [
				"1. The Golden Boot is awarded to the player with the most goals in the season."
			]
		},
		"Заключение / Conclusion": {
			ru: [
				"Правила будут дорабатываться и в дальнейшем. Кто не согласен с текущими правилами, не участвует в турнире."
			],
			en: [
				"The rules will be further developed. Those who do not agree with the current rules should not participate in the tournament."
			]
		}
	};

	// Function to toggle language
	const toggleLanguage = () => {
		setLanguage((prevLang) => (prevLang === 'ru' ? 'en' : 'ru'));
	};

	return (
		<div className="rules-container mx-5">
			<button
				onClick={toggleLanguage}
				className="toggle-language-btn mt-6 px-4 py-2 bg-blue-500 text-white rounded-md mb-4"
			>
				{language === 'ru' ? 'Switch to English' : 'Switch to Russian'}
			</button>

			{Object.entries(rules).map(([title, content]) => (
				<div key={title} className="rule-section mb-6">
					<h3 className="text-xl font-semibold">{title}</h3>
					<ul className="text-sm list-disc pl-5 mt-2">
						{content[language].map((rule, index) => (
							<li key={index} className="mb-2">
								{rule}
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
};

export default Rules;
