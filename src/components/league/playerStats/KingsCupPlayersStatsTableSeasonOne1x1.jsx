import React from 'react';
import PlayerStatsLine from './PlayerStatsLine';
import { initialPlayers, playerStats } from '../../../data/KingsCupInitialDataPlayersStatsSeasonOne1x1';

const calculatePlayerNote = (goals, assists) => {
	const goalPoints = 2; // Баллы за гол
	const assistPoints = 1; // Баллы за ассист

	// Рассчитываем общие баллы
	const totalPoints = (goals * goalPoints) + (assists * assistPoints);

	// Возвращаем общие баллы, округленные до 2 знаков после запятой
	return parseFloat(totalPoints.toFixed(2));
};

const KingsCupPlayersStatsTableSeasonOne1x1 = () => {
	// Агрегируем голы, сыгранные матчи и ассисты для каждого игрока
	const aggregatedStats = playerStats.reduce((acc, { id, goals, matchesPlayed, assists }) => {
		if (!acc[id]) {
			acc[id] = { goals: 0, matchesPlayed: 0, assists: 0 };
		}
		acc[id].goals += goals;
		acc[id].matchesPlayed += matchesPlayed;
		acc[id].assists += assists;
		return acc;
	}, {});

	// Объединяем данные игроков с их агрегированными статистиками
	const playersWithStats = initialPlayers.map(player => {
		const stats = aggregatedStats[player.id] || { goals: 0, matchesPlayed: 0, assists: 0 };
		const playerNote = calculatePlayerNote(stats.goals, stats.assists);
		return {
			...player,
			goals: stats.goals,
			matchesPlayed: stats.matchesPlayed,
			assists: stats.assists,
			playerNote: playerNote.toFixed(2), // Форматируем рейтинг до 2 знаков после запятой
		};
	});

	// Сортируем игроков по рейтингу
	const sortedPlayers = playersWithStats.sort((a, b) => b.playerNote - a.playerNote);

	// Рендерим таблицу с отсортированными игроками
	let previousNote = null;
	let rank = 0;
	let displayRank = 0;

	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<PlayerStatsLine rank={'#'} player={"Player"} team={"Team"} g={"G"} mp={"MP"} a={"A"} note={"Rating"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				{sortedPlayers.map((player, index) => {
					if (player.playerNote !== previousNote) {
						rank += 1;
					}
					displayRank = rank;
					previousNote = player.playerNote;

					return (
						<PlayerStatsLine
							key={player.id}
							rank={displayRank}
							player={player.id}
							team={player.team}
							g={player.goals}
							mp={player.matchesPlayed}
							a={player.assists}
							note={player.playerNote}
						/>
					);
				})}
			</tbody>
		</table>
	);
}

export default KingsCupPlayersStatsTableSeasonOne1x1;
