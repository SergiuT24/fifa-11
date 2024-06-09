import React from 'react';
import TableTeam from './TableTeam';
import NotPlayedButton from '../TableFormButton.jsx/NotPlayedButton';

const TableA = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TableTeam rank={"#"} team={"Group A"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TableTeam rank={1.} img={<img className=' w-5 h-5' loading="lazy" alt="Brazil" src="https://static.flashscore.com/res/image/data/S4Kz1kjC-88LAtdNt.png" />} team={"Brazil"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<NotPlayedButton />} />
				<TableTeam rank={2.} img={<img className=' w-5 h-5' loading="lazy" alt="Germany" src="https://static.flashscore.com/res/image/data/0SofTgVH-fB4vYUZp.png" />} team={"Germany"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<NotPlayedButton />} />
				<TableTeam rank={3.} img={<img className=' w-5 h-5' loading="lazy" alt="Portugal" src="https://static.flashscore.com/res/image/data/Grhsr8gT-vZG58BBc.png" />} team={"Portugal"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<NotPlayedButton />} />
			</tbody>
		</table>
	);
}

export default TableA;
