import React from 'react';
import Square from '../../../../../components/league/square/Square';
import PlayersImg from '../../../../../components/league/players/PlayersImg';

const KingsCupPlayOffs = () => {
	return (
		<div className='flex gap-10 overflow-x-scroll leaguemenu py-16 darkblue'>
			<div className='flex flex-col ml-3 gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Stage 1</h2>
				</div>
				<div className='flex flex-col gap-14 justify-center'>
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
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/toto.png'} />
							<p>{'TOTO'}</p>
						</div>}
						teamTwo={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/vitaly.png'} />
							<p>{'VITALY'}</p>
						</div>}
						scoreFirstTeamOne={2}
						scoreSecondTeamOne={2}
						scoreFirstTeamTwo={4}
						scoreSecondTeamTwo={1}
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
							<PlayersImg avatar={'/img/players/rin.png'} />
							<p>{'DartRin'}</p>
						</div>}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/nikita.png'} />
							<p>{'Nikita'}</p>
						</div>}
						teamTwo={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/mysterio.png'} />
							<p>{'mysterio'}</p>
						</div>}
						scoreFirstTeamOne={3}
						scoreSecondTeamOne={0}
						scoreFirstTeamTwo={3}
						scoreSecondTeamTwo={0}
					/>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/makson.png'} />
							<p>{'M@KSON'}</p>
						</div>}
						teamTwo={'empty'}
						scoreFirstTeamOne={'?'}
						scoreSecondTeamOne={'?'}
						scoreFirstTeamTwo={'?'}
						scoreSecondTeamTwo={'?'}
					/>
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
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Quarter-Finals 1/4</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<Square
						teamOne={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/anna.png'} />
							<p>{'Anna'}</p>
						</div>}
						teamTwo={<div className='flex gap-2 items-center'>
							<PlayersImg avatar={'/img/players/toto.png'} />
							<p>{'TOTO'}</p>
						</div>}
						scoreFirstTeamOne={5}
						scoreSecondTeamOne={7}
						scoreFirstTeamTwo={1}
						scoreSecondTeamTwo={3}
					/>
					<div className='mt-48'>
						<Square
							teamOne={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/berserk.png'} />
								<p>{'Berserk'}</p>
							</div>}
							teamTwo={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/dagestan.png'} />
								<p>{'Dagestan'}</p>
							</div>}
							scoreFirstTeamOne={4}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={3}
							scoreSecondTeamTwo={0}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/rin.png'} />
								<p>{'DartRin'}</p>
							</div>}
							teamTwo={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/nikita.png'} />
								<p>{'Nikita'}</p>
							</div>}
							scoreFirstTeamOne={3}
							scoreSecondTeamOne={0}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={1}
						/>
					</div>
					<div className='mt-48'>
						<Square
							teamOne={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/makson.png'} />
								<p>{'M@KSON'}</p>
							</div>}
							teamTwo={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/avatar.png'} />
								<p>{'HAM'}</p>
							</div>}
							scoreFirstTeamOne={4}
							scoreSecondTeamOne={4}
							scoreFirstTeamTwo={2}
							scoreSecondTeamTwo={5}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Semi-Finals 1/2</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-36'>
						<Square
							teamOne={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/toto.png'} />
								<p>{'TOTO'}</p>
							</div>}
							teamTwo={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/berserk.png'} />
								<p>{'Berserk'}</p>
							</div>}
							scoreFirstTeamOne={1}
							scoreSecondTeamOne={4}
							scoreFirstTeamTwo={1}
							scoreSecondTeamTwo={3}
						/>
					</div>
					<div className='mt-96 pt-16'>
						<Square
							teamOne={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/rin.png'} />
								<p>{'DartRin'}</p>
							</div>}
							teamTwo={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/avatar.png'} />
								<p>{'HAM'}</p>
							</div>}
							scoreFirstTeamOne={0}
							scoreSecondTeamOne={5}
							scoreFirstTeamTwo={0}
							scoreSecondTeamTwo={3}
						/>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-10'>
				<div>
					<h2 className='text-center text-orange-500'>Final</h2>
				</div>
				<div className='flex flex-col pt-20 justify-center'>
					<div className='mt-96 pt-6'>
						<Square
							teamOne={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/berserk.png'} />
								<p>{'Berserk'}</p>
							</div>}
							teamTwo={<div className='flex gap-2 items-center'>
								<PlayersImg avatar={'/img/players/avatar.png'} />
								<p>{'HAM'}</p>
							</div>}
							scoreFirstTeamOne={5}
							scoreSecondTeamOne={2}
							scoreFirstTeamTwo={6}
							scoreSecondTeamTwo={5}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default KingsCupPlayOffs;
