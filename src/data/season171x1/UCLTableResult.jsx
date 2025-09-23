import Stuttgart from '../../../../../components/league/4star-teams/Stuttgart';
import Dortmund from '../../../../../components/league/4star-teams/Dortmund';
import Lille from '../../../../../components/league/4star-teams/Lille';
import Werder from '../../../../../components/league/4star-teams/Werder';



export const initialTeams = [
	{ id: 'Dortmund', name: <Dortmund />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Place 2 ML', name: 'Place 2 ML', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Lille', name: <Lille />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Stuttgart', name: <Stuttgart />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Place 1 ML', name: 'Place 1 ML', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];
export const matchResults = [
	// { id: '123', teamOne: 'Inter', scoreOne: 4, teamTwo: 'Juventus', scoreTwo: 2 },

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
