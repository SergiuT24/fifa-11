import React from 'react';
import TopAssistsLine from '../../Posts/Post/TopAssists/TopAssistsLine';

const UclTopAssistsTable = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TopAssistsLine rank={'#'} player={"Player"} team={"Team"} a={"A"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TopAssistsLine rank={'1'} player={"mcrurus"} team={"Chelsea"} a={"17"} />
				<TopAssistsLine rank={'2'} player={"Anna"} team={"AC Milan"} a={"10"} />
				<TopAssistsLine rank={'3'} player={"D.Drogba"} team={"Bayern Munich"} a={"8"} />
				<TopAssistsLine rank={'3'} player={"Malemiria"} team={"Barcelona"} a={"8"} />
				<TopAssistsLine rank={'3'} player={"Berserk"} team={"Chelsea"} a={"8"} />
				<TopAssistsLine rank={'4'} player={"Sania"} team={"Barcelona"} a={"7"} />
				<TopAssistsLine rank={'4'} player={"mysterio"} team={"Bayern Munich"} a={"7"} />
				<TopAssistsLine rank={'5'} player={"Elite"} team={"Lyon"} a={"6"} />
				<TopAssistsLine rank={'6'} player={"Matuu"} team={"Lyon"} a={"5"} />
				<TopAssistsLine rank={'7'} player={"Mark"} team={"Machester United"} a={"3"} />
				<TopAssistsLine rank={'7'} player={"NSKRaven"} team={"AC Milan"} a={"3"} />
				<TopAssistsLine rank={'7'} player={"DartRin"} team={"Manchester City"} a={"3"} />
				<TopAssistsLine rank={'8'} player={"A.Wenger"} team={"Arsenal"} a={"3"} />
				<TopAssistsLine rank={'9'} player={"Radenek"} team={"Machester United"} a={"2"} />
				<TopAssistsLine rank={'9'} player={"Jsnick"} team={"Manchester City"} a={"2"} />
				<TopAssistsLine rank={'9'} player={"TOTO"} team={"Arsenal"} a={"2"} />

				{/* <TopAssistsLine rank={'8'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'9'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'10'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'11'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'12'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'13'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'14'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'15'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'16'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'17'} player={"Player"} team={"Team"} a={"0"} /> */}
			</tbody>
		</table>
	);
}

export default UclTopAssistsTable;
