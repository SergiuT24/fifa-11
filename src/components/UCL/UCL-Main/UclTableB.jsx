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
				<TableTeam rank={1.} club={<AcMilan />} mp={6} w={4} d={0} l={2} g={13} gd={'13:3'} pts={12} form={<div className='flex gap-1 justify-center'><WinButton title={'Lyon 0:3 AC Milan'} /><LoseButton title={'AC Milan 0:2 Lyon'} /><WinButton title={'Manchester City 0:3 AC Milan'} /><LoseButton title={'AC Milan 0:1 Manchester City'} /><WinButton title={'AC Milan 3:0 Arsenal'} /><WinButton title={'Arsenal 0:4 AC Milan'} /></div>} />
				<TableTeam rank={2.} club={<Lyon />} mp={4} w={3} d={0} l={1} g={6} gd={'6:3'} pts={9} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><LoseButton title={'Lyon 0:3 AC Milan'} /><WinButton title={'AC Milan 0:2 Lyon'} /><WinButton title={'Lyon 1:0 Arsenal'} /><WinButton title={'Arsenal 2:3 Lyon'} /></div>} />
				<TableTeam rank={3.} club={<ManchesterCity />} mp={4} w={3} d={0} l={1} g={5} gd={'5:4'} pts={9} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><WinButton title={'Arsenal 1:2 Manchester City'} /><WinButton title={'Manchester City 2:0 Arsenal'} /><LoseButton title={'Manchester City 0:3 AC Milan'} /><WinButton title={'AC Milan 0:1 Manchester city'} /></div>} />
				<TableTeam rank={4.} club={<Arsenal />} mp={6} w={0} d={0} l={6} g={3} gd={'3:15'} pts={0} form={<div className='flex gap-1 justify-center'><LoseButton title={'Lyon 1:0 Arsenal'} /><LoseButton title={'Arsenal 2:3 Lyon'} /><LoseButton title={'Arsenal 1:2 Manchester City'} /><LoseButton title={'Manchester City 2:0 Arsenal'} /><LoseButton title={'AC Milan 3:0 Arsenal'} /><LoseButton title={'Arsenal 0:4 AC Milan'} /></div>} />
			</tbody>
		</table>
	);
}

export default UclTableB;
