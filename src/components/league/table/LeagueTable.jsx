import React from 'react';
import LeagueTableComponent from './LeagueTableComponent';
import NotPlayedButton from '../outcomes/NotPlayedButton';
import AcMilan from '../teams/AcMilan';
import BayernMunich from '../../../../components/league/teams/BayernMunich';
import Arsenal from '../../../../components/league/teams/Arsenal';
import Chelsea from '../../../../components/league/teams/Chelsea';
import AcMilan from '../../../../components/league/teams/AcMilan';
import Liverpool from '../../../../components/league/teams/Liverpool';

import Arsenal from '../teams/Arsenal';
import ManchesterUnited from '../teams/ManchesterUnited';
import Liverpool from '../teams/Liverpool';
import Lyon from '../teams/Lyon';
import Chelsea from '../teams/Chelsea';

const LeagueTable = () => {
	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }} >
				<LeagueTableComponent rank={"#"} team={"Legend League Season 1"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				<LeagueTableComponent rank={1.} img={<AcMilan />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={2.} img={<BayernMunich />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={3.} img={<Arsenal />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={4.} img={<ManchesterUnited />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={5.} img={<Lyon />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={6.} img={<Chelsea />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
			</tbody>
		</table>
	);
}

export default LeagueTable;
