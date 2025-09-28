import Stuttgart from '../../components/league/4star-teams/Stuttgart';
import Dortmund from '../../components/league/4star-teams/Dortmund';
import Lille from '../../components/league/4star-teams/Lille';
import Werder from '../../components/league/4star-teams/Werder';
import Schalke from '../../components/league/4star-teams/Schalke';
import Galatasaray from '../../components/league/4star-teams/Galatasaray';



export const initialTeams = [
	{ id: 'Dortmund', name: <Dortmund />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Schalke', name: <Schalke />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Lille', name: <Lille />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Stuttgart', name: <Stuttgart />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Galatasaray', name: <Galatasaray />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];
export const matchResults = [
	{ id: '123', teamOne: 'Lille', scoreOne: 5, teamTwo: 'Stuttgart', scoreTwo: 3 },
	{ id: '123', teamOne: 'Stuttgart', scoreOne: 5, teamTwo: 'Lille', scoreTwo: 4 },
	{ id: '123', teamOne: 'Werder', scoreOne: 7, teamTwo: 'Dortmund', scoreTwo: 1 },
	{ id: '123', teamOne: 'Dortmund', scoreOne: 2, teamTwo: 'Werder', scoreTwo: 1 },
	{ id: '123', teamOne: 'Werder', scoreOne: 2, teamTwo: 'Schalke', scoreTwo: 0 },
	{ id: '123', teamOne: 'Schalke', scoreOne: 2, teamTwo: 'Werder', scoreTwo: 5 },
	{ id: '123', teamOne: 'Galatasaray', scoreOne: 3, teamTwo: 'Stuttgart', scoreTwo: 2 },
	{ id: '123', teamOne: 'Stuttgart', scoreOne: 0, teamTwo: 'Galatasaray', scoreTwo: 3 },
	{ id: '123', teamOne: 'Schalke', scoreOne: 0, teamTwo: 'Dortmund', scoreTwo: 4 },
	{ id: '123', teamOne: 'Dortmund', scoreOne: 2, teamTwo: 'Schalke', scoreTwo: 1 },
	{ id: '123', teamOne: 'Galatasaray', scoreOne: 3, teamTwo: 'Lille', scoreTwo: 2 },
	{ id: '123', teamOne: 'Lille', scoreOne: 5, teamTwo: 'Galatasaray', scoreTwo: 2 },
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
