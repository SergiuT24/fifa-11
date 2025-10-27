import ACMilan from '../../components/league/teams/AcMilan';
import CSKA from '../../components/league/4star-teams/Cska';
import FCRostov from '../../components/league/teams/FCRostov';
import NewcastleUnited from '../../components/league/teams/NewcastleUnited';
import Zenit from '../../components/league/teams/Zenit';
import Barcelona from '../../components/league/teams/Barcelona';



export const initialTeams = [
	{ id: 'Barcelona', name: < Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'NewcastleUnited', name: <NewcastleUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'FCRostov', name: < FCRostov />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'ACMilan', name: < ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: < CSKA />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Zenit', name: <Zenit />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '123', teamOne: 'Zenit', scoreOne: 1, teamTwo: 'ACMilan', scoreTwo: 3 },
	{ id: '123', teamOne: 'ACMilan', scoreOne: 4, teamTwo: 'Zenit', scoreTwo: 1 },
	{ id: '123', teamOne: 'NewcastleUnited', scoreOne: 0, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '123', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'NewcastleUnited', scoreTwo: 1 },
	{ id: '5', teamOne: 'CSKA', scoreOne: 4, teamTwo: 'Zenit', scoreTwo: 0 },
	{ id: '6', teamOne: 'Zenit', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 3 },
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
