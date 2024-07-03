import React from 'react';
import TopScorersLine from '../../Posts/Post/TopScorers/TopScorersLine'

const UclTopScorersTable = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TopScorersLine rank={'#'} player={"Player"} team={"Team"} g={"G"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TopScorersLine rank={'1'} player={"NSKRaven"} team={"AC Milan"} g={"4"} />
				<TopScorersLine rank={'1'} player={"Malemiria"} team={"Barcelona"} g={"4"} />
				<TopScorersLine rank={'1'} player={"Sania"} team={"Barcelona"} g={"4"} />
				<TopScorersLine rank={'2'} player={"Anna"} team={"AC Milan"} g={"3"} />
				<TopScorersLine rank={'3'} player={"mysterio"} team={"Bayern Munich"} g={"2"} />
				<TopScorersLine rank={'4'} player={"D.Drogba"} team={"Bayern Munich"} g={"1"} />
				<TopScorersLine rank={'5'} player={"mcrurus"} team={"Chelsea"} g={"1"} />
				{/* <TopScorersLine rank={'8'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'9'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'10'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'11'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'12'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'13'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'14'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'15'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'16'} player={"Player"} team={"Team"} g={"0"} /> */}
			</tbody>
		</table>
	);
}

export default UclTopScorersTable;
