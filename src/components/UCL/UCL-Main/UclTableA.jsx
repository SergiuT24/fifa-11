import React from 'react';
import TableTeam from '../../Posts/Main/MainTables/TableTeam';
import BayernMunich from '../UCL-Teams/BayernMunich';
import ManchesterUnited from '../UCL-Teams/ManchesterUnited';
import Chelsea from '../UCL-Teams/Chelsea';
import NotPlayedButton from '../../Posts/Main/TableFormButton.jsx/NotPlayedButton';
import Barcelona from '../UCL-Teams/Barcelona';

const UclTableA = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TableTeam rank={"#"} team={"Group A"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TableTeam rank={1.} club={<BayernMunich />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
				<TableTeam rank={2.} club={<ManchesterUnited />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
				<TableTeam rank={3.} club={<Chelsea />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
				<TableTeam rank={4.} club={<Barcelona />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /><NotPlayedButton /></div>} />
			</tbody>
		</table>
	);
}

export default UclTableA;
