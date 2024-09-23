import AtleticoMadrid from '../../components/league/teams/AtleticoMadrid';
import AcMilan from '../../components/league/teams/AcMilan';
import BayernMunich from '../../components/league/teams/BayernMunich';
import Arsenal from '../../components/league/teams/Arsenal';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import Lyon from '../../components/league/teams/Lyon';

export const initialTeams = [
	{ id: 'Atletico Madrid', name: <AtleticoMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'AC Milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Bayern Munich', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Manchester City', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lyon', name: <Lyon />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 2, teamTwo: 'Manchester City', scoreTwo: 3 },
	{ id: '5', teamOne: 'Manchester City', scoreOne: 0, teamTwo: 'Bayern Munich', scoreTwo: 2 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 6, teamTwo: 'Lyon', scoreTwo: 2 },
	{ id: '6', teamOne: 'Lyon', scoreOne: 4, teamTwo: 'Bayern Munich', scoreTwo: 1 },
	{ id: '5', teamOne: 'Manchester City', scoreOne: 1, teamTwo: 'Arsenal', scoreTwo: 0 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 4, teamTwo: 'Manchester City', scoreTwo: 2 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 2, teamTwo: 'Bayern Munich', scoreTwo: 1 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 2, teamTwo: 'Arsenal', scoreTwo: 1 },
	{ id: '6', teamOne: 'Lyon', scoreOne: 1, teamTwo: 'Arsenal', scoreTwo: 4 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'Lyon', scoreTwo: 2 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 2, teamTwo: 'Atletico Madrid', scoreTwo: 4 },
	{ id: '1', teamOne: 'Atletico Madrid', scoreOne: 4, teamTwo: 'Bayern Munich', scoreTwo: 2 },
	// Atletico Madrid
	{ id: '1', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '1', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '1', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ id: '1', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	// AC Milan
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	// Bayern Munich
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Arsenal
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Manchester City
	{ id: '5', teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '5', teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '5', teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	// Lyon
	{ id: '6', teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '6', teamOne: 'Lyon', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '6', teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
];