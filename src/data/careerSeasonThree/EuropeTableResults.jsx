import ACMilan from '../../components/league/teams/AcMilan';
import Chelsea from '../../components/league/teams/Chelsea';
import FSVMainz from '../../components/league/teams/FSVMainz';
import NewcastleUnited from '../../components/league/teams/NewcastleUnited';
import BocaJuniors from '../../components/league/teams/BocaJuniors';
import Inter from '../../components/league/teams/Inter';



export const initialTeams = [
	{ id: 'ACMilan', name: < ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Inter', name: < Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: < Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'NewcastleUnited', name: <NewcastleUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'FSVMainz', name: < FSVMainz />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'BocaJuniors', name: <BocaJuniors />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	// { id: '123', teamOne: 'ManchesterUnited', scoreOne: 4, teamTwo: 'Tottenham', scoreTwo: 2 },
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
