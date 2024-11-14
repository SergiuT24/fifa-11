import Italy from '../../components/league/national-teams/Italy'
import France from '../../components/league/national-teams/France'
import Brazil from '../../components/league/national-teams/Brazil'
import Holland from '../../components/league/national-teams/Holland'
import Spain from '../../components/league/national-teams/Spain'
import Uruguay from '../../components/league/national-teams/Uruguay'
import Russia from '../../components/league/national-teams/Russia'
import Croatia from '../../components/league/national-teams/Croatia'
import Turkey from '../../components/league/national-teams/Turkey'
import Germany from '../../components/league/national-teams/Germany'
import { matchResults } from './matchResults';

console.log(matchResults);

export const initialTeams = [
	{ id: 'Italy', name: <Italy />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'France', name: <France />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Brazil', name: <Brazil />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Holland', name: <Holland />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Spain', name: <Spain />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Uruguay', name: <Uruguay />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Russia', name: <Russia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Croatia', name: <Croatia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Turkey', name: <Turkey />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Germany', name: <Germany />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [];



// export const matchResults = [
// 	// Results
// 	{ id: '1', teamOne: 'Turkey', scoreOne: 1, teamTwo: 'Croatia', scoreTwo: 3 },
// 	{ id: '2', teamOne: 'Croatia', scoreOne: 2, teamTwo: 'Turkey', scoreTwo: 2 },
// 	{ id: '3', teamOne: 'Croatia', scoreOne: 1, teamTwo: 'Brazil', scoreTwo: 3 },
// 	{ id: '4', teamOne: 'Brazil', scoreOne: 2, teamTwo: 'Croatia', scoreTwo: 0 },
// 	{ id: '5', teamOne: 'France', scoreOne: 3, teamTwo: 'Holland', scoreTwo: 0 },
// 	{ id: '6', teamOne: 'Holland', scoreOne: 0, teamTwo: 'France', scoreTwo: 6 },
// 	{ id: '7', teamOne: 'Brazil', scoreOne: 4, teamTwo: 'Turkey', scoreTwo: 4 },
// 	{ id: '8', teamOne: 'Turkey', scoreOne: 1, teamTwo: 'Brazil', scoreTwo: 2 },
// 	{ id: '9', teamOne: 'Spain', scoreOne: 2, teamTwo: 'Italy', scoreTwo: 0 },
// 	{ id: '10', teamOne: 'Italy', scoreOne: 3, teamTwo: 'Spain', scoreTwo: 0 },
// 	{ id: '11', teamOne: 'Spain', scoreOne: 4, teamTwo: 'Turkey', scoreTwo: 1 },
// 	{ id: '12', teamOne: 'Turkey', scoreOne: 3, teamTwo: 'Spain', scoreTwo: 1 },
// 	{ id: '13', teamOne: 'Holland', scoreOne: 3, teamTwo: 'Italy', scoreTwo: 0 },
// 	{ id: '14', teamOne: 'Italy', scoreOne: 2, teamTwo: 'Holland', scoreTwo: 3 },
// 	{ id: '15', teamOne: 'Turkey', scoreOne: 3, teamTwo: 'Uruguay', scoreTwo: 0 },
// 	{ id: '16', teamOne: 'Uruguay', scoreOne: 0, teamTwo: 'Turkey', scoreTwo: 7 },
// 	{ id: '17', teamOne: 'Italy', scoreOne: 1, teamTwo: 'Russia', scoreTwo: 3 },
// 	{ id: '18', teamOne: 'Italy', scoreOne: 0, teamTwo: 'Croatia', scoreTwo: 6 },
// 	{ id: '19', teamOne: 'Italy', scoreOne: 3, teamTwo: 'Turkey', scoreTwo: 0 },
// 	{ id: '20', teamOne: 'France', scoreOne: 5, teamTwo: 'Spain', scoreTwo: 1 },
// 	{ id: '21', teamOne: 'France', scoreOne: 6, teamTwo: 'Uruguay', scoreTwo: 1 },
// 	{ id: '22', teamOne: 'France', scoreOne: 5, teamTwo: 'Russia', scoreTwo: 1 },
// 	{ id: '23', teamOne: 'France', scoreOne: 5, teamTwo: 'Croatia', scoreTwo: 0 },
// 	{ id: '24', teamOne: 'France', scoreOne: 6, teamTwo: 'Turkey', scoreTwo: 2 },
// 	{ id: '25', teamOne: 'Brazil', scoreOne: 2, teamTwo: 'Holland', scoreTwo: 0 },
// 	{ id: '26', teamOne: 'Brazil', scoreOne: 3, teamTwo: 'Uruguay', scoreTwo: 1 },
// 	{ id: '27', teamOne: 'Brazil', scoreOne: 2, teamTwo: 'Russia', scoreTwo: 2 },
// 	{ id: '28', teamOne: 'Holland', scoreOne: 1, teamTwo: 'Brazil', scoreTwo: 6 },
// 	{ id: '29', teamOne: 'Holland', scoreOne: 1, teamTwo: 'Turkey', scoreTwo: 4 },
// 	{ id: '30', teamOne: 'Spain', scoreOne: 2, teamTwo: 'France', scoreTwo: 4 },
// 	{ id: '31', teamOne: 'Uruguay', scoreOne: 0, teamTwo: 'France', scoreTwo: 8 },
// 	{ id: '32', teamOne: 'Uruguay', scoreOne: 1, teamTwo: 'Brazil', scoreTwo: 6 },
// 	{ id: '33', teamOne: 'Uruguay', scoreOne: 1, teamTwo: 'Russia', scoreTwo: 4 },
// 	{ id: '34', teamOne: 'Russia', scoreOne: 5, teamTwo: 'Italy', scoreTwo: 0 },
// 	{ id: '35', teamOne: 'Russia', scoreOne: 6, teamTwo: 'France', scoreTwo: 5 },
// 	{ id: '36', teamOne: 'Russia', scoreOne: 6, teamTwo: 'Brazil', scoreTwo: 1 },
// 	{ id: '37', teamOne: 'Russia', scoreOne: 4, teamTwo: 'Uruguay', scoreTwo: 0 },
// 	{ id: '38', teamOne: 'Russia', scoreOne: 1, teamTwo: 'Croatia', scoreTwo: 0 },
// 	{ id: '39', teamOne: 'Russia', scoreOne: 4, teamTwo: 'Turkey', scoreTwo: 1 },
// 	{ id: '40', teamOne: 'Croatia', scoreOne: 4, teamTwo: 'Italy', scoreTwo: 2 },
// 	{ id: '41', teamOne: 'Croatia', scoreOne: 1, teamTwo: 'France', scoreTwo: 1 },
// 	{ id: '42', teamOne: 'Croatia', scoreOne: 1, teamTwo: 'Russia', scoreTwo: 6 },
// 	{ id: '43', teamOne: 'Turkey', scoreOne: 4, teamTwo: 'Italy', scoreTwo: 4 },
// 	{ id: '44', teamOne: 'Turkey', scoreOne: 2, teamTwo: 'France', scoreTwo: 2 },
// 	{ id: '45', teamOne: 'Turkey', scoreOne: 5, teamTwo: 'Holland', scoreTwo: 0 },
// 	{ id: '46', teamOne: 'Turkey', scoreOne: 2, teamTwo: 'Russia', scoreTwo: 5 },
// 	// Italy
// 	{ id: '1', teamOne: 'Italy', scoreOne: '?', teamTwo: 'France', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Italy', scoreOne: '?', teamTwo: 'Brazil', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Italy', scoreOne: '?', teamTwo: 'Portugal', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Italy', scoreOne: '?', teamTwo: 'Uruguay', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Italy', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },

// 	// France
// 	{ id: '1', teamOne: 'France', scoreOne: '?', teamTwo: 'Italy', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'France', scoreOne: '?', teamTwo: 'Brazil', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'France', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },
// 	// Brazil
// 	{ id: '1', teamOne: 'Brazil', scoreOne: '?', teamTwo: 'Italy', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Brazil', scoreOne: '?', teamTwo: 'France', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Brazil', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Brazil', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },
// 	// Holland
// 	{ id: '1', teamOne: 'Holland', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Holland', scoreOne: '?', teamTwo: 'Uruguay', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Holland', scoreOne: '?', teamTwo: 'Russia', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Holland', scoreOne: '?', teamTwo: 'Croatia', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Holland', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },

// 	// Spain
// 	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'Brazil', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'Holland', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'Uruguay', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'Russia', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'Croatia', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Spain', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },
// 	// Uruguay
// 	{ id: '1', teamOne: 'Uruguay', scoreOne: '?', teamTwo: 'Italy', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Uruguay', scoreOne: '?', teamTwo: 'Holland', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Uruguay', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Uruguay', scoreOne: '?', teamTwo: 'Croatia', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Uruguay', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },
// 	// Russia
// 	{ id: '1', teamOne: 'Russia', scoreOne: '?', teamTwo: 'Holland', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Russia', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Russia', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },
// 	// Croatia
// 	{ id: '1', teamOne: 'Croatia', scoreOne: '?', teamTwo: 'Holland', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Croatia', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Croatia', scoreOne: '?', teamTwo: 'Uruguay', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Croatia', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },
// 	// Turkey
// 	{ id: '1', teamOne: 'Turkey', scoreOne: '?', teamTwo: 'Germany', scoreTwo: '?' },
// 	// Germany
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Italy', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'France', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Brazil', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Holland', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Spain', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Uruguay', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Russia', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Croatia', scoreTwo: '?' },
// 	{ id: '1', teamOne: 'Germany', scoreOne: '?', teamTwo: 'Turkey', scoreTwo: '?' },

// ];