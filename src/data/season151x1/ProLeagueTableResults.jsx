import Juventus from '../../components/league/teams/Juventus';
import Arsenal from '../../components/league/teams/Arsenal';
import ACMilan from '../../components/league/teams/AcMilan';
import ManchesterCity from '../../components/league/teams/ManchesterCity';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import RealMadrid from '../../components/league/teams/RealMadrid';
import Barcelona from '../../components/league/teams/Barcelona';
import Lyon from '../../components/league/teams/Lyon';
import Liverpool from '../../components/league/teams/Liverpool';
import Tottenham from '../../components/league/teams/Tottenham';
import Inter from '../../components/league/teams/Inter';
import Chelsea from '../../components/league/teams/Chelsea';
import AtleticoMadrid from '../../components/league/teams/AtleticoMadrid';

export const initialTeams = [
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterCity', name: <ManchesterCity />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'RealMadrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lyon', name: <Lyon />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'AtleticoMadrid', name: <AtleticoMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Juventus', name: <Juventus />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ManchesterUnited', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Tottenham', name: <Tottenham />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Inter', name: <Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: <Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },

]

export const matchResults = [
	{ id: '123', teamOne: 'Inter', scoreOne: 3, teamTwo: 'Tottenham', scoreTwo: 1 },
{ id: '123', teamOne: 'Tottenham', scoreOne: 3, teamTwo: 'Inter', scoreTwo: 3 },
{ id: '123', teamOne: 'Liverpool', scoreOne: 3, teamTwo: 'Inter', scoreTwo: 1 },
{ id: '123', teamOne: 'Inter', scoreOne: 2, teamTwo: 'Liverpool', scoreTwo: 5 },
{ id: '123', teamOne: 'RealMadrid', scoreOne: 5, teamTwo: 'AtleticoMadrid', scoreTwo: 2 },
{ id: '123', teamOne: 'AtleticoMadrid', scoreOne: 3, teamTwo: 'RealMadrid', scoreTwo: 6 },
{ id: '123', teamOne: 'Tottenham', scoreOne: 3, teamTwo: 'Liverpool', scoreTwo: 2 },
{ id: '123', teamOne: 'Liverpool', scoreOne: 4, teamTwo: 'Tottenham', scoreTwo: 2 },
{ id: '123', teamOne: 'AtleticoMadrid', scoreOne: 7, teamTwo: 'Arsenal', scoreTwo: 1 },
{ id: '123', teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'AtleticoMadrid', scoreTwo: 6 },
{ id: '123', teamOne: 'Barcelona', scoreOne: 2, teamTwo: 'Liverpool', scoreTwo: 2 },
{ id: '123', teamOne: 'Liverpool', scoreOne: 5, teamTwo: 'Barcelona', scoreTwo: 0 },
{ id: '123', teamOne: 'RealMadrid', scoreOne: 3, teamTwo: 'Arsenal', scoreTwo: 0 },
{ id: '123', teamOne: 'Arsenal', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 10 },
{ id: '123', teamOne: 'Tottenham', scoreOne: 2, teamTwo: 'Barcelona', scoreTwo: 1 },
{ id: '123', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Tottenham', scoreTwo: 8 },
{ id: '123', teamOne: 'RealMadrid', scoreOne: 3, teamTwo: 'Lyon', scoreTwo: 2 },
{ id: '123', teamOne: 'Lyon', scoreOne: 0, teamTwo: 'RealMadrid', scoreTwo: 1 },
{ id: '123', teamOne: 'ACMilan', scoreOne: 1, teamTwo: 'Lyon', scoreTwo: 3 },
{ id: '123', teamOne: 'Lyon', scoreOne: 1, teamTwo: 'ACMilan', scoreTwo: 3 },
{ id: '123', teamOne: 'Lyon', scoreOne: 3, teamTwo: 'Arsenal', scoreTwo: 3 },
{ id: '123', teamOne: 'Arsenal', scoreOne: 2, teamTwo: 'Lyon', scoreTwo: 3 },
{ id: '123', teamOne: 'ACMilan', scoreOne: 2, teamTwo: 'Arsenal', scoreTwo: 3 },
{ id: '123', teamOne: 'Arsenal', scoreOne: 3, teamTwo: 'ACMilan', scoreTwo: 1 },
{ id: '123', teamOne: 'ACMilan', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 6 },
{ id: '123', teamOne: 'RealMadrid', scoreOne: 2, teamTwo: 'ACMilan', scoreTwo: 6 },
	{ id: '123', teamOne: 'AtleticoMadrid', scoreOne: 3, teamTwo: 'Lyon', scoreTwo: 3 },
	{ id: '123', teamOne: 'Lyon', scoreOne: 4, teamTwo: 'AtleticoMadrid', scoreTwo: 2 },
	{ id: '123', teamOne: 'AtleticoMadrid', scoreOne: 5, teamTwo: 'ACMilan', scoreTwo: 3 },
	{ id: '123', teamOne: 'ACMilan', scoreOne: 3, teamTwo: 'AtleticoMadrid', scoreTwo: 0 },
	{ id: '123', teamOne: 'ManchesterCity', scoreOne: 2, teamTwo: 'Lyon', scoreTwo: 2 },
	{ id: '123', teamOne: 'Lyon', scoreOne: 2, teamTwo: 'ManchesterCity', scoreTwo: 4 },
	{ id: '123', teamOne: 'RealMadrid', scoreOne: 3, teamTwo: 'ManchesterCity', scoreTwo: 2 },
	{ id: '123', teamOne: 'ManchesterCity', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 6 },
	{ id: '123', teamOne: 'Tottenham', scoreOne: 4, teamTwo: 'Juventus', scoreTwo: 0 },
	{ id: '123', teamOne: 'Juventus', scoreOne: 3, teamTwo: 'Tottenham', scoreTwo: 3 },
	{ id: '123', teamOne: 'ManchesterUnited', scoreOne: 1, teamTwo: 'Chelsea', scoreTwo: 3 },
	{ id: '123', teamOne: 'Chelsea', scoreOne: 4, teamTwo: 'ManchesterUnited', scoreTwo: 1 },
	{ id: '123', teamOne: 'ManchesterCity', scoreOne: 11, teamTwo: 'AtleticoMadrid', scoreTwo: 3 },
	{ id: '123', teamOne: 'AtleticoMadrid', scoreOne: 4, teamTwo: 'ManchesterCity', scoreTwo: 1 },
	{ id: '123', teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'ManchesterCity', scoreTwo: 2 },
	{ id: '123', teamOne: 'ManchesterCity', scoreOne: 1, teamTwo: 'Arsenal', scoreTwo: 3 },
]
