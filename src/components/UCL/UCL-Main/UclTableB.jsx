import React from 'react';
import TableTeam from '../../Posts/Main/MainTables/TableTeam';
import NotPlayedButton from '../../Posts/Main/TableFormButton.jsx/NotPlayedButton';
import WinButton from '../../Posts/Main/TableFormButton.jsx/WinButton';
import DrawButton from '../../Posts/Main/TableFormButton.jsx/DrawButton';
import LoseButton from '../../Posts/Main/TableFormButton.jsx/LoseButton';
import AcMilan from '../UCL-Teams/AcMilan';
import Arsenal from '../UCL-Teams/Arsenal';
import ManchesterCity from '../UCL-Teams/ManchesterCity';
import Lyon from '../UCL-Teams/Lyon';


const UclTableB = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TableTeam rank={"#"} team={"Group B"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TableTeam rank={1.} club={<AcMilan />} mp={4} w={3} d={0} l={1} g={10} gd={'10:1'} pts={9} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><WinButton title={'Manchester City 0:3 AC Milan'} /><LoseButton title={'AC Milan 0:1 Manchester City'} /><WinButton title={'AC Milan 3:0 Arsenal'} /><WinButton title={'Arsenal 0:4 AC Milan'} /></div>} />
				<TableTeam rank={2.} club={<ManchesterCity />} mp={2} w={1} d={0} l={1} g={1} gd={'1:3'} pts={3} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><LoseButton title={'Manchester City 0:3 AC Milan'} /><WinButton title={'AC Milan 0:1 Manchester city'} /></div>} />
				<TableTeam rank={3.} club={<Lyon />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
				<TableTeam rank={4.} club={<Arsenal />} mp={2} w={0} d={0} l={2} g={0} gd={'0:7'} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><LoseButton title={'AC Milan 3:0 Arsenal'} /><LoseButton title={'Arsenal 0:4 AC Milan'} /></div>} />
			</tbody>
		</table>
	);
}

export default UclTableB;
