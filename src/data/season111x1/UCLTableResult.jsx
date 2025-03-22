import RealMadrid from '../../components/league/teams/RealMadrid'
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import Barcelona from '../../components/league/teams/Barcelona';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import Chelsea from '../../components/league/teams/Chelsea';
import Arsenal from '../../components/league/teams/Arsenal';
import Lyon from '../../components/league/teams/Lyon';
import BayernMunich from '../../components/league/teams/BayernMunich';

export const initialTeams = [
	{ id: 'UCL-Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Chelsea', name: <Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Bayern-Munich', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'UCL-Real-Madrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Manchester-City', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Manchester-United', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'UCL-Lyon', name: <Lyon />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
];


const fetchResults = async () => {
	console.log('Fetching results...');
	try {
		const response = await fetch(`https://match-results-bucket.s3.eu-central-1.amazonaws.com/matchResults.json?timestamp=${Date.now()}`);
		const data = await response.json();

		matchResults.length = 0;
		data.forEach(item => {
			matchResults.push({
				id: item.id,
				teamOne: item.teamOne,
				scoreOne: item.scoreOne,
				teamTwo: item.teamTwo,
				scoreTwo: item.scoreTwo
			});
		});

		return matchResults;
	} catch (error) {
		console.error('Error fetching match results:', error);
		return [];
	}
};

fetchResults().then(() => {
});