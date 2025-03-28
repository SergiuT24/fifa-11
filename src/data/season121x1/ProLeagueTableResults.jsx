import RealMadrid from '../../components/league/teams/RealMadrid'
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import Barcelona from '../../components/league/teams/Barcelona';
import Anji from '../../components/league/teams/Anji';
import Celtic from '../../components/league/teams/Celtic';
import Start from '../../components/league/teams/Start';
import CSKA from '../../components/league/4star-teams/Cska';
import AcMilan from '../../components/league/teams/AcMilan';
import Arsenal from '../../components/league/teams/Arsenal';
import Zenit from '../../components/league/4star-teams/Zenit';


export const initialTeams = [
	{ id: 'Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Anji', name: <Anji />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Celtic', name: <Celtic />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Real-Madrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Start', name: <Start />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'MU', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: <CSKA />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Zenit', name: <Zenit />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'empty', name: 'empty', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]

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