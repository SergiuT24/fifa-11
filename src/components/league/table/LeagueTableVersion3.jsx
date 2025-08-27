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
		mp: 0,
		w: 0,
		d: 0,
		l: 0,
		g: 0,
		gc: 0,
		pts: 0,
	}));

	matches.forEach(({ teamOne, scoreOne, teamTwo, scoreTwo }, matchIndex) => {
		const teamOneIndex = updatedTeams.findIndex(t => t.id === teamOne);
		const teamTwoIndex = updatedTeams.findIndex(t => t.id === teamTwo);

		if (teamOneIndex !== -1 && teamTwoIndex !== -1) {
			const scoreOneIsNumber = !isNaN(scoreOne);
			const scoreTwoIsNumber = !isNaN(scoreTwo);

			if (scoreOneIsNumber && scoreTwoIsNumber) {
				const t1 = updatedTeams[teamOneIndex];
				const t2 = updatedTeams[teamTwoIndex];

				t1.mp += 1;
				t2.mp += 1;
				t1.g += scoreOne;
				t1.gc += scoreTwo;
				t2.g += scoreTwo;
				t2.gc += scoreOne;

				// Initialize head-to-head objects
				if (!t1.headToHead[teamTwo]) t1.headToHead[teamTwo] = { g: 0, gc: 0, pts: 0 };
				if (!t2.headToHead[teamOne]) t2.headToHead[teamOne] = { g: 0, gc: 0, pts: 0 };

				t1.headToHead[teamTwo].g += scoreOne;
				t1.headToHead[teamTwo].gc += scoreTwo;
				t2.headToHead[teamOne].g += scoreTwo;
				t2.headToHead[teamOne].gc += scoreOne;

				if (scoreOne > scoreTwo) {
					t1.w += 1;
					t2.l += 1;
					t1.pts += 3;
					t1.headToHead[teamTwo].pts += 3;

					t1.form.push(
						<WinButton key={`${teamOne}-${teamTwo}-${matchIndex}-win`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
					t2.form.push(
						<LoseButton key={`${teamOne}-${teamTwo}-${matchIndex}-lose`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
				} else if (scoreTwo > scoreOne) {
					t2.w += 1;
					t1.l += 1;
					t2.pts += 3;
					t2.headToHead[teamOne].pts += 3;

					t2.form.push(
						<WinButton key={`${teamOne}-${teamTwo}-${matchIndex}-win`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
					t1.form.push(
						<LoseButton key={`${teamOne}-${teamTwo}-${matchIndex}-lose`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
				} else {
					t1.d += 1;
					t2.d += 1;
					t1.pts += 1;
					t2.pts += 1;
					t1.headToHead[teamTwo].pts += 1;
					t2.headToHead[teamOne].pts += 1;

					t1.form.push(
						<DrawButton key={`${teamOne}-${teamTwo}-${matchIndex}-draw`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
					t2.form.push(
						<DrawButton key={`${teamOne}-${teamTwo}-${matchIndex}-draw`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
					);
				}
			} else {
				// Not played
				updatedTeams[teamOneIndex].form.push(
					<NotPlayedButton key={`${teamOne}-${teamTwo}-${matchIndex}-notPlayed`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
				);
				updatedTeams[teamTwoIndex].form.push(
					<NotPlayedButton key={`${teamOne}-${teamTwo}-${matchIndex}-notPlayed`} title={`${teamOne} ${scoreOne}:${scoreTwo} ${teamTwo}`} />
				);
			}
		}
	});

	// Добавим строковое представление разницы мячей
	updatedTeams.forEach(team => {
		team.gd = `${team.g}:${team.gc}`;
	});

	// Сортировка по правилам
	updatedTeams.sort((a, b) => {
		if (b.pts !== a.pts) return b.pts - a.pts;

		const aH2H = a.headToHead[b.id] || { g: 0, gc: 0, pts: 0 };
		const bH2H = b.headToHead[a.id] || { g: 0, gc: 0, pts: 0 };

		// 1. Очки в личных встречах
		if (bH2H.pts !== aH2H.pts) return bH2H.pts - aH2H.pts;

		// 2. Разница мячей в личных встречах
		const h2hDiff = (bH2H.g - bH2H.gc) - (aH2H.g - aH2H.gc);
		if (h2hDiff !== 0) return h2hDiff;

		// 3. Общая разница мячей
		const gdA = a.g - a.gc;
		const gdB = b.g - b.gc;
		if (gdB !== gdA) return gdB - gdA;

		// 4. Количество забитых голов
		if (b.g !== a.g) return b.g - a.g;

		// 5. Количество пропущенных голов (меньше — лучше)
		return a.gc - b.gc;
	});

	return updatedTeams;
};


const filterMatches = (matches, teamIds) => {
	return matches.filter(match => teamIds.includes(match.teamOne) && teamIds.includes(match.teamTwo));
};

const LeagueTableVersion3 = ({ initialTeams, additionalTeams, matchResults, seasonTitle, divisionNameOne, divisionNameTwo }) => {
	// Separăm echipele și meciurile pentru cele două grupe
	const initialTeamIds = initialTeams.map(team => team.id);
	const additionalTeamIds = additionalTeams.map(team => team.id);

	const initialMatches = filterMatches(matchResults, initialTeamIds);
	const additionalMatches = filterMatches(matchResults, additionalTeamIds);

	const [initialLeagueTeams, setInitialLeagueTeams] = useState(initialTeams);
	const [additionalLeagueTeams, setAdditionalLeagueTeams] = useState(additionalTeams);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		// Simulăm încărcarea datelor
		const timer = setTimeout(() => {
			setInitialLeagueTeams(updateTeams(initialTeams, initialMatches));
			setAdditionalLeagueTeams(updateTeams(additionalTeams, additionalMatches));
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer); // Curățăm timer-ul la demontarea componentei
	}, [initialTeams, additionalTeams, initialMatches, additionalMatches]);

	return (
		<div>
			{loading ? (
				<div className="loading">
					<p className='text-center text-2xl py-52'>Loading...</p>
				</div>
			) : (
				<div>
					{/* Tabel pentru initialTeams */}
					<h2 className="text-center text-xl my-4">{divisionNameOne}</h2>
					<table className='table mb-8'>
						<thead style={{ backgroundColor: '#0f2d37' }}>
							<LeagueTableComponent rank={"#"} team={seasonTitle} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
						</thead>
						<tbody style={{ backgroundColor: '#010a0f' }}>
							{initialLeagueTeams.map((team, index) => (
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

					{/* Tabel pentru additionalTeams */}
					<h2 className="text-center text-xl my-4">{divisionNameTwo}</h2>
					<table className='table'>
						<thead style={{ backgroundColor: '#0f2d37' }}>
							<LeagueTableComponent rank={"#"} team={seasonTitle} mp={"MP"} w={"W"} d={"D"} l={"L"} g={"G"} gd={"GD"} pts={"PTS"} form={"FORM"} />
						</thead>
						<tbody style={{ backgroundColor: '#010a0f' }}>
							{additionalLeagueTeams.map((team, index) => (
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
				</div>
			)}
		</div>
	);
};

export default LeagueTableVersion3;
