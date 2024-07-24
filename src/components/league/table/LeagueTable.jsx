import React from 'react';
import LeagueTableComponent from './LeagueTableComponent';
import DrawButton from '../outcomes/DrawButton';
import LoseButton from '../outcomes/LoseButton';
import NotPlayedButton from '../outcomes/NotPlayedButton';
import WinButton from '../outcomes/WinButton';
import AcMilan from '../teams/AcMilan';
import RealMadrid from '../teams/RealMadrid';
import Inter from '../teams/Inter';
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
				<LeagueTableComponent rank={2.} img={<RealMadrid />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={3.} img={<Inter />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={4.} img={<Liverpool />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={5.} img={<Lyon />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
				<LeagueTableComponent rank={6.} img={<Chelsea />} mp={0} w={0} d={0} l={0} g={0} gd={0} pts={0} form={<div className='flex gap-1 justify-center'><NotPlayedButton /></div>} />
			</tbody>
		</table>
	);
}

export default LeagueTable;
