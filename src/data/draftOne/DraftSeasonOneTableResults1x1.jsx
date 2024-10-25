import Arsenal from '../../components/league/teams/Arsenal';
import Roma from '../../components/league/teams/Roma';
import Valencia from '../../components/league/teams/Valencia';
import Lyon from '../../components/league/teams/Lyon';
import Juventus from '../../components/league/teams/Juventus';
import AstonVilla from '../../components/league/teams/AstonVilla';
import Porto from '../../components/league/teams/Porto';
import Liverpool from '../../components/league/teams/Liverpool';
import Sevilla from '../../components/league/teams/Sevilla';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import BayernMunich from '../../components/league/teams/BayernMunich';
import AcMilan from '../../components/league/teams/AcMilan';

const initialTeams = [
	{ id: 'Porto', name: <Porto />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Roma', name: <Roma />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Valencia', name: <Valencia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Bayern Munich', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const additionalTeams = [
	{ id: 'Lyon', name: <Lyon />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sevilla', name: <Sevilla />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Juventus', name: <Juventus />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Aston Villa', name: <AstonVilla />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Manchester City', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'AC Milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

const matchResults = [
	// Played Games
	{ teamOne: 'Lyon', scoreOne: 1, teamTwo: 'Arsenal', scoreTwo: 2 },
	{ teamOne: 'Arsenal', scoreOne: 0, teamTwo: 'Lyon', scoreTwo: 8 },
	{ teamOne: 'Lyon', scoreOne: 6, teamTwo: 'Porto', scoreTwo: 2 },
	{ teamOne: 'Porto', scoreOne: 0, teamTwo: 'Lyon', scoreTwo: 3 },
	{ teamOne: 'Juventus', scoreOne: 3, teamTwo: 'Porto', scoreTwo: 0 },
	{ teamOne: 'Porto', scoreOne: 3, teamTwo: 'Juventus', scoreTwo: 2 },
	{ teamOne: 'Valencia', scoreOne: 4, teamTwo: 'Juventus', scoreTwo: 6 },
	{ teamOne: 'Roma', scoreOne: 7, teamTwo: 'Manchester City', scoreTwo: 1 },
	{ teamOne: 'Juventus', scoreOne: 2, teamTwo: 'Valencia', scoreTwo: 3 },
	{ teamOne: 'Manchester City', scoreOne: 0, teamTwo: 'Roma', scoreTwo: 0 },
	{ teamOne: 'Roma', scoreOne: 1, teamTwo: 'Aston Villa', scoreTwo: 1 },
	{ teamOne: 'Aston Villa', scoreOne: 1, teamTwo: 'Roma', scoreTwo: 0 },
	{ teamOne: 'Roma', scoreOne: 2, teamTwo: 'Lyon', scoreTwo: 1 },
	{ teamOne: 'Lyon', scoreOne: 2, teamTwo: 'Roma', scoreTwo: 2 },
	{ teamOne: 'Valencia', scoreOne: 3, teamTwo: 'Aston Villa', scoreTwo: 1 },
	{ teamOne: 'Aston Villa', scoreOne: 2, teamTwo: 'Valencia', scoreTwo: 3 },
	{ teamOne: 'Roma', scoreOne: 6, teamTwo: 'AC Milan', scoreTwo: 2 },
	{ teamOne: 'AC Milan', scoreOne: 0, teamTwo: 'Roma', scoreTwo: 3 },
	{ teamOne: 'Porto', scoreOne: 9, teamTwo: 'Aston Villa', scoreTwo: 0 },
	{ teamOne: 'Aston Villa', scoreOne: 0, teamTwo: 'Porto', scoreTwo: 6 },
	{ teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'Juventus', scoreTwo: 1 },
	{ teamOne: 'Juventus', scoreOne: 1, teamTwo: 'Arsenal', scoreTwo: 2 },
	{ teamOne: 'Valencia', scoreOne: 5, teamTwo: 'AC Milan', scoreTwo: 0 },
	{ teamOne: 'AC Milan', scoreOne: 2, teamTwo: 'Valencia', scoreTwo: 1 },
	{ teamOne: 'Lyon', scoreOne: 5, teamTwo: 'Liverpool', scoreTwo: 2 },
	{ teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'Lyon', scoreTwo: 4 },
	{ teamOne: 'Lyon', scoreOne: 5, teamTwo: 'Valencia', scoreTwo: 2 },
	{ teamOne: 'Valencia', scoreOne: 2, teamTwo: 'Lyon', scoreTwo: 2 },
	{ teamOne: 'Porto', scoreOne: 3, teamTwo: 'AC Milan', scoreTwo: 1 },
	{ teamOne: 'AC Milan', scoreOne: 0, teamTwo: 'Porto', scoreTwo: 7 },
	{ teamOne: 'Sevilla', scoreOne: 6, teamTwo: 'Liverpool', scoreTwo: 2 },
	{ teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'Sevilla', scoreTwo: 2 },
	{ teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'Manchester City', scoreTwo: 1 },
	{ teamOne: 'Manchester City', scoreOne: 2, teamTwo: 'Arsenal', scoreTwo: 1 },
	{ teamOne: 'Sevilla', scoreOne: 2, teamTwo: 'Porto', scoreTwo: 8 },
	{ teamOne: 'Porto', scoreOne: 1, teamTwo: 'Sevilla', scoreTwo: 3 },
	{ teamOne: 'Liverpool', scoreOne: 1, teamTwo: 'Juventus', scoreTwo: 1 },
	{ teamOne: 'Juventus', scoreOne: 5, teamTwo: 'Liverpool', scoreTwo: 1 },
	{ teamOne: 'Lyon', scoreOne: 4, teamTwo: 'Bayern Munich', scoreTwo: 1 },
	{ teamOne: 'Bayern Munich', scoreOne: 4, teamTwo: 'Lyon', scoreTwo: 2 },
	{ teamOne: 'AC Milan', scoreOne: 2, teamTwo: 'Arsenal', scoreTwo: 4 },
	{ teamOne: 'Arsenal', scoreOne: 0, teamTwo: 'AC Milan', scoreTwo: 5 },
	{ teamOne: 'Manchester City', scoreOne: 5, teamTwo: 'Liverpool', scoreTwo: 0 },
	{ teamOne: 'Liverpool', scoreOne: 1, teamTwo: 'Manchester City', scoreTwo: 8 },
	{ teamOne: 'Aston Villa', scoreOne: 2, teamTwo: 'Arsenal', scoreTwo: 2 },
	{ teamOne: 'Arsenal', scoreOne: 3, teamTwo: 'Aston Villa', scoreTwo: 3 },
	{ teamOne: 'Sevilla', scoreOne: 1, teamTwo: 'Valencia', scoreTwo: 6 },
	{ teamOne: 'Valencia', scoreOne: 2, teamTwo: 'Sevilla', scoreTwo: 4 },
	{ teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'Aston Villa', scoreTwo: 3 },
	{ teamOne: 'Sevilla', scoreOne: 1, teamTwo: 'Arsenal', scoreTwo: 3 },
	{ teamOne: 'Arsenal', scoreOne: 2, teamTwo: 'Sevilla', scoreTwo: 0 },
	{ teamOne: 'Manchester City', scoreOne: 5, teamTwo: 'Bayern Munich', scoreTwo: 4 },
	{ teamOne: 'Bayern Munich', scoreOne: 1, teamTwo: 'Manchester City', scoreTwo: 4 },
	{ teamOne: 'Roma', scoreOne: 2, teamTwo: 'Juventus', scoreTwo: 0 },
	{ teamOne: 'Juventus', scoreOne: 0, teamTwo: 'Roma', scoreTwo: 3 },
	{ teamOne: 'Porto', scoreOne: 1, teamTwo: 'Manchester City', scoreTwo: 4 },
	{ teamOne: 'Manchester City', scoreOne: 1, teamTwo: 'Porto', scoreTwo: 2 },
	{ teamOne: 'Valencia', scoreOne: 3, teamTwo: 'Manchester City', scoreTwo: 1 },
	{ teamOne: 'Manchester City', scoreOne: 2, teamTwo: 'Valencia', scoreTwo: 2 },
	{ teamOne: 'Aston Villa', scoreOne: 3, teamTwo: 'Liverpool', scoreTwo: 0 },
	{ teamOne: 'Bayern Munich', scoreOne: 0, teamTwo: 'Juventus', scoreTwo: 6 },
	{ teamOne: 'Juventus', scoreOne: 1, teamTwo: 'Bayern Munich', scoreTwo: 0 },
	{ teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'AC Milan', scoreTwo: 2 },
	{ teamOne: 'AC Milan', scoreOne: 0, teamTwo: 'Liverpool', scoreTwo: 2 },
	{ teamOne: 'Bayern Munich', scoreOne: 0, teamTwo: 'Aston Villa', scoreTwo: 5 },
	{ teamOne: 'Aston Villa', scoreOne: 2, teamTwo: 'Bayern Munich', scoreTwo: 2 },
	{ teamOne: 'Bayern Munich', scoreOne: 2, teamTwo: 'AC Milan', scoreTwo: 1 },
	{ teamOne: 'AC Milan', scoreOne: 1, teamTwo: 'Bayern Munich', scoreTwo: 0 },
	// Group A
	// Roma
	{ teamOne: 'Roma', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	// Bayern Munich
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },

	// Group B
	// Sevilla
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Roma', scoreTwo: '?' },
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
];

export { initialTeams, additionalTeams, matchResults };
