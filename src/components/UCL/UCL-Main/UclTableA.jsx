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
				<TableTeam rank={1.} club={<Barcelona />} mp={4} w={1} d={3} l={0} g={8} gd={'8:4'} pts={6} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><WinButton title={'Barcelona 5:1 Bayern Munich'} /><DrawButton title={'Bayern Munich 2:2 Barcelona'} /><DrawButton title={'Chelsea 0:0 Barcelona'} /><DrawButton title={'Barcelona 1:1 Chelsea'} /></div>} />
				<TableTeam rank={2.} club={<Chelsea />} mp={2} w={1} d={2} l={1} g={9} gd={'9:6'} pts={5} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><WinButton title={'Manchester United 2:6 Chelsea'} /><LoseButton title={'Chelsea 2:3 Manchester United'} /><DrawButton title={'Chelsea 0:0 Barcelona'} /><DrawButton title={'Barcelona 1:1 Chelsea'} /></div>} />
				<TableTeam rank={3.} club={<ManchesterUnited />} mp={2} w={1} d={0} l={1} g={5} gd={'5:8'} pts={3} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><LoseButton title={'Manchester United 2:6 Chelsea'} /><WinButton title={'Chelsea 2:3 Manchester United'} /></div>} />
				<TableTeam rank={4.} club={<BayernMunich />} mp={2} w={0} d={1} l={1} g={3} gd={'3:7'} pts={1} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><LoseButton title={'Barcelona 5:1 Bayern Munich'} /><DrawButton title={'Bayern Munich 2:2 Barcelona'} /></div>} />
			</tbody>
		</table>
	);
}

export default UclTableA;
