import Argentina from '../components/league/national-teams/Argentina'
import Italy from '../components/league/national-teams/Italy'
import France from '../components/league/national-teams/France'
import Brazil from '../components/league/national-teams/Brazil'
import Holland from '../components/league/national-teams/Holland'
import Portugal from '../components/league/national-teams/Portugal'
import Spain from '../components/league/national-teams/Spain'
import Uruguay from '../components/league/national-teams/Uruguay'

export const initialTeams = [
	{ id: 'italy', name: <Italy />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'argentina', name: <Argentina />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'france', name: <France />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'brazil', name: <Brazil />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'holland', name: <Holland />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'portugal', name: <Portugal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'spain', name: <Spain />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'uruguay', name: <Uruguay />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '1', teamOne: 'argentina', scoreOne: 2, teamTwo: 'france', scoreTwo: 2 },
	{ id: '2', teamOne: 'france', scoreOne: 1, teamTwo: 'argentina', scoreTwo: 3 },
	{ id: '3', teamOne: 'holland', scoreOne: 3, teamTwo: 'argentina', scoreTwo: 0 },
	{ id: '4', teamOne: 'argentina', scoreOne: 3, teamTwo: 'holland', scoreTwo: 3 },
	{ id: '5', teamOne: 'brazil', scoreOne: 3, teamTwo: 'holland', scoreTwo: 2 },
	{ id: '6', teamOne: 'holland', scoreOne: 3, teamTwo: 'brazil', scoreTwo: 4 },
	{ id: '7', teamOne: 'holland', scoreOne: 2, teamTwo: 'france', scoreTwo: 3 },
	{ id: '8', teamOne: 'france', scoreOne: 3, teamTwo: 'holland', scoreTwo: 6 },
	{ id: '9', teamOne: 'portugal', scoreOne: 1, teamTwo: 'holland', scoreTwo: 2 },
	{ id: '10', teamOne: 'holland', scoreOne: 4, teamTwo: 'portugal', scoreTwo: 1 },
	{ id: '11', teamOne: 'brazil', scoreOne: 7, teamTwo: 'spain', scoreTwo: 3 },
	{ id: '12', teamOne: 'spain', scoreOne: 1, teamTwo: 'brazil', scoreTwo: 5 },
	{ id: '13', teamOne: 'spain', scoreOne: 0, teamTwo: 'holland', scoreTwo: 2 },
	{ id: '14', teamOne: 'holland', scoreOne: 5, teamTwo: 'spain', scoreTwo: 0 },
	{ id: '15', teamOne: 'brazil', scoreOne: 4, teamTwo: 'portugal', scoreTwo: 2 },
	{ id: '16', teamOne: 'portugal', scoreOne: 1, teamTwo: 'brazil', scoreTwo: 5 },
];