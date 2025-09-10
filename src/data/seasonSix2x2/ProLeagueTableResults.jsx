import Inter from '../../components/league/teams/Inter';
import Liverpool from '../../components/league/teams/Liverpool';
import Barcelona from '../../components/league/teams/Barcelona';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import BayernMunich from '../../components/league/teams/BayernMunich';
import ACMilan from '../../components/league/teams/AcMilan';

export const initialTeams = [
	{ id: 'Inter', name: <Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterCity', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterUnited', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'BayernMunich', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '1', teamOne: 'Barcelona', scoreOne: 2, teamTwo: 'Inter', scoreTwo: 0 },
	{ id: '1', teamOne: 'Inter', scoreOne: 2, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '1', teamOne: 'ManchesterUnited', scoreOne: 8, teamTwo: 'Inter', scoreTwo: 0 },
	{ id: '1', teamOne: 'Inter', scoreOne: 2, teamTwo: 'ManchesterUnited', scoreTwo: 8 },
];
