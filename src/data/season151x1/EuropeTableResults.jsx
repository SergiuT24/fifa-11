import ManchesterCity from '../../components/league/teams/ManchesterCity';
import Arsenal from '../../components/league/teams/Arsenal';
import Barcelona from '../../components/league/teams/Barcelona';
import Juventus from '../../components/league/teams/Juventus';
import Tottenham from '../../components/league/teams/Tottenham';
import Chelsea from '../../components/league/teams/Chelsea';


export const initialTeams = [
	{ id: 'ManchesterCity', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: <Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Juventus', name: <Juventus />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Tottenham', name: <Tottenham />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },

];

export const matchResults = [
	{ id: '123', teamOne: 'Tottenham', scoreOne: 3, teamTwo: 'Arsenal', scoreTwo: 1 },
	{ id: '123', teamOne: 'Arsenal', scoreOne: 2, teamTwo: 'Tottenham', scoreTwo: 4 },
	{ id: '123', teamOne: 'Arsenal', scoreOne: 2, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '123', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Arsenal', scoreTwo: 3 },
	{ id: '123', teamOne: 'Tottenham', scoreOne: 6, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '123', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Tottenham', scoreTwo: 2 },
	{ id: '123', teamOne: 'ManchesterCity', scoreOne: 6, teamTwo: 'Chelsea', scoreTwo: 3 },
	{ id: '123', teamOne: 'Chelsea', scoreOne: 2, teamTwo: 'ManchesterCity', scoreTwo: 1 },
	{ id: '123', teamOne: 'Juventus', scoreOne: 1, teamTwo: 'Chelsea', scoreTwo: 1 },
	{ id: '123', teamOne: 'Chelsea', scoreOne: 4, teamTwo: 'Juventus', scoreTwo: 0 },
	{ id: '123', teamOne: 'Juventus', scoreOne: 0, teamTwo: 'ManchesterCity', scoreTwo: 3 },
	{ id: '123', teamOne: 'ManchesterCity', scoreOne: 10, teamTwo: 'Juventus', scoreTwo: 0 },
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
