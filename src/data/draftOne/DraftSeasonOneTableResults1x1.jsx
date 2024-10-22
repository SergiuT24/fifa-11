import Porto from '../../components/league/teams/Porto';
import Arsenal from '../../components/league/teams/Arsenal';
import Roma from '../../components/league/teams/Roma';
import Valencia from '../../components/league/teams/Valencia';
import BayernMunich from '../../components/league/teams/BayernMunich';
import Liverpool from '../../components/league/teams/Liverpool';
import Lyon from '../../components/league/teams/Lyon';
import Sevilla from '../../components/league/teams/Sevilla';
import Juventus from '../../components/league/teams/Juventus';
import AstonVilla from '../../components/league/teams/AstonVilla';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
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

	// Group A
	// Porto
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'Juventus', scoreTwo: '?' },
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'Aston Villa', scoreTwo: '?' },
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Porto', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Liverpool
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Juventus', scoreTwo: '?' },
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Aston Villa', scoreTwo: '?' },
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Arsenal
	{ teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Juventus', scoreTwo: '?' },
	{ teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Aston Villa', scoreTwo: '?' },
	{ teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Roma
	{ teamOne: 'Roma', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ teamOne: 'Roma', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Roma', scoreOne: '?', teamTwo: 'Juventus', scoreTwo: '?' },
	{ teamOne: 'Roma', scoreOne: '?', teamTwo: 'Aston Villa', scoreTwo: '?' },
	{ teamOne: 'Roma', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Roma', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Valencia
	{ teamOne: 'Valencia', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ teamOne: 'Valencia', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Valencia', scoreOne: '?', teamTwo: 'Juventus', scoreTwo: '?' },
	{ teamOne: 'Valencia', scoreOne: '?', teamTwo: 'Aston Villa', scoreTwo: '?' },
	{ teamOne: 'Valencia', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Valencia', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	// Bayern Munich
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Sevilla', scoreTwo: '?' },
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Juventus', scoreTwo: '?' },
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Aston Villa', scoreTwo: '?' },
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Manchester City', scoreTwo: '?' },
	{ teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },

	// Group B
	// Lyon
	{ teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	{ teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Roma', scoreTwo: '?' },
	{ teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Valencia', scoreTwo: '?' },
	{ teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// Sevilla
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Roma', scoreTwo: '?' },
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Valencia', scoreTwo: '?' },
	{ teamOne: 'Sevilla', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// Juventus
	{ teamOne: 'Juventus', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	{ teamOne: 'Juventus', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'Juventus', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ teamOne: 'Juventus', scoreOne: '?', teamTwo: 'Roma', scoreTwo: '?' },
	{ teamOne: 'Juventus', scoreOne: '?', teamTwo: 'Valencia', scoreTwo: '?' },
	{ teamOne: 'Juventus', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// Aston Villa
	{ teamOne: 'Aston Villa', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	{ teamOne: 'Aston Villa', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'Aston Villa', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ teamOne: 'Aston Villa', scoreOne: '?', teamTwo: 'Roma', scoreTwo: '?' },
	{ teamOne: 'Aston Villa', scoreOne: '?', teamTwo: 'Valencia', scoreTwo: '?' },
	{ teamOne: 'Aston Villa', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// Manchester City
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Roma', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Valencia', scoreTwo: '?' },
	{ teamOne: 'Manchester City', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// AC Milan
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Porto', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Roma', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Valencia', scoreTwo: '?' },
	{ teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
];

export { initialTeams, additionalTeams, matchResults };
