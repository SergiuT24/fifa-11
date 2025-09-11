import Liverpool from '../../components/league/teams/Liverpool';
import Barcelona from '../../components/league/teams/Barcelona';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import BayernMunich from '../../components/league/teams/BayernMunich';
import ACMilan from '../../components/league/teams/AcMilan';

export const initialTeams = [
	{ id: 'Liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterCity', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterUnited', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'BayernMunich', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '2', teamOne: 'ManchesterCity', scoreOne: 2, teamTwo: 'Liverpool', scoreTwo: 4 },
	{ id: '2', teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'ManchesterCity', scoreTwo: 3 },
	{ id: '2', teamOne: 'BayernMunich', scoreOne: 2, teamTwo: 'Liverpool', scoreTwo: 2 },
	{ id: '2', teamOne: 'Liverpool', scoreOne: 3, teamTwo: 'BayernMunich', scoreTwo: 2 },
	{ id: '2', teamOne: 'ManchesterUnited', scoreOne: 3, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '2', teamOne: 'ACMilan', scoreOne: 0, teamTwo: 'ManchesterUnited', scoreTwo: 3 },
	{ id: '2', teamOne: 'ManchesterUnited', scoreOne: 5, teamTwo: 'Liverpool', scoreTwo: 1 },
	{ id: '2', teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'ManchesterUnited', scoreTwo: 6 },
	{ id: '2', teamOne: 'BayernMunich', scoreOne: 2, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '2', teamOne: 'ACMilan', scoreOne: 3, teamTwo: 'BayernMunich', scoreTwo: 1 },
	{ id: '2', teamOne: 'ManchesterUnited', scoreOne: 7, teamTwo: 'ManchesterCity', scoreTwo: 2 },
	{ id: '2', teamOne: 'ManchesterCity', scoreOne: 5, teamTwo: 'ManchesterUnited', scoreTwo: 3 },
	{ id: '2', teamOne: 'Liverpool', scoreOne: 5, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '2', teamOne: 'Barcelona', scoreOne: 2, teamTwo: 'Liverpool', scoreTwo: 1 },
];

