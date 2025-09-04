import Juventus from '../../components/league/teams/Juventus';
import ACMilan from '../../components/league/teams/AcMilan';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import Sevilla from '../../components/league/teams/Sevilla';
import AtleticoMadrid from '../../components/league/teams/AtleticoMadrid';
import Barcelona from '../../components/league/teams/Barcelona';
import Lyon from '../../components/league/teams/Lyon';
import Liverpool from '../../components/league/teams/Liverpool';
import Tottenham from '../../components/league/teams/Tottenham';
import Inter from '../../components/league/teams/Inter';
import Roma from '../../components/league/teams/Roma';
import BayernMunich from '../../components/league/teams/BayernMunich';

export const initialTeams = [
	{ id: 'Sevilla', name: <Sevilla />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'BayernMunich', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterUnited', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Juventus', name: <Juventus />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterCity', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lyon', name: <Lyon />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Roma', name: <Roma />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Tottenham', name: <Tottenham />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Inter', name: <Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'AtleticoMadrid', name: <AtleticoMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]

export const matchResults = [
	{ id: '1', teamOne: 'BayernMunich', scoreOne: 4, teamTwo: 'Juventus', scoreTwo: 3 },
	{ id: '2', teamOne: 'Juventus', scoreOne: 2, teamTwo: 'BayernMunich', scoreTwo: 1 },
	{ id: '3', teamOne: 'Barcelona', scoreOne: 4, teamTwo: 'BayernMunich', scoreTwo: 5 },
	{ id: '4', teamOne: 'BayernMunich', scoreOne: 4, teamTwo: 'Barcelona', scoreTwo: 0 },
	{ id: '5', teamOne: 'Barcelona', scoreOne: 7, teamTwo: 'Juventus', scoreTwo: 2 },
	{ id: '6', teamOne: 'Juventus', scoreOne: 6, teamTwo: 'Barcelona', scoreTwo: 3 },
	{ id: '7', teamOne: 'ManchesterCity', scoreOne: 4, teamTwo: 'Roma', scoreTwo: 4 },
	{ id: '8', teamOne: 'Roma', scoreOne: 1, teamTwo: 'ManchesterCity', scoreTwo: 2 },
	{ id: '9', teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'Juventus', scoreTwo: 3 },
	{ id: '10', teamOne: 'Juventus', scoreOne: 7, teamTwo: 'Liverpool', scoreTwo: 3 },
	{ id: '11', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Liverpool', scoreTwo: 2 },
	{ id: '12', teamOne: 'Liverpool', scoreOne: 3, teamTwo: 'Barcelona', scoreTwo: 2 },
	{ id: '13', teamOne: 'BayernMunich', scoreOne: 4, teamTwo: 'Liverpool', scoreTwo: 4 },
	{ id: '14', teamOne: 'Liverpool', scoreOne: 4, teamTwo: 'BayernMunich', scoreTwo: 6 },
	{ id: '9', teamOne: 'ManchesterUnited', scoreOne: 3, teamTwo: 'Juventus', scoreTwo: 4 },
	{ id: '10', teamOne: 'Juventus', scoreOne: 5, teamTwo: 'ManchesterUnited', scoreTwo: 1 },
	{ id: '9', teamOne: 'ManchesterUnited', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'ManchesterUnited', scoreTwo: 2 },
	{ id: '9', teamOne: 'ManchesterUnited', scoreOne: 7, teamTwo: 'Sevilla', scoreTwo: 1 },
	{ id: '10', teamOne: 'Sevilla', scoreOne: 5, teamTwo: 'ManchesterUnited', scoreTwo: 0 },
	{ id: '9', teamOne: 'ManchesterUnited', scoreOne: 4, teamTwo: 'BayernMunich', scoreTwo: 4 },
	{ id: '10', teamOne: 'BayernMunich', scoreOne: 2, teamTwo: 'ManchesterUnited', scoreTwo: 1 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Sevilla', scoreTwo: 4 },
	{ id: '9', teamOne: 'Sevilla', scoreOne: 6, teamTwo: 'Barcelona', scoreTwo: 3 },
	{ id: '10', teamOne: 'AtleticoMadrid', scoreOne: 3, teamTwo: 'ManchesterCity', scoreTwo: 1 },
	{ id: '9', teamOne: 'ManchesterCity', scoreOne: 4, teamTwo: 'AtleticoMadrid', scoreTwo: 1 },
	{ id: '10', teamOne: 'AtleticoMadrid', scoreOne: 3, teamTwo: 'Roma', scoreTwo: 2 },
	{ id: '9', teamOne: 'Roma', scoreOne: 2, teamTwo: 'AtleticoMadrid', scoreTwo: 1 },
	{ id: '10', teamOne: 'BayernMunich', scoreOne: 8, teamTwo: 'Sevilla', scoreTwo: 1 },
	{ id: '9', teamOne: 'Sevilla', scoreOne: 2, teamTwo: 'BayernMunich', scoreTwo: 3 },
	{ id: '10', teamOne: 'ACMilan', scoreOne: 2, teamTwo: 'ManchesterCity', scoreTwo: 3 },
	{ id: '9', teamOne: 'ManchesterCity', scoreOne: 0, teamTwo: 'ACMilan', scoreTwo: 1 },
	{ id: '9', teamOne: 'ManchesterUnited', scoreOne: 2, teamTwo: 'Liverpool', scoreTwo: 2 },
	{ id: '10', teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'ManchesterUnited', scoreTwo: 2 },
	{ id: '9', teamOne: 'Lyon', scoreOne: 0, teamTwo: 'Roma', scoreTwo: 6 },
	{ id: '10', teamOne: 'Roma', scoreOne: 5, teamTwo: 'Lyon', scoreTwo: 3 },
]
