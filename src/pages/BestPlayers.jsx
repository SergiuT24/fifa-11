import React from 'react';
import PlayerStatsLine from '../components/league/playerStats/PlayerStatsLine';
import PlayerStatsAbout from '../components/league/playerStats/PlayerStatsAbout';

const defaultScorers = [
	{ player: 'HAM', mp: 61, goals: 97, assist: 49 },
	{ player: 'Mr.Noob', mp: 16, goals: 25, assist: 16 },
	{ player: 'TOTO', mp: 64, goals: 56, assist: 63 },
	{ player: 'e6JIyHTuKinDaHouse', mp: 16, goals: 16, assist: 24 },
	{ player: 'Berserk', mp: 72, goals: 83, assist: 83 },
	{ player: 'mcrurus', mp: 38, goals: 39, assist: 40 },
	{ player: 'Anna', mp: 69, goals: 90, assist: 85 },
	{ player: 'D.Drogba', mp: 51, goals: 53, assist: 42 },
	{ player: 'NSKRaven', mp: 28, goals: 34, assist: 21 },
	{ player: 'mysterio', mp: 51, goals: 45, assist: 49 },
	{ player: 'Perfect', mp: 37, goals: 49, assist: 51 },
	{ player: 'nebro', mp: 10, goals: 7, assist: 14 },
	{ player: 'DartRin', mp: 22, goals: 17, assist: 12 },
	{ player: 'Malemiria', mp: 16, goals: 15, assist: 10 },
	{ player: 'Sania', mp: 34, goals: 33, assist: 42 },
	{ player: 'Radenek', mp: 10, goals: 12, assist: 6 },
	{ player: 'Jsnick', mp: 48, goals: 57, assist: 48 },
	{ player: 'Mark', mp: 10, goals: 7, assist: 12 },
	{ player: 'Matuu', mp: 44, goals: 47, assist: 50 },
	{ player: 'Kevin', mp: 40, goals: 53, assist: 38 },
	{ player: 'M@KSON', mp: 38, goals: 29, assist: 19 },
	{ player: 'VITALY', mp: 38, goals: 23, assist: 25 },
	{ player: 'Elite', mp: 6, goals: 5, assist: 6 },
	{ player: 'A.Wenger', mp: 10, goals: 3, assist: 4 },
	{ player: 'Box', mp: 4, goals: 2, assist: 1 },
	{ player: '14_France', mp: 14, goals: 5, assist: 2 },
	{ player: 'SergeyFace', mp: 12, goals: 1, assist: 1 },
	{ player: 'Robinho', mp: 14, goals: 8, assist: 18 },
	{ player: 'Andy', mp: 10, goals: 7, assist: 5 },
	{ player: 'Kebab', mp: 10, goals: 7, assist: 3 }
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
			<div className='flex gap-6'>
				<table className='border-x border-x-green-950'>
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
