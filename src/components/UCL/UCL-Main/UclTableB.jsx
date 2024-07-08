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
				<TableTeam rank={1.} club={<AcMilan />} mp={6} w={5} d={0} l={1} g={13} gd={'13:3'} pts={15} form={<div className='flex gap-1 justify-center'><WinButton title={'Lyon 0:3 AC Milan'} /><LoseButton title={'AC Milan 0:2 Lyon'} /><WinButton title={'Manchester City 0:3 AC Milan'} /><WinButton title={'Technical Win AC Milan 3:0 Manchester City'} /><WinButton title={'AC Milan 3:0 Arsenal'} /><WinButton title={'Arsenal 0:4 AC Milan'} /></div>} />
				<TableTeam rank={2.} club={<Lyon />} mp={6} w={5} d={0} l={1} g={6} gd={'6:3'} pts={15} form={<div className='flex gap-1 justify-center'><WinButton title={'Technical Win Lyon 3:0 Manchester City'} /><WinButton title={'Technical Win Manchester City 0:3 Lyon'} /><LoseButton title={'Lyon 0:3 AC Milan'} /><WinButton title={'AC Milan 0:2 Lyon'} /><WinButton title={'Lyon 1:0 Arsenal'} /><WinButton title={'Arsenal 2:3 Lyon'} /></div>} />
				<TableTeam rank={3.} club={<Arsenal />} mp={6} w={2} d={0} l={4} g={3} gd={'3:15'} pts={6} form={<div className='flex gap-1 justify-center'><LoseButton title={'Lyon 1:0 Arsenal'} /><LoseButton title={'Arsenal 2:3 Lyon'} /><WinButton title={'Technical Win Arsenal 3:0 Manchester City'} /><WinButton title={'Technical Win Manchester City 0:3 Arsenal'} /><LoseButton title={'AC Milan 3:0 Arsenal'} /><LoseButton title={'Arsenal 0:4 AC Milan'} /></div>} />
				<TableTeam rank={4.} club={<ManchesterCity />} mp={6} w={0} d={0} l={6} g={5} gd={'5:4'} pts={0} form={<div className='flex gap-1 justify-center'><LoseButton title={'Technical Loss'} /><LoseButton title={'Technical Loss'} /><LoseButton title={'Technical Loss'} /><LoseButton title={'Technical Loss'} /><LoseButton title={'Manchester City 0:3 AC Milan'} /><LoseButton title={'Technical Loss'} /></div>} />
			</tbody>
		</table>
	);
}

export default UclTableB;
