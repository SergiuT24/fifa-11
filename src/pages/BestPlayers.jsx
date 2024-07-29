import React from 'react';
import PlayerStatsLine from '../components/league/playerStats/PlayerStatsLine';
import PlayerStatsAbout from '../components/league/playerStats/PlayerStatsAbout';

const defaultScorers = [
	{ player: 'Berserk', mp: 14, goals: 22, assist: 15 },
	{ player: 'NSKRaven', mp: 14, goals: 18, assist: 6 },
	{ player: 'D.Drogba', mp: 8, goals: 9, assist: 8 },
	{ player: 'mysterio', mp: 8, goals: 9, assist: 7 },
	{ player: 'Sania', mp: 16, goals: 12, assist: 15 },
	{ player: 'mcrurus', mp: 8, goals: 8, assist: 17 },
	{ player: 'Malemiria', mp: 16, goals: 15, assist: 10 },
	{ player: 'Matuu', mp: 6, goals: 6, assist: 5 },
	{ player: 'Elite', mp: 6, goals: 5, assist: 6 },
	{ player: 'Anna', mp: 14, goals: 14, assist: 23 },
	{ player: 'Radenek', mp: 10, goals: 12, assist: 6 },
	{ player: 'TOTO', mp: 8, goals: 3, assist: 2 },
	{ player: 'Jsnick', mp: 12, goals: 9, assist: 8 },
	{ player: 'Mark', mp: 10, goals: 7, assist: 12 },
	{ player: 'DartRin', mp: 12, goals: 15, assist: 12 },
	{ player: 'A.Wenger', mp: 10, goals: 3, assist: 4 },
	{ player: 'Perfect', mp: 8, goals: 6, assist: 5 },
	{ player: 'Box', mp: 4, goals: 2, assist: 1 },
	{ player: '14_France', mp: 4, goals: 1, assist: 2 },
	{ player: 'SergeyFace', mp: 2, goals: 1, assist: 1 }
];

const BestPlayers = () => {
	// Вычисление рейтинга для каждого игрока
	const playersWithRating = defaultScorers.map(player => ({
		...player,
		rating: player.goals * 2 + player.assist
	}));

	// Сортировка по рейтингу, затем по количеству голов и по имени
	const sortedPlayers = [...playersWithRating].sort((a, b) => {
		if (b.rating === a.rating) {
			if (b.goals === a.goals) {
				return a.player.localeCompare(b.player); // Сортировка по имени в алфавитном порядке
			}
			return b.goals - a.goals; // Сортировка по количеству голов
		}
		return b.rating - a.rating; // Сортировка по рейтингу
	});

	// Присвоение рангов с учетом рейтинга, количества голов и алфавитного порядка
	let currentRank = 1;
	let previousRating = null;
	let previousGoals = null;
	const rankedPlayers = sortedPlayers.map((player, index) => {
		if (player.rating !== previousRating || player.goals !== previousGoals) {
			currentRank = index + 1;
		}
		previousRating = player.rating;
		previousGoals = player.goals;
		return { ...player, rank: currentRank };
	});

	return (
		<div className='flex-1 ml-10'>
			<h1 className='text-xl uppercase mb-10'>All Time Best Players:</h1>
			<div className='flex gap-12'>
				<table className='border-x border-t'>
					<thead style={{ backgroundColor: '#0f2d37' }}>
						<PlayerStatsLine rank={'#'} player={"Player"} mp={"M.P."} g={"Goals"} a={"Assist"} note={"Rating"} />
					</thead>
					<tbody style={{ backgroundColor: '#010a0f' }}>
						{rankedPlayers.map((player) => (
							<PlayerStatsLine
								key={player.player}
								rank={player.rank}
								player={player.player}
								mp={player.mp}
								g={player.goals}
								a={player.assist}
								note={player.rating.toFixed(2)} // Форматирование рейтинга до двух десятичных знаков
							/>
						))}
					</tbody>
				</table>
				<img className='top-scorer' src='/img/background/top-scorer.png' />
			</div>
			<PlayerStatsAbout />
		</div>
	);
}

export default BestPlayers;
