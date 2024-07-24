import AcMilan from '../components/league/teams/AcMilan';
import RealMadrid from '../components/league/teams/RealMadrid';
import Inter from '../components/league/teams/Inter';
import Liverpool from '../components/league/teams/Liverpool';
import Lyon from '../components/league/teams/Lyon';
import Chelsea from '../components/league/teams/Chelsea';

export const initialTeams = [
	{ id: 'ac-milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gd: 0, pts: 0, form: [], headToHead: {} },
	{ id: 'real-madrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gd: 0, pts: 0, form: [], headToHead: {} },
	{ id: 'inter', name: <Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gd: 0, pts: 0, form: [], headToHead: {} },
	{ id: 'liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gd: 0, pts: 0, form: [], headToHead: {} },
	{ id: 'lyon', name: <Lyon />, mp: 0, w: 0, d: 0, l: 0, g: 0, gd: 0, pts: 0, form: [], headToHead: {} },
	{ id: 'chelsea', name: <Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gd: 0, pts: 0, form: [], headToHead: {} },
];

export const matchResults = [
	{ teamOne: 'ac-milan', scoreOne: 2, teamTwo: 'real-madrid', scoreTwo: 1 },
];
