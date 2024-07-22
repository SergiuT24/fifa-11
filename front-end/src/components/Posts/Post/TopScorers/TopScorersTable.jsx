import React from 'react';
import TopScorersLine from './TopScorersLine';

const TopScorersTable = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TopScorersLine rank={'#'} player={"Player"} team={"Team"} g={"G"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TopScorersLine rank={'1'} player={"DartRin"} team={"Spain"} g={"13"} />
				<TopScorersLine rank={'2'} player={"Anna"} team={"Spain"} g={"11"} />
				<TopScorersLine rank={'3'} player={"Radenek"} team={"Germany"} g={"9"} />
				<TopScorersLine rank={'4'} player={"Malemiria"} team={"Portugal"} g={"8"} />
				<TopScorersLine rank={'4'} player={"NSKRaven"} team={"France"} g={"8"} />
				<TopScorersLine rank={'5'} player={"Perfect"} team={"Brazil"} g={"6"} />
				<TopScorersLine rank={'5'} player={"Jsnick"} team={"Brazil"} g={"6"} />
				<TopScorersLine rank={'6'} player={"Berserk"} team={"France"} g={"5"} />
				<TopScorersLine rank={'6'} player={"Mark"} team={"Germany"} g={"5"} />
				<TopScorersLine rank={'7'} player={"Sania"} team={"Portugal"} g={"4"} />
				<TopScorersLine rank={'8'} player={"Box"} team={"England"} g={"2"} />
				<TopScorersLine rank={'9'} player={"14_France"} team={"England"} g={"1"} />
				<TopScorersLine rank={'9'} player={"SergeyFace"} team={"England"} g={"1"} />
				<TopScorersLine rank={'9'} player={"Wenger"} team={"England"} g={"1"} />
				{/* <TopScorersLine rank={'9'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'10'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'11'} player={"Player"} team={"Team"} g={"0"} />
				<TopScorersLine rank={'12'} player={"Player"} team={"Team"} g={"0"} /> */}
			</tbody>
		</table>
	);
}

export default TopScorersTable;
