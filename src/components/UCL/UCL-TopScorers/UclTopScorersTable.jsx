import React from 'react';
import TopScorersLine from '../../Posts/Post/TopScorers/TopScorersLine'

const UclTopScorersTable = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TopScorersLine rank={'#'} player={"Player"} team={"Team"} g={"G"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TopScorersLine rank={'1'} player={"Berserk"} team={"Chelsea"} g={"17"} />
				<TopScorersLine rank={'2'} player={"NSKRaven"} team={"AC Milan"} g={"10"} />
				<TopScorersLine rank={'3'} player={"D.Drogba"} team={"Bayern Munich"} g={"9"} />
				<TopScorersLine rank={'3'} player={"mysterio"} team={"Bayern Munich"} g={"9"} />
				<TopScorersLine rank={'4'} player={"Sania"} team={"Barcelona"} g={"8"} />
				<TopScorersLine rank={'4'} player={"mcrurus"} team={"Chelsea"} g={"8"} />
				<TopScorersLine rank={'5'} player={"Malemiria"} team={"Barcelona"} g={"7"} />
				<TopScorersLine rank={'6'} player={"Matuu"} team={"Lyon"} g={"6"} />
				<TopScorersLine rank={'7'} player={"Elite"} team={"Lyon"} g={"5"} />
				<TopScorersLine rank={'8'} player={"Anna"} team={"AC Milan"} g={"3"} />
				<TopScorersLine rank={'8'} player={"Radenek"} team={"Machester United"} g={"3"} />
				<TopScorersLine rank={'8'} player={"TOTO"} team={"Arsenal"} g={"3"} />
				<TopScorersLine rank={'8'} player={"Jsnick"} team={"Manchester City"} g={"3"} />
				<TopScorersLine rank={'9'} player={"Mark"} team={"Machester United"} g={"2"} />
				<TopScorersLine rank={'9'} player={"DartRin"} team={"Manchester City"} g={"2"} />
				<TopScorersLine rank={'9'} player={"A.Wenger"} team={"Arsenal"} g={"2"} />
			</tbody>
		</table>
	);
}

export default UclTopScorersTable;
