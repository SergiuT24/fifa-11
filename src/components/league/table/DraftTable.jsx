import React, { useState, useEffect } from 'react';
import DraftTableComponent from './DraftTableComponent.jsx';
import WinButton from '../outcomes/WinButton.jsx';
import LoseButton from '../outcomes/LoseButton.jsx';
import DrawButton from '../outcomes/DrawButton.jsx';
import NotPlayedButton from '../outcomes/NotPlayedButton.jsx';

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
		team.gd = `${team.g}:${team.gc}`;
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

const DraftTable = ({ initialTeams, additionalTeams, matchResults, seasonTitleOne, seasonTitleTwo, groupStage, draftDescription, first, second, tree, staticPoints }) => {
	const [teams, setTeams] = useState(initialTeams);
	const [totalPointsFirstTable, setTotalPointsFirstTable] = useState(0);
	const [totalPointsSecondTable, setTotalPointsSecondTable] = useState(0);

	const allTeams = [...initialTeams, ...additionalTeams];

	useEffect(() => {
		const updatedTeams = updateTeams(allTeams, matchResults);
		setTeams(updatedTeams);

		const firstTablePoints = updatedTeams
			.filter(team => initialTeams.some(t => t.id === team.id))
			.reduce((sum, team) => sum + team.pts, 0);

		const secondTablePoints = updatedTeams
			.filter(team => additionalTeams.some(t => t.id === team.id))
			.reduce((sum, team) => sum + team.pts, 0);

		setTotalPointsFirstTable(firstTablePoints);
		setTotalPointsSecondTable(secondTablePoints);
	}, [initialTeams, additionalTeams, matchResults]);

	const teamsForFirstTable = teams.filter(team => initialTeams.some(t => t.id === team.id));
	const teamsForSecondTable = teams.filter(team => additionalTeams.some(t => t.id === team.id));

	return (
		<div>
			<div className='flex ml-5 gap-14'>
				<div>
					<div className='my-10'>
						<h3 className='text-xl pb-5'>{groupStage}</h3>
						<h4 className='text-base mb-4'>{draftDescription}</h4>
						<ul>
							<li>{first}</li>
							<li>{second}</li>
							<li>{tree}</li>
						</ul>
					</div>
					<table className='draft-table'>
						<thead style={{ backgroundColor: '#0f2d37' }}>
							<DraftTableComponent rank={"#"} team={seasonTitleOne} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
						</thead>
						<tbody>
							{teamsForFirstTable.map((team, index) => (
								<DraftTableComponent
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
					<p className='text-xl mt-4'>Points: {totalPointsFirstTable}</p>
				</div>
				<div>
					<div className='my-10'>
						<h3 className='text-xl pb-5'>{groupStage}</h3>
						<h4 className='text-base mb-4'>{draftDescription}</h4>
						<ul>
							<li>{first}</li>
							<li>{second}</li>
							<li>{tree}</li>
						</ul>
					</div>
					<table className='draft-table'>
						<thead style={{ backgroundColor: '#0f2d37' }}>
							<DraftTableComponent rank={"#"} team={seasonTitleTwo} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
						</thead>
						<tbody>
							{teamsForSecondTable.map((team, index) => (
								<DraftTableComponent
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
					<p className='text-xl mt-4'>Points: {totalPointsSecondTable}</p>
				</div>
			</div>
		</div>
	);
};

export default DraftTable;
