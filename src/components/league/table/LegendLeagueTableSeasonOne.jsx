import React, { useState, useEffect } from 'react';
import LeagueTableComponent from './LeagueTableComponent';
import { initialTeams, matchResults } from '../../../data/legendLeagueInitialData.jsx';
import WinButton from '../outcomes/WinButton';
import LoseButton from '../outcomes/LoseButton';
import DrawButton from '../outcomes/DrawButton';

const updateTeams = (teams, matches) => {
	const updatedTeams = [...teams];

	matches.forEach(({ teamOne, scoreOne, teamTwo, scoreTwo }) => {
		const teamOneIndex = updatedTeams.findIndex(t => t.id === teamOne);
		const teamTwoIndex = updatedTeams.findIndex(t => t.id === teamTwo);

		if (teamOneIndex !== -1 && teamTwoIndex !== -1) {
			// Обновляем статистику матчей
			updatedTeams[teamOneIndex].mp += 1;
			updatedTeams[teamTwoIndex].mp += 1;
			updatedTeams[teamOneIndex].g += scoreOne;
			updatedTeams[teamTwoIndex].g += scoreTwo;
			updatedTeams[teamOneIndex].gd += scoreOne - scoreTwo;
			updatedTeams[teamTwoIndex].gd += scoreTwo - scoreOne;

			if (scoreOne > scoreTwo) {
				updatedTeams[teamOneIndex].w += 1;
				updatedTeams[teamTwoIndex].l += 1;
				updatedTeams[teamOneIndex].pts += 3;
				updatedTeams[teamTwoIndex].form.push(<LoseButton title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />);
				updatedTeams[teamOneIndex].form.push(<WinButton title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />);
			} else if (scoreTwo > scoreOne) {
				updatedTeams[teamTwoIndex].w += 1;
				updatedTeams[teamOneIndex].l += 1;
				updatedTeams[teamTwoIndex].pts += 3;
				updatedTeams[teamOneIndex].form.push(<LoseButton title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />);
				updatedTeams[teamTwoIndex].form.push(<WinButton title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />);
			} else {
				updatedTeams[teamOneIndex].d += 1;
				updatedTeams[teamTwoIndex].d += 1;
				updatedTeams[teamOneIndex].pts += 1;
				updatedTeams[teamTwoIndex].pts += 1;
				updatedTeams[teamOneIndex].form.push(<DrawButton title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />);
				updatedTeams[teamTwoIndex].form.push(<DrawButton title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />);
			}
		}
	});

	// Сортируем команды по очкам и разнице голов
	updatedTeams.sort((a, b) => b.pts - a.pts || b.gd - a.gd);

	return updatedTeams;
};

const LegendLeagueTableSeasonOne = () => {
	const [teams, setTeams] = useState(initialTeams);
	const [matches, setMatches] = useState(matchResults);

	useEffect(() => {
		setTeams(updateTeams(initialTeams, matchResults));
	}, [matches]);

	return (
		<table>
			<thead style={{ backgroundColor: '#0f2d37' }}>
				<LeagueTableComponent rank={"#"} team={"Legend League Season 1"} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
			</thead>
			<tbody style={{ backgroundColor: '#010a0f' }}>
				{teams.map((team, index) => (
					<LeagueTableComponent
						key={team.id}
						rank={index + 1}
						team={team.name}
						mp={team.mp}
						w={team.w}
						d={team.d}
						l={team.l}
						g={team.g}
						gd={team.gd}
						pts={team.pts}
						form={<div className='flex gap-1 justify-center'>{team.form}</div>}
					/>
				))}
			</tbody>
		</table>
	);
}

export default LegendLeagueTableSeasonOne;
