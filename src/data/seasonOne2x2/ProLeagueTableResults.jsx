import AcMilan from '../../components/league/teams/AcMilan';
import BayernMunich from '../../components/league/teams/BayernMunich';
import Arsenal from '../../components/league/teams/Arsenal';
import Liverpool from '../../components/league/teams/Liverpool';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import Chelsea from '../../components/league/teams/Chelsea';

export const initialTeams = [
	{ id: 'milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'bavaria', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'manchester', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'chelsea', name: <Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '1', teamOne: 'manchester', scoreOne: 2, teamTwo: 'chelsea', scoreTwo: 1 },
	{ id: '2', teamOne: 'chelsea', scoreOne: 6, teamTwo: 'manchester', scoreTwo: 2 },
	{ id: '3', teamOne: 'chelsea', scoreOne: 3, teamTwo: 'bavaria', scoreTwo: 2 },
	{ id: '4', teamOne: 'bavaria', scoreOne: 1, teamTwo: 'chelsea', scoreTwo: 3 },
	{ id: '5', teamOne: 'liverpool', scoreOne: 1, teamTwo: 'chelsea', scoreTwo: 3 },
	{ id: '6', teamOne: 'chelsea', scoreOne: 0, teamTwo: 'liverpool', scoreTwo: 1 },
	{ id: '7', teamOne: 'liverpool', scoreOne: 5, teamTwo: 'arsenal', scoreTwo: 1 },
	{ id: '8', teamOne: 'arsenal', scoreOne: 2, teamTwo: 'liverpool', scoreTwo: 1 },
	{ id: '9', teamOne: 'arsenal', scoreOne: 3, teamTwo: 'milan', scoreTwo: 1 },
	{ id: '10', teamOne: 'milan', scoreOne: 2, teamTwo: 'arsenal', scoreTwo: 2 },
	{ id: '11', teamOne: 'milan', scoreOne: 6, teamTwo: 'manchester', scoreTwo: 1 },
	{ id: '12', teamOne: 'manchester', scoreOne: 1, teamTwo: 'milan', scoreTwo: 4 },
	{ id: '13', teamOne: 'manchester', scoreOne: 4, teamTwo: 'bavaria', scoreTwo: 4 },
	{ id: '14', teamOne: 'bavaria', scoreOne: 3, teamTwo: 'manchester', scoreTwo: 3 },
	{ id: '15', teamOne: 'arsenal', scoreOne: 4, teamTwo: 'manchester', scoreTwo: 0 },
	{ id: '16', teamOne: 'manchester', scoreOne: 4, teamTwo: 'arsenal', scoreTwo: 1 },
	{ id: '17', teamOne: 'liverpool', scoreOne: 3, teamTwo: 'milan', scoreTwo: 0 },
	{ id: '18', teamOne: 'milan', scoreOne: 2, teamTwo: 'liverpool', scoreTwo: 3 },
	{ id: '19', teamOne: 'arsenal', scoreOne: 3, teamTwo: 'chelsea', scoreTwo: 2 },
	{ id: '20', teamOne: 'chelsea', scoreOne: 3, teamTwo: 'arsenal', scoreTwo: 1 },
	{ id: '21', teamOne: 'liverpool', scoreOne: 4, teamTwo: 'bavaria', scoreTwo: 2 },
	{ id: '22', teamOne: 'bavaria', scoreOne: 3, teamTwo: 'liverpool', scoreTwo: 4 },
	{ id: '23', teamOne: 'milan', scoreOne: 1, teamTwo: 'bavaria', scoreTwo: 2 },
	{ id: '24', teamOne: 'bavaria', scoreOne: 1, teamTwo: 'milan', scoreTwo: 2 },
	{ id: '25', teamOne: 'chelsea', scoreOne: 3, teamTwo: 'milan', scoreTwo: 2 },
	{ id: '26', teamOne: 'milan', scoreOne: 1, teamTwo: 'chelsea', scoreTwo: 2 },
	{ id: '27', teamOne: 'liverpool', scoreOne: 2, teamTwo: 'manchester', scoreTwo: 6 },
	{ id: '28', teamOne: 'manchester', scoreOne: 1, teamTwo: 'liverpool', scoreTwo: 4 },
	{ id: '29', teamOne: 'arsenal', scoreOne: 5, teamTwo: 'bavaria', scoreTwo: 1 },
	{ id: '30', teamOne: 'bavaria', scoreOne: 3, teamTwo: 'arsenal', scoreTwo: 1 },
];