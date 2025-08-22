import Everton from '../../components/league/4star-teams/Everton';
import Leverkusen from '../../components/league/4star-teams/Leverkusen';
import Sampdoria from '../../components/league/4star-teams/Sampdoria';
import Schalke from '../../components/league/4star-teams/Schalke';
import Sporting from '../../components/league/4star-teams/Sporting';
import Stuttgart from '../../components/league/4star-teams/Stuttgart';
import Zenit from '../../components/league/4star-teams/Zenit';
import PSV from '../../components/league/4star-teams/Psv';

export const initialTeams = [
	{ id: 'Leverkusen', name: <Leverkusen />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Zenit', name: <Zenit />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Everton', name: <Everton />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Stuttgart', name: <Stuttgart />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Schalke', name: <Schalke />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sampdoria', name: <Sampdoria />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sporting', name: <Sporting />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'PSV', name: <PSV />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '105', teamOne: 'Sampdoria', scoreOne: 5, teamTwo: 'Schalke', scoreTwo: 3 },
	{ id: '106', teamOne: 'Schalke', scoreOne: 8, teamTwo: 'Sampdoria', scoreTwo: 1 },
	{ id: '107', teamOne: 'Schalke', scoreOne: 8, teamTwo: 'Sporting', scoreTwo: 3 },
	{ id: '108', teamOne: 'Sporting', scoreOne: 0, teamTwo: 'Schalke', scoreTwo: 3 },
	{ id: '109', teamOne: 'Sampdoria', scoreOne: 0, teamTwo: 'PSV', scoreTwo: 3 },
	{ id: '110', teamOne: 'PSV', scoreOne: 3, teamTwo: 'Sampdoria', scoreTwo: 0 },
	{ id: '111', teamOne: 'Schalke', scoreOne: 3, teamTwo: 'PSV', scoreTwo: 2 },
	{ id: '112', teamOne: 'PSV', scoreOne: 2, teamTwo: 'Schalke', scoreTwo: 3 },
	{ id: '113', teamOne: 'Zenit', scoreOne: 2, teamTwo: 'Leverkusen', scoreTwo: 3 },
	{ id: '114', teamOne: 'Leverkusen', scoreOne: 5, teamTwo: 'Zenit', scoreTwo: 1 },
	{ id: '115', teamOne: 'Sporting', scoreOne: 5, teamTwo: 'PSV', scoreTwo: 2 },
	{ id: '116', teamOne: 'PSV', scoreOne: 3, teamTwo: 'Sporting', scoreTwo: 7 },
	{ id: '117', teamOne: 'Sporting', scoreOne: 4, teamTwo: 'Sampdoria', scoreTwo: 3 },
	{ id: '118', teamOne: 'Sampdoria', scoreOne: 2, teamTwo: 'Sporting', scoreTwo: 3 },
	{ id: '113', teamOne: 'Zenit', scoreOne: 1, teamTwo: 'Stuttgart', scoreTwo: 5 },
	{ id: '114', teamOne: 'Stuttgart', scoreOne: 2, teamTwo: 'Zenit', scoreTwo: 1 },
	{ id: '114', teamOne: 'Stuttgart', scoreOne: 5, teamTwo: 'Leverkusen', scoreTwo: 2 },
	{ id: '114', teamOne: 'Leverkusen', scoreOne: 4, teamTwo: 'Stuttgart', scoreTwo: 1 },
	{ id: '113', teamOne: 'Everton', scoreOne: 3, teamTwo: 'Stuttgart', scoreTwo: 3 },
	{ id: '114', teamOne: 'Stuttgart', scoreOne: 1, teamTwo: 'Everton', scoreTwo: 1 },
	{ id: '113', teamOne: 'Leverkusen', scoreOne: 3, teamTwo: 'Everton', scoreTwo: 5 },
	{ id: '114', teamOne: 'Everton', scoreOne: 2, teamTwo: 'Leverkusen', scoreTwo: 4 },
	{ id: '114', teamOne: 'Zenit', scoreOne: 1, teamTwo: 'Everton', scoreTwo: 3 },
	{ id: '114', teamOne: 'Everton', scoreOne: 6, teamTwo: 'Zenit', scoreTwo: 1 },
];


// const fetchResults = async () => {
// 	console.log('Fetching results...');
// 	try {
// 		const response = await fetch(`https://match-results-bucket.s3.eu-central-1.amazonaws.com/matchResults.json?timestamp=${Date.now()}`);
// 		const data = await response.json();

// 		matchResults.length = 0;
// 		data.forEach(item => {
// 			matchResults.push({
// 				id: item.id,
// 				teamOne: item.teamOne,
// 				scoreOne: item.scoreOne,
// 				teamTwo: item.teamTwo,
// 				scoreTwo: item.scoreTwo
// 			});
// 		});

// 		return matchResults;
// 	} catch (error) {
// 		console.error('Error fetching match results:', error);
// 		return [];
// 	}
// };

// fetchResults().then(() => {
// });
