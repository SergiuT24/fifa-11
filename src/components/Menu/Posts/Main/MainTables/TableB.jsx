import React from 'react';
import TableTeam from './TableTeam';
import NotPlayedButton from '../TableFormButton.jsx/NotPlayedButton';

const TableB = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TableTeam rank={"#"} team={"Group B"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TableTeam rank={1.} img={<img className=' w-5 h-5' loading="lazy" alt="Spain" src="https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png" />} team={"Spain"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<NotPlayedButton />} />
				<TableTeam rank={2.} img={<img className=' w-5 h-5' loading="lazy" alt="Russia" src="https://static.flashscore.com/res/image/data/tS8Ur8S0-dtrVaP64.png" />} team={"Russia"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<NotPlayedButton />} />
				<TableTeam rank={3.} img={<img className=' w-5 h-5' loading="lazy" alt="Italy" src="https://static.flashscore.com/res/image/data/fyLyobWH-KfXjzrxU.png" />} team={"Italy"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<NotPlayedButton />} />
			</tbody>
		</table>
	);
}

export default TableB;