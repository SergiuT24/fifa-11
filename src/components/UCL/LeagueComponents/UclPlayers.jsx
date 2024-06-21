import React from 'react';
import UclPlayer from './UclPlayer';

const UclPlayers = () => {
	return (
		<div className='blue-color p-5 rounded-3xl flex flex-wrap justify-around gap-4 my-8 border-t pt-5'>
			<div className='flex items-center'>
				<h3 className='text-xl uppercase'>Players for random:</h3>
			</div>
			<div className=' grid grid-cols-4 gap-x-36 gap-y-3'>
				<UclPlayer src={'img/players/Anna.png'} player={'Anna'} />
				<UclPlayer src={'img/players/France.png'} player={'14 France'} />
				<UclPlayer src={'img/players/Jsnick.png'} player={'Jsnick'} />
				<UclPlayer src={'img/players/Petr.png'} player={'Petr Pirat'} />
				<UclPlayer src={'img/players/Raven.png'} player={'NSKRaven'} />
				<UclPlayer src={'img/players/Rin.png'} player={'DartRin'} />
				<UclPlayer src={'img/players/Berserk.png'} player={'Berserk'} />
				<UclPlayer src={'img/players/Wenger.png'} player={'Wenger'} />
				<UclPlayer src={'img/players/Sergeyface.png'} player={'SergeyFace'} />
				<UclPlayer src={'img/players/Malemiria.png'} player={'Malemiria'} />
				<UclPlayer src={'img/players/avatar.png'} player={'Sania'} />
				<UclPlayer src={'img/players/avatar.png'} player={'Radenek'} />
				<UclPlayer src={'img/players/avatar.png'} player={'Mark'} />
				<UclPlayer src={'img/players/pasha.png'} player={'Pasha'} />
				<UclPlayer src={'img/players/mcrurus.png'} player={'Mcrurus'} />
				<UclPlayer src={'img/players/radik.png'} player={'Radik'} />
			</div>
		</div>
	);
}

export default UclPlayers;
