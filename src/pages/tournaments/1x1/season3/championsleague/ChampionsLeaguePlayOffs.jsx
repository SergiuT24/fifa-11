import React from 'react';
import Square from '../../../../../components/league/square/Square';
import PlayersImg from '../../../../../components/league/players/PlayersImg';

const ChampionsLeaguePlayOffs = () => {
	return (
		<div className='py-16 darkblue'>
			<div className='flex flex-col gap-10'>
				<h2 className='text-center'>1/8-Finals</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/makson.png'} />
							<p>{'M@KSON'}</p>
						</div>}
						teamTwo={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/nikita.png'} />
							<p>{'Nikita'}</p>
						</div>}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/rin.png'} />
							<p>{'DartRin'}</p>
						</div>}
						teamTwo={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/toto.png'} />
							<p>{'TOTO'}</p>
						</div>}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10 mt-9'>
				<h2 className='text-center'>Play Offs: Quarter-Finals 1/4</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/dagestan.png'} />
							<p>{'Dagestan'}</p>
						</div>}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/anna.png'} />
							<p>{'Anna'}</p>
						</div>}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-10 mt-9'>
				<h2 className='text-center'>Play Offs: Semi-Finals 1/2</h2>
				<div className='flex gap-14 justify-center'>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/avatar.png'} />
							<p>{'HAM'}</p>
						</div>}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/berserk.png'} />
							<p>{'Berserk'}</p>
						</div>}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-3 mt-9'>
				<h2 className='text-center'>FINAL</h2>
				<div className='flex gap-10 justify-center'>
					<Square
						teamOne={'empty'}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
				</div>
			</div>
		</div>
	);
}

export default ChampionsLeaguePlayOffs;
