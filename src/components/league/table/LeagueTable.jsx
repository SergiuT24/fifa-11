import React from 'react';
import LeagueTableComponent from './LeagueTableComponent';
import DrawButton from '../outcomes/DrawButton';
import LoseButton from '../outcomes/LoseButton';
import NotPlayedButton from '../outcomes/NotPlayedButton';
import WinButton from '../outcomes/WinButton';

const LeagueTable = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<LeagueTableComponent rank={"#"} team={"Group A"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<LeagueTableComponent rank={1.} img={<img className=' w-5 h-5' loading="lazy" alt="Portugal" src="https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png" />} team={"Portugal"} mp={4} w={1} d={2} l={1} g={8} gd={'8:8'} pts={5} form={<div className='flex gap-1 justify-center'><DrawButton title={"Portugal 4:4 Brazil"} /><DrawButton title={"Brazil 0:0 Portugal"} /><WinButton title={"Portugal 3:1 Germany"} /><LoseButton title={'Germany 3:1 Portugal'} /></div>} />
				<LeagueTableComponent rank={2.} img={<img className=' w-5 h-5' loading="lazy" alt="Germany" src="https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png" />} team={"Germany"} mp={4} w={1} d={2} l={1} g={7} gd={'7:7'} pts={5} form={<div className='flex gap-1 justify-center'><DrawButton title={"Brazil 1:1 Germany"} /><DrawButton title={"Germany 2:2 Brazil"} /><LoseButton title={'Portugal 3:1 Germany'} /><WinButton title={"Germany 1:3 Portugal"} /></div>} />
				<LeagueTableComponent rank={3.} img={<img className=' w-5 h-5' loading="lazy" alt="Brazil" src="https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png" />} team={"Brazil"} mp={4} w={0} d={4} l={0} g={7} gd={'7:7'} pts={4} form={<div className='flex gap-1 justify-center'><DrawButton title={"Portugal 4:4 Brazil"} /><DrawButton title={"Brazil 0:0 Portugal"} /><DrawButton title={"Brazil 1:1 Germany"} /><DrawButton title={"Germany 2:2 Brazil"} /></div>} />
			</tbody>
		</table>
	);
}

export default LeagueTable;
