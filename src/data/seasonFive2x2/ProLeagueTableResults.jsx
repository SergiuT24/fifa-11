import Italy from '../../components/league/national-teams/Italy'
import France from '../../components/league/national-teams/France'
import Brazil from '../../components/league/national-teams/Brazil'
import Spain from '../../components/league/national-teams/Spain'
import Argentina from '../../components/league/national-teams/Argentina'
import Germany from '../../components/league/national-teams/Germany'

export const initialTeams = [
	{ id: 'Germany', name: <Germany />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'France', name: <France />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Brazil', name: <Brazil />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Spain', name: <Spain />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Italy', name: <Italy />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Argentina', name: <Argentina />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '1', teamOne: 'France', scoreOne: 2, teamTwo: 'Brazil', scoreTwo: 1 },
	{ id: '1', teamOne: 'France', scoreOne: 2, teamTwo: 'Italy', scoreTwo: 2 },
	{ id: '1', teamOne: 'France', scoreOne: 4, teamTwo: 'Argentina', scoreTwo: 2 },
	{ id: '1', teamOne: 'Brazil', scoreOne: 6, teamTwo: 'France', scoreTwo: 1 },
	{ id: '1', teamOne: 'Brazil', scoreOne: 5, teamTwo: 'Spain', scoreTwo: 2 },
	{ id: '1', teamOne: 'Brazil', scoreOne: 1, teamTwo: 'Italy', scoreTwo: 3 },
	{ id: '1', teamOne: 'Brazil', scoreOne: 1, teamTwo: 'Argentina', scoreTwo: 2 },
	{ id: '1', teamOne: 'Spain', scoreOne: 2, teamTwo: 'Brazil', scoreTwo: 2 },
	{ id: '1', teamOne: 'Italy', scoreOne: 4, teamTwo: 'France', scoreTwo: 0 },
	{ id: '1', teamOne: 'Italy', scoreOne: 2, teamTwo: 'Brazil', scoreTwo: 0 },
	{ id: '1', teamOne: 'Italy', scoreOne: 2, teamTwo: 'Argentina', scoreTwo: 3 },
	{ id: '1', teamOne: 'Argentina', scoreOne: 4, teamTwo: 'France', scoreTwo: 2 },
	{ id: '1', teamOne: 'Argentina', scoreOne: 5, teamTwo: 'Brazil', scoreTwo: 2 },
	{ id: '1', teamOne: 'Argentina', scoreOne: 2, teamTwo: 'Italy', scoreTwo: 1 },
	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'France', scoreTwo: '?' },
	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'Italy', scoreTwo: '?' },
	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'Argentina', scoreTwo: '?' },
	{ id: '1', teamOne: 'Italy', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },
	{ id: '1', teamOne: 'Argentina', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },
	{ id: '1', teamOne: 'France', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },

];