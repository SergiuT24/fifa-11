import RealMadrid from '../../components/league/teams/RealMadrid';
import Barcelona from '../../components/league/teams/Barcelona';
import CSKA from '../../components/league/4star-teams/Cska';
import Inter from '../../components/league/teams/Inter';
import Anji from '../../components/league/teams/Anji';
import Valencia from '../../components/league/teams/Valencia';
import Chelsea from '../../components/league/teams/Chelsea';
import ACMilan from '../../components/league/teams/AcMilan';
import FSVMainz from '../../components/league/teams/FSVMainz';


export const initialTeams = [
	{ id: 'RealMadrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: < Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'CSKA', name: < CSKA />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Inter', name: < Inter />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Anji', name: <Anji />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Valencia', name: < Valencia />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: < Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'ACMilan', name: <ACMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'FSVMainz', name: < FSVMainz />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Julls', name: 'Julls', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
]

export const matchResults = [
	{ id: '1', teamOne: 'RealMadrid', scoreOne: 1, teamTwo: 'FSVMainz', scoreTwo: 0 },
	{ id: '1', teamOne: 'FSVMainz', scoreOne: 2, teamTwo: 'RealMadrid', scoreTwo: 3 },
	{ id: '1', teamOne: 'Anji', scoreOne: 5, teamTwo: 'RealMadrid', scoreTwo: 0 },
	{ id: '1', teamOne: 'RealMadrid', scoreOne: 0, teamTwo: 'Anji', scoreTwo: 5 },
	{ id: '1', teamOne: 'Anji', scoreOne: 7, teamTwo: 'FSVMainz', scoreTwo: 0 },
	{ id: '1', teamOne: 'FSVMainz', scoreOne: 1, teamTwo: 'Anji', scoreTwo: 2 },
	{ id: '1', teamOne: 'ACMilan', scoreOne: 4, teamTwo: 'FSVMainz', scoreTwo: 1 },
	{ id: '1', teamOne: 'FSVMainz', scoreOne: 1, teamTwo: 'ACMilan', scoreTwo: 6 },
	{ id: '1', teamOne: 'Anji', scoreOne: 4, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '1', teamOne: 'ACMilan', scoreOne: 2, teamTwo: 'Anji', scoreTwo: 4 },
	{ id: '1', teamOne: 'Inter', scoreOne: 1, teamTwo: 'RealMadrid', scoreTwo: 2 },
	{ id: '1', teamOne: 'RealMadrid', scoreOne: 1, teamTwo: 'Inter', scoreTwo: 4 },
	{ id: '1', teamOne: 'Anji', scoreOne: 3, teamTwo: 'Barcelona', scoreTwo: 2 },
	{ id: '1', teamOne: 'Barcelona', scoreOne: 2, teamTwo: 'Anji', scoreTwo: 0 },
	{ id: '1', teamOne: 'Inter', scoreOne: 4, teamTwo: 'ACMilan', scoreTwo: 1 },
	{ id: '1', teamOne: 'ACMilan', scoreOne: 0, teamTwo: 'Inter', scoreTwo: 6 },
	{ id: '1', teamOne: 'ACMilan', scoreOne: 3, teamTwo: 'CSKA', scoreTwo: 2 },
	{ id: '1', teamOne: 'CSKA', scoreOne: 5, teamTwo: 'ACMilan', scoreTwo: 0 },
	{ id: '1', teamOne: 'CSKA', scoreOne: 6, teamTwo: 'FSVMainz', scoreTwo: 1 },
	{ id: '1', teamOne: 'FSVMainz', scoreOne: 1, teamTwo: 'CSKA', scoreTwo: 5 },
	{ id: '1', teamOne: 'FSVMainz', scoreOne: 6, teamTwo: 'Inter', scoreTwo: 5 },
	{ id: '1', teamOne: 'Inter', scoreOne: 6, teamTwo: 'FSVMainz', scoreTwo: 1 },
	{ id: '1', teamOne: 'RealMadrid', scoreOne: 4, teamTwo: 'Barcelona', scoreTwo: 2 },
	{ id: '1', teamOne: 'Barcelona', scoreOne: 1, teamTwo: 'RealMadrid', scoreTwo: 3 },
	{ id: '1', teamOne: 'RealMadrid', scoreOne: 2, teamTwo: 'ACMilan', scoreTwo: 1 },
	{ id: '1', teamOne: 'ACMilan', scoreOne: 4, teamTwo: 'RealMadrid', scoreTwo: 1 },
	{ id: '1', teamOne: 'Inter', scoreOne: 2, teamTwo: 'CSKA', scoreTwo: 1 },
	{ id: '1', teamOne: 'CSKA', scoreOne: 3, teamTwo: 'Inter', scoreTwo: 0 },
	{ id: '1', teamOne: 'Valencia', scoreOne: 2, teamTwo: 'CSKA', scoreTwo: 2 },
	{ id: '1', teamOne: 'CSKA', scoreOne: 0, teamTwo: 'Valencia', scoreTwo: 1 },
	{ id: '1', teamOne: 'Valencia', scoreOne: 6, teamTwo: 'FSVMainz', scoreTwo: 0 },
	{ id: '1', teamOne: 'FSVMainz', scoreOne: 0, teamTwo: 'Valencia', scoreTwo: 1 },
	{ id: '1', teamOne: 'Anji', scoreOne: 2, teamTwo: 'Inter', scoreTwo: 2 },
	{ id: '1', teamOne: 'Inter', scoreOne: 4, teamTwo: 'Anji', scoreTwo: 2 },
	{ id: '1', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Inter', scoreTwo: 8 },
	{ id: '1', teamOne: 'Inter', scoreOne: 3, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '1', teamOne: 'Anji', scoreOne: 4, teamTwo: 'Chelsea', scoreTwo: 0 },
	{ id: '1', teamOne: 'Chelsea', scoreOne: 2, teamTwo: 'Anji', scoreTwo: 4 },
	// { id: '1', teamOne: 'BocaJuniors', scoreOne: 0, teamTwo: 'Inter', scoreTwo: 7 },
	// { id: '1', teamOne: 'Inter', scoreOne: 5, teamTwo: 'BocaJuniors', scoreTwo: 2 },
	{ id: '1', teamOne: 'Valencia', scoreOne: 1, teamTwo: 'RealMadrid', scoreTwo: 2 },
	{ id: '1', teamOne: 'RealMadrid', scoreOne: 1, teamTwo: 'Valencia', scoreTwo: 2 },
	{ id: '1', teamOne: 'Inter', scoreOne: 5, teamTwo: 'Valencia', scoreTwo: 1 },
	{ id: '1', teamOne: 'Valencia', scoreOne: 4, teamTwo: 'Inter', scoreTwo: 5 },
	{ id: '1', teamOne: 'Valencia', scoreOne: 4, teamTwo: 'Barcelona', scoreTwo: 0 },
	{ id: '1', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Valencia', scoreTwo: 6 },
	{ id: '1', teamOne: 'Chelsea', scoreOne: 0, teamTwo: 'FSVMainz', scoreTwo: 3 },
]
