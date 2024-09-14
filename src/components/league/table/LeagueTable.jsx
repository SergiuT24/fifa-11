import React, { useState, useEffect } from 'react';
import LeagueTableComponent from './LeagueTableComponent.jsx';
import WinButton from '../outcomes/WinButton.jsx';
import LoseButton from '../outcomes/LoseButton.jsx';
import DrawButton from '../outcomes/DrawButton.jsx';
import NotPlayedButton from '../outcomes/NotPlayedButton.jsx'

const updateTeams = (teams, matches) => {
	const updatedTeams = teams.map(team => ({
		...team,
		form: [],
		headToHead: {},
	}));

	matches.forEach(({ teamOne, scoreOne, teamTwo, scoreTwo }, matchIndex) => {
		const teamOneIndex = updatedTeams.findIndex(t => t.id === teamOne);
		const teamTwoIndex = updatedTeams.findIndex(t => t.id === teamTwo);

		if (teamOneIndex !== -1 && teamTwoIndex !== -1) {
			// Check if scores are not '?'
			const scoreOneIsNumber = !isNaN(scoreOne);
			const scoreTwoIsNumber = !isNaN(scoreTwo);

			if (scoreOneIsNumber && scoreTwoIsNumber) {
				updatedTeams[teamOneIndex].mp += 1;
				updatedTeams[teamTwoIndex].mp += 1;
				updatedTeams[teamOneIndex].g += scoreOne;
				updatedTeams[teamOneIndex].gc += scoreTwo;
				updatedTeams[teamTwoIndex].g += scoreTwo;
				updatedTeams[teamTwoIndex].gc += scoreOne;

				if (!updatedTeams[teamOneIndex].headToHead[teamTwo]) {
					updatedTeams[teamOneIndex].headToHead[teamTwo] = { g: 0, gc: 0 };
				}
				if (!updatedTeams[teamTwoIndex].headToHead[teamOne]) {
					updatedTeams[teamTwoIndex].headToHead[teamOne] = { g: 0, gc: 0 };
				}
				updatedTeams[teamOneIndex].headToHead[teamTwo].g += scoreOne;
				updatedTeams[teamOneIndex].headToHead[teamTwo].gc += scoreTwo;
				updatedTeams[teamTwoIndex].headToHead[teamOne].g += scoreTwo;
				updatedTeams[teamTwoIndex].headToHead[teamOne].gc += scoreOne;

				if (scoreOne > scoreTwo) {
					updatedTeams[teamOneIndex].w += 1;
					updatedTeams[teamTwoIndex].l += 1;
					updatedTeams[teamOneIndex].pts += 3;
					updatedTeams[teamOneIndex].form.push(
						<WinButton key={`${teamOne}-${teamTwo}-${matchIndex}-win`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
					updatedTeams[teamTwoIndex].form.push(
						<LoseButton key={`${teamOne}-${teamTwo}-${matchIndex}-lose`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
				} else if (scoreTwo > scoreOne) {
					updatedTeams[teamTwoIndex].w += 1;
					updatedTeams[teamOneIndex].l += 1;
					updatedTeams[teamTwoIndex].pts += 3;
					updatedTeams[teamTwoIndex].form.push(
						<WinButton key={`${teamOne}-${teamTwo}-${matchIndex}-win`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
					updatedTeams[teamOneIndex].form.push(
						<LoseButton key={`${teamOne}-${teamTwo}-${matchIndex}-lose`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
				} else {
					updatedTeams[teamOneIndex].d += 1;
					updatedTeams[teamTwoIndex].d += 1;
					updatedTeams[teamOneIndex].pts += 1;
					updatedTeams[teamTwoIndex].pts += 1;
					updatedTeams[teamOneIndex].form.push(
						<DrawButton key={`${teamOne}-${teamTwo}-${matchIndex}-draw`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
					updatedTeams[teamTwoIndex].form.push(
						<DrawButton key={`${teamOne}-${teamTwo}-${matchIndex}-draw`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
				}
			} else {
				// Handle unplayed matches
				updatedTeams[teamOneIndex].form.push(
					<NotPlayedButton key={`${teamOne}-${teamTwo}-${matchIndex}-notPlayed`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
				);
				updatedTeams[teamTwoIndex].form.push(
					<NotPlayedButton key={`${teamOne}-${teamTwo}-${matchIndex}-notPlayed`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
				);
			}
		}
	});

	updatedTeams.forEach(team => {
		const goalDifference = team.g - team.gc;
		team.gd = goalDifference >= 0 ? `+${goalDifference}` : `${goalDifference}`;
	});

	updatedTeams.sort((a, b) => {
		if (b.pts !== a.pts) return b.pts - a.pts;

		const aHeadToHead = a.headToHead[b.id] || { g: 0, gc: 0 };
		const bHeadToHead = b.headToHead[a.id] || { g: 0, gc: 0 };
		const headToHeadGD = (bHeadToHead.g - bHeadToHead.gc) - (aHeadToHead.g - aHeadToHead.gc);
		if (headToHeadGD !== 0) return headToHeadGD;

		const overallGD = (b.g - b.gc) - (a.g - a.gc);
		if (overallGD !== 0) return overallGD;

		if (b.g !== a.g) return b.g - a.g;

		return a.gc - b.gc;
	});
	return updatedTeams;
};

const LeagueTable = ({ initialTeams, matchResults, seasonTitle }) => {
	const [teams, setTeams] = useState(initialTeams);

	useEffect(() => {
		setTeams(updateTeams(initialTeams, matchResults));
	}, [initialTeams, matchResults]);

	return (
		<table className='table'>
			<thead style={{ backgroundColor: '#0f2d37' }}>
				<LeagueTableComponent rank={"#"} team={seasonTitle} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
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
						form={<div className='flex gap-1 justify-start'>{team.form}</div>}
					/>
				))}
			</tbody>
		</table>
	);
};

export default LeagueTable;
