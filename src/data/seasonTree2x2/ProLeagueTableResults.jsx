import Italy from '../../components/league/national-teams/Italy'
import France from '../../components/league/national-teams/France'
import Brazil from '../../components/league/national-teams/Brazil'
import Holland from '../../components/league/national-teams/Holland'
import England from '../../components/league/national-teams/England'
import Uruguay from '../../components/league/national-teams/Uruguay'
import Germany from '../../components/league/national-teams/Germany'

export const initialTeams = [
	{ id: 'Germany', name: <Germany />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'France', name: <France />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Brazil', name: <Brazil />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Holland', name: <Holland />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Italy', name: <Italy />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'England', name: <England />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Uruguay', name: <Uruguay />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '1', teamOne: 'Uruguay', scoreOne: 2, teamTwo: 'Brazil', scoreTwo: 4 },
	{ id: '2', teamOne: 'Brazil', scoreOne: 2, teamTwo: 'Uruguay', scoreTwo: 3 },
	{ id: '3', teamOne: 'Uruguay', scoreOne: 5, teamTwo: 'England', scoreTwo: 2 },
	{ id: '4', teamOne: 'England', scoreOne: 2, teamTwo: 'Uruguay', scoreTwo: 2 },
	{ id: '5', teamOne: 'France', scoreOne: 6, teamTwo: 'England', scoreTwo: 4 },
	{ id: '6', teamOne: 'England', scoreOne: 3, teamTwo: 'France', scoreTwo: 2 },
	{ id: '7', teamOne: 'Italy', scoreOne: 2, teamTwo: 'Brazil', scoreTwo: 0 },
	{ id: '8', teamOne: 'Brazil', scoreOne: 1, teamTwo: 'Italy', scoreTwo: 3 },
	{ id: '9', teamOne: 'Italy', scoreOne: 2, teamTwo: 'Uruguay', scoreTwo: 1 },
	{ id: '10', teamOne: 'Uruguay', scoreOne: 1, teamTwo: 'Italy', scoreTwo: 5 },
	{ id: '11', teamOne: 'France', scoreOne: 7, teamTwo: 'Germany', scoreTwo: 2 },
	{ id: '12', teamOne: 'Germany', scoreOne: 3, teamTwo: 'France', scoreTwo: 3 },
	{ id: '13', teamOne: 'England', scoreOne: 5, teamTwo: 'Germany', scoreTwo: 1 },
	{ id: '14', teamOne: 'Germany', scoreOne: 3, teamTwo: 'England', scoreTwo: 2 },
	{ id: '15', teamOne: 'Italy', scoreOne: 5, teamTwo: 'France', scoreTwo: 1 },
	{ id: '16', teamOne: 'France', scoreOne: 5, teamTwo: 'Italy', scoreTwo: 1 },
	{ id: '17', teamOne: 'Uruguay', scoreOne: 0, teamTwo: 'France', scoreTwo: 4 },
	{ id: '18', teamOne: 'France', scoreOne: 3, teamTwo: 'Uruguay', scoreTwo: 2 },
	{ id: '19', teamOne: 'Germany', scoreOne: 1, teamTwo: 'Uruguay', scoreTwo: 3 },
	{ id: '20', teamOne: 'Uruguay', scoreOne: 1, teamTwo: 'Germany', scoreTwo: 1 },
	{ id: '1', teamOne: 'England', scoreOne: 7, teamTwo: 'Holland', scoreTwo: 2 },
	{ id: '1', teamOne: 'Holland', scoreOne: 0, teamTwo: 'England', scoreTwo: 3 },
	{ id: '1', teamOne: 'Holland', scoreOne: 1, teamTwo: 'Uruguay', scoreTwo: 5 },
	{ id: '1', teamOne: 'Uruguay', scoreOne: 3, teamTwo: 'Holland', scoreTwo: 0 },
	{ id: '1', teamOne: 'Holland', scoreOne: 3, teamTwo: 'France', scoreTwo: 8 },
	{ id: '1', teamOne: 'France', scoreOne: 6, teamTwo: 'Holland', scoreTwo: 1 },
	{ id: '1', teamOne: 'Italy', scoreOne: 6, teamTwo: 'Holland', scoreTwo: 0 },
	{ id: '1', teamOne: 'Holland', scoreOne: 0, teamTwo: 'Italy', scoreTwo: 3 },
	{ id: '1', teamOne: 'France', scoreOne: 1, teamTwo: 'Brazil', scoreTwo: 0 },
	{ id: '1', teamOne: 'Brazil', scoreOne: 4, teamTwo: 'France', scoreTwo: 2 },
	{ id: '1', teamOne: 'Germany', scoreOne: 3, teamTwo: 'Holland', scoreTwo: 0 },
	{ id: '1', teamOne: 'Holland', scoreOne: 0, teamTwo: 'Germany', scoreTwo: 3 },
	{ id: '1', teamOne: 'Holland', scoreOne: 0, teamTwo: 'Brazil', scoreTwo: 3 },
	{ id: '1', teamOne: 'Brazil', scoreOne: 3, teamTwo: 'Holland', scoreTwo: 0 },
	{ id: '1', teamOne: 'Germany', scoreOne: 0, teamTwo: 'Italy', scoreTwo: 6 },
	{ id: '1', teamOne: 'Italy', scoreOne: 6, teamTwo: 'Germany', scoreTwo: 3 },
	{ id: '1', teamOne: 'England', scoreOne: 0, teamTwo: 'Italy', scoreTwo: 0 },
	{ id: '1', teamOne: 'Italy', scoreOne: 1, teamTwo: 'England', scoreTwo: 1 },
	// Germany
	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Brazil', scoreTwo: '?' },
	// Brazil
	{ id: '1', teamOne: 'Brazil', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },
	{ id: '1', teamOne: 'Brazil', scoreOne: '?', teamTwo: 'England', scoreTwo: '?' },
	// England
	{ id: '1', teamOne: 'England', scoreOne: '?', teamTwo: 'Brazil', scoreTwo: '?' },
];