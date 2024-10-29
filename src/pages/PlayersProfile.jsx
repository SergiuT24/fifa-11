import React from 'react';
import PlayerProfileTitle from '../components/players/PlayerProfileTitle';
import PlayerProfile from '../components/players/PlayerProfile';

const PlayersProfile = () => {
	const playersData = [
		{ avatar: '/img/players/anna.png', name: 'Anna', id: '11208470', time: 'very active', balonDor: '/img/trophy/ballon-dor.png', balonDorCount: 'x1', goldenShoe: '/img/trophy/golden-shoe.png', goldenShoeCount: 'x1', proLeague: '/img/trophy/pro-league.png', proLeagueCount: 'x1', ucl: '/img/trophy/champions-league.png', uclCount: 'x1', kingsCup: '/img/trophy/kings-cup.png', kingsCupCount: 'x1', worldCup: '/img/trophy/world-cup.png', worldCupCount: 'x1' },
		{ avatar: '/img/players/rin.png', name: 'DartRin', id: '10799738', goldenShoe: '/img/trophy/golden-shoe.png', goldenShoeCount: 'x1', worldCup: '/img/trophy/world-cup.png', worldCupCount: 'x1' },
		{ avatar: '/img/players/berserk.png', name: 'Berserk', id: '4180544', time: 'very active', goldenShoe: '/img/trophy/golden-shoe.png', goldenShoeCount: 'x2', balonDor: '/img/trophy/ballon-dor.png', balonDorCount: 'x1', proLeague: '/img/trophy/pro-league.png', proLeagueCount: 'x1', worldCup: '/img/trophy/world-cup.png', worldCupCount: 'x1' },
		{ avatar: '/img/players/box.png', name: 'Box', },
		{ avatar: '/img/players/france.png', name: '14 France', },
		{ avatar: '/img/players/jsnick.png', name: 'Jsnick', id: '3674945' },
		{ avatar: '/img/players/malemiria.png', name: 'Malemiria', id: '9662584' },
		{ avatar: '/img/players/matuu.png', name: 'Matuu', id: '929057' },
		{ avatar: '/img/players/mcrurus.png', name: 'mcrurus', id: '9984628', time: '16:00-04:00', kingsCup: '/img/trophy/kings-cup.png', kingsCupCount: 'x1' },
		{ avatar: '/img/players/perfect.png', name: 'Perfect', id: '5459556', time: '21:00', proLeague: '/img/trophy/pro-league.png', proLeagueCount: 'x1', ucl: '/img/trophy/champions-league.png', uclCount: 'x1', kingsCup: '/img/trophy/kings-cup.png', kingsCupCount: 'x1' },
		{ avatar: '/img/players/petr.png', name: 'Petr Pirat' },
		{ avatar: '/img/players/raven.png', name: 'NSKRaven', id: '1287368', time: '12:00-20:00' },
		{ avatar: '/img/players/sergeyface.png', name: 'SergeyFace', id: '1235135' },
		{ avatar: '/img/players/toto.png', name: 'TOTO', id: '8985743', time: '19:00-00:00', proLeague: '/img/trophy/pro-league.png', proLeagueCount: 'x2' },
		{ avatar: '/img/players/wenger.png', name: 'Wenger', id: '10014005' },
		{ avatar: '/img/players/avatar.png', name: 'Robinho', id: '1962550', kingsCup: '/img/trophy/kings-cup.png', kingsCupCount: 'x1' },
		{ avatar: '/img/players/avatar.png', name: 'VITALY', id: '12968009' },
		{ avatar: '/img/players/avatar.png', name: 'M@KSON', id: '4255221' },
		{ avatar: '/img/players/avatar.png', name: 'Elite', id: '12776567' },
		{ avatar: '/img/players/d-drogba.png', name: 'D.Drogba', id: '11701465', time: '20:00-00:00', proLeague: '/img/trophy/pro-league.png', proLeagueCount: 'x1', ucl: '/img/trophy/champions-league.png', uclCount: 'x1', kingsCup: '/img/trophy/kings-cup.png', kingsCupCount: 'x1' },
		{ avatar: '/img/players/mysterio.png', name: 'mysterio', id: '11701466', time: '20:00-00:00', proLeague: '/img/trophy/pro-league.png', proLeagueCount: 'x1', ucl: '/img/trophy/champions-league.png', uclCount: 'x1', kingsCup: '/img/trophy/kings-cup.png', kingsCupCount: 'x1' },
		{ avatar: '/img/players/avatar.png', name: 'Mark', id: '1087339' },
		{ avatar: '/img/players/avatar.png', name: 'Radenek', id: '1530641' },
		{ avatar: '/img/players/avatar.png', name: 'Sania', id: '1040066', proLeague: '/img/trophy/pro-league.png', proLeagueCount: 'x1', worldCup: '/img/trophy/world-cup.png', worldCupCount: 'x1' },
		{ avatar: '/img/players/avatar.png', name: 'Pro[100]Raspasovschik', id: '4196256' },
		{ avatar: '/img/players/avatar.png', name: 'Kebab', id: '7482915' },
		{ avatar: '/img/players/mrnoob.png', name: 'Mr.Noob', id: '10547987', time: '19:00-00:00', proLeague: '/img/trophy/pro-league.png', proLeagueCount: 'x1' },
		{ avatar: '/img/players/avatar.png', name: 'nebro', id: '3252134', time: '21:00' },
		{ avatar: '/img/players/ebluntik.png', name: 'e6JIyHTuKinDaHouse', id: '12138646', time: '21:00', ucl: '/img/trophy/champions-league.png', uclCount: 'x1' },
		{ avatar: '/img/players/avatar.png', name: 'HAM', id: '7583677', time: '21:00', ucl: '/img/trophy/champions-league.png', uclCount: 'x1', balonDor: '/img/trophy/ballon-dor.png', balonDorCount: 'x1', goldenShoe: '/img/trophy/golden-shoe.png', goldenShoeCount: 'x1' },
	];

	playersData.sort((a, b) => a.name.localeCompare(b.name));

	return (
		<div className='flex-1 flex justify-center'>
			<table>
				<thead style={{ backgroundColor: '#0f2d37' }}>
					<PlayerProfileTitle avatar={'Player Photo'} name={'Name'} id={'ID'} time={'Mostly Online (MSK)'} goldenShoe={`Golden Shoe`} balonDor={`Ballon d'or`} proLeague={'Pro League'} ucl={'Champions League'} kingsCup={`King's Cup`} worldCup={'World Cup'} />
				</thead>
				<tbody className='text-sm font-normal' style={{ backgroundColor: '#010a0f' }}>
					{playersData.map((player, index) => (
						<PlayerProfile
							key={index}
							avatar={player.avatar}
							name={player.name}
							id={player.id}
							time={player.time}
							goldenShoe={player.goldenShoe}
							goldenShoeCount={player.goldenShoeCount}
							balonDor={player.balonDor}
							balonDorCount={player.balonDorCount}
							proLeague={player.proLeague}
							proLeagueCount={player.proLeagueCount}
							ucl={player.ucl}
							uclCount={player.uclCount}
							kingsCup={player.kingsCup}
							kingsCupCount={player.kingsCupCount}
							worldCup={player.worldCup}
							worldCupCount={player.worldCupCount}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default PlayersProfile;
