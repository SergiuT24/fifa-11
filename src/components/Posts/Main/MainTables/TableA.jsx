import React from 'react';
import TableTeam from './TableTeam';
import NotPlayedButton from '../TableFormButton.jsx/NotPlayedButton';
import DrawButton from '../TableFormButton.jsx/DrawButton';

const TableA = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TableTeam rank={"#"} team={"Group A"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TableTeam rank={1.} img={<img className=' w-5 h-5' loading="lazy" alt="Brazil" src="https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png" />} team={"Brazil"} mp={2} w={0} d={2} l={0} g={4} gd={'4:4'} pts={2} form={<div className='flex gap-1 justify-center'><DrawButton title={"Portugal 4:4 Brazil"} /><DrawButton title={"Brazil 0:0 Portugal"} /></div>} />
				<TableTeam rank={2.} img={<img className=' w-5 h-5' loading="lazy" alt="Portugal" src="https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png" />} team={"Portugal"} mp={2} w={0} d={2} l={0} g={4} gd={'4:4'} pts={2} form={<div className='flex gap-1 justify-center'><DrawButton title={"Portugal 4:4 Brazil"} /><DrawButton title={"Brazil 0:0 Portugal"} /></div>} />
				<TableTeam rank={3.} img={<img className=' w-5 h-5' loading="lazy" alt="Germany" src="https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png" />} team={"Germany"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<NotPlayedButton />} />
			</tbody>
		</table>
	);
}

export default TableA;
