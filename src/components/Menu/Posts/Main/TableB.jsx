import React from 'react';
import TableTeam from './TableTeam';

const TableB = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TableTeam rank={"#"} team={"Group B"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TableTeam rank={1} team={"Spain"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={0} />
				<TableTeam rank={2} team={"Russia"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={0} />
				<TableTeam rank={3} team={"Italy"} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={0} />
			</tbody>
		</table>
	);
}

export default TableB;