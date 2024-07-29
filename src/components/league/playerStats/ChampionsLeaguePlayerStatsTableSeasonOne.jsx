import React from 'react';
import PlayerStatsLine from './PlayerStatsLine';
import { initialPlayers, playerStats } from '../../../data/ChampionsLeagueInitialDataPlayerStatsSeasonOne2x2';


const calculatePlayerNote = (goals, assists) => {
	const goalPoints = 2; // Баллы за гол
	const assistPoints = 1; // Баллы за ассист

	// Рассчитываем общие баллы
	const totalPoints = (goals * goalPoints) + (assists * assistPoints);

	// Возвращаем общие баллы, округленные до 2 знаков после запятой
	return totalPoints.toFixed(2);
};

const ChampionsLeaguePlayerStatsTableSeasonOne = () => {
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
			playerNote: playerNote,
		};
	});

	// Сортируем игроков по количеству голов
	const sortedPlayers = playersWithStats.sort((a, b) => b.goals - a.goals);

	// Рендерим таблицу с отсортированными игроками
	let previousGoals = null;
	let previousRank = null;

	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<PlayerStatsLine rank={'#'} player={"Player"} team={"Team"} g={"G"} mp={"MP"} a={"A"} note={"Rating"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				{sortedPlayers.map((player, index) => {
					let rank;
					if (player.goals === previousGoals) {
						rank = previousRank;
					} else {
						rank = index + 1;
					}
					previousGoals = player.goals;
					previousRank = rank;

					return (
						<PlayerStatsLine
							key={player.id}
							rank={rank}
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

export default ChampionsLeaguePlayerStatsTableSeasonOne;