import React from 'react';
import TableTeam from '../../Posts/Main/MainTables/TableTeam';
import NotPlayedButton from '../../Posts/Main/TableFormButton.jsx/NotPlayedButton';
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
				<TableTeam rank={1.} club={<AcMilan />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
				<TableTeam rank={2.} club={<Arsenal />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
				<TableTeam rank={3.} club={<ManchesterCity />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
				<TableTeam rank={4.} club={<Lyon />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
			</tbody>
		</table>
	);
}

export default UclTableB;
