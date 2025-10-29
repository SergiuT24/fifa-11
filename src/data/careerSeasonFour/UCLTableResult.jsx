import Inter from '../../components/league/teams/Inter';
import RealMadrid from '../../components/league/teams/RealMadrid';
import WestBrom from '../../components/league/teams/WestBrom';
import Anji from '../../components/league/teams/Anji';
import Valencia from '../../components/league/teams/Valencia';
import Chelsea from '../../components/league/teams/Chelsea';

export const initialTeams = [
	{ id: 'Anji', name: <Anji />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'WestBrom', name: < WestBrom />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Valencia', name: < Valencia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'RealMadrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Inter', name: < Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: <Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];
export const matchResults = [
	{ id: '123', teamOne: 'Chelsea', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 4 },
	{ id: '123', teamOne: 'RealMadrid', scoreOne: 3, teamTwo: 'Chelsea', scoreTwo: 2 },
	{ id: '123', teamOne: 'Anji', scoreOne: 3, teamTwo: 'Valencia', scoreTwo: 4 },
	{ id: '123', teamOne: 'Valencia', scoreOne: 3, teamTwo: 'Anji', scoreTwo: 3 },
	{ id: '123', teamOne: 'RealMadrid', scoreOne: 4, teamTwo: 'Inter', scoreTwo: 3 },
	{ id: '123', teamOne: 'Inter', scoreOne: 6, teamTwo: 'RealMadrid', scoreTwo: 1 },
	{ id: '123', teamOne: 'Anji', scoreOne: 3, teamTwo: 'WestBrom', scoreTwo: 3 },
	{ id: '123', teamOne: 'WestBrom', scoreOne: 3, teamTwo: 'Anji', scoreTwo: 2 },
	{ id: '123', teamOne: 'Valencia', scoreOne: 3, teamTwo: 'WestBrom', scoreTwo: 0 },
	{ id: '123', teamOne: 'WestBrom', scoreOne: 1, teamTwo: 'Valencia', scoreTwo: 10 },
	{ id: '123', teamOne: 'Chelsea', scoreOne: 2, teamTwo: 'Inter', scoreTwo: 4 },
	{ id: '123', teamOne: 'Inter', scoreOne: 6, teamTwo: 'Chelsea', scoreTwo: 1 },
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
