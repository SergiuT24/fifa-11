import Inter from '../../components/league/teams/Inter';
import RealMadrid from '../../components/league/teams/RealMadrid';
import Barcelona from '../../components/league/teams/Barcelona';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import Arsenal from '../../components/league/teams/Arsenal';
import ManchesterCity from '../../components/league/teams/ManchesterCity';


export const initialTeams = [
	{ id: 'Inter', name: <Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'RealMadrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterUnited', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterCity', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [];

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

// 		console.log('Formatted Data:', matchResults);
// 		return matchResults;
// 	} catch (error) {
// 		console.error('Error fetching match results:', error);
// 		return [];
// 	}
// };

// fetchResults().then(() => {
// 	console.log('Final matchResults:', matchResults);
// });