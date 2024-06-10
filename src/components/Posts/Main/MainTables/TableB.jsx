import React from 'react';
import TableTeam from './TableTeam';
import NotPlayedButton from '../TableFormButton.jsx/NotPlayedButton';
import WinButton from '../TableFormButton.jsx/WinButton';
import LoseButton from '../TableFormButton.jsx/LoseButton';

const TableB = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TableTeam rank={"#"} team={"Group B"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TableTeam rank={1.} img={<img className=' w-5 h-5' loading="lazy" alt="Spain" src='https://static.flashscore.com/res/image/data/6eDtOume-0E8Iihe1.png' />} team={"Spain"} mp={4} w={3} d={0} l={1} g={11} gd={"11:2"} pts={9} form={<div className='flex gap-1 justify-center'><WinButton title={"Spain 2:0 England"} /><WinButton title={"England 0:4 Spain"} /><LoseButton title={'France 1:0 Spain'} /><WinButton title={"Spain 4:1 France"} /></div>} />
				<TableTeam rank={2.} img={<img className=' w-5 h-5' loading="lazy" alt="France" src='https://static.flashscore.com/res/image/data/04V6zbA6-U3HPIwDq.png' />} team={"France"} mp={4} w={3} d={0} l={1} g={12} gd={"12:7"} pts={9} form={<div className='flex gap-1 justify-center'><WinButton title={"France 5:2 England"} /><WinButton title={"England 1:5 France"} /><WinButton title={'France 1:0 Spain'} /><LoseButton title={"Spain 4:1 France"} /></div>} />
				<TableTeam rank={3.} img={<img className=' w-5 h-5' loading="lazy" alt="England" src='https://static.flashscore.com/res/image/data/lfoVvLPq-Iyld3bDd.png' />} team={"England"} mp={4} w={0} d={0} l={4} g={3} gd={"3:16"} pts={0} form={<div className='flex gap-1 justify-center'><LoseButton title={"Spain 2:0 England"} /><LoseButton title={"England 0:4 Spain"} /><LoseButton title={'France 5:2 England'} /><LoseButton title={"England 1:5 France"} /></div>} />
			</tbody>
		</table>
	);
}

export default TableB;