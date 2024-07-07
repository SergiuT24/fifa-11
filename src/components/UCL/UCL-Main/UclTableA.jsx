import React from 'react';
import TableTeam from '../../Posts/Main/MainTables/TableTeam';
import BayernMunich from '../UCL-Teams/BayernMunich';
import ManchesterUnited from '../UCL-Teams/ManchesterUnited';
import Chelsea from '../UCL-Teams/Chelsea';
import NotPlayedButton from '../../Posts/Main/TableFormButton.jsx/NotPlayedButton';
import WinButton from '../../Posts/Main/TableFormButton.jsx/WinButton';
import DrawButton from '../../Posts/Main/TableFormButton.jsx/DrawButton';
import LoseButton from '../../Posts/Main/TableFormButton.jsx/LoseButton';
import Barcelona from '../UCL-Teams/Barcelona';

const UclTableA = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TableTeam rank={"#"} team={"Group A"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TableTeam rank={1.} club={<Barcelona />} mp={6} w={3} d={3} l={0} g={8} gd={'8:4'} pts={12} form={<div className='flex gap-1 justify-center'><WinButton title={'Barcelona 3:0 Manchester United'} /><WinButton title={'Manchester United 0:3 Barcelona'} /><WinButton title={'Barcelona 5:1 Bayern Munich'} /><DrawButton title={'Bayern Munich 2:2 Barcelona'} /><DrawButton title={'Chelsea 0:0 Barcelona'} /><DrawButton title={'Barcelona 1:1 Chelsea'} /></div>} />
				<TableTeam rank={2.} club={<Chelsea />} mp={6} w={3} d={2} l={1} g={20} gd={'20:8'} pts={11} form={<div className='flex gap-1 justify-center'><WinButton title={'Bayern Munich 2:6 Chelsea'} /><WinButton title={'Chelsea 5:0 Bayern Munich'} /><WinButton title={'Manchester United 2:6 Chelsea'} /><LoseButton title={'Chelsea 2:3 Manchester United'} /><DrawButton title={'Chelsea 0:0 Barcelona'} /><DrawButton title={'Barcelona 1:1 Chelsea'} /></div>} />
				<TableTeam rank={3.} club={<BayernMunich />} mp={6} w={2} d={1} l={3} g={5} gd={'5:18'} pts={7} form={<div className='flex gap-1 justify-center'><WinButton title={'Manchester United 0:3 Bayern Munich'} /><WinButton title={'Bayern Munich 3:0 Manchester United'} /><LoseButton title={'Bayern Munich 2:6 Chelsea'} /><LoseButton title={'Chelsea 5:0 Bayern Munich'} /><LoseButton title={'Barcelona 5:1 Bayern Munich'} /><DrawButton title={'Bayern Munich 2:2 Barcelona'} /></div>} />
				<TableTeam rank={4.} club={<ManchesterUnited />} mp={6} w={1} d={0} l={5} g={5} gd={'5:8'} pts={3} form={<div className='flex gap-1 justify-center'><LoseButton title={'Manchester United 0:3 Bayern Munich'} /><LoseButton title={'Bayern Munich 3:0 Manchester United'} /><LoseButton title={'Barcelona 3:0 Manchester United'} /><LoseButton title={'Manchester United 0:3 Barcelona'} /><LoseButton title={'Manchester United 2:6 Chelsea'} /><WinButton title={'Chelsea 2:3 Manchester United'} /></div>} />
			</tbody>
		</table>
	);
}

export default UclTableA;
