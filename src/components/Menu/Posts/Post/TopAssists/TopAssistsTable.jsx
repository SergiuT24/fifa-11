import React from 'react';
import TopAssistsLine from './TopAssistsLine';

const TopAssistsTable = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<TopAssistsLine rank={'#'} player={"Player"} team={"Team"} a={"A"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<TopAssistsLine rank={'1'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'2'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'3'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'4'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'5'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'6'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'7'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'8'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'9'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'10'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'11'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'12'} player={"Player"} team={"Team"} a={"0"} />
				<TopAssistsLine rank={'13'} player={"Player"} team={"Team"} a={"0"} />
			</tbody>
		</table>
	);
}

export default TopAssistsTable;
