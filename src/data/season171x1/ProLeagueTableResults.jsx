import Stuttgart from '../../components/league/4star-teams/Stuttgart';
import Bilbao from '../../components/league/4star-teams/Bilbao';
import Genoa from '../../components/league/4star-teams/Genoa';
import Dortmund from '../../components/league/4star-teams/Dortmund';
import Schalke from '../../components/league/4star-teams/Schalke';
import Werder from '../../components/league/4star-teams/Werder';
import Napoli from '../../components/league/4star-teams/Napoli';
import Villarreal from '../../components/league/4star-teams/Villarreal';
import Everton from '../../components/league/4star-teams/Everton';
import Lille from '../../components/league/4star-teams/Lille';
import Galatasaray from '../../components/league/4star-teams/Galatasaray';


export const initialTeams = [
	{ id: 'Stuttgart', name: <Stuttgart />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lille', name: <Lille />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Dortmund', name: <Dortmund />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Werder', name: <Werder />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Napoli', name: <Napoli />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'Bilbao', name: <Bilbao />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Genoa', name: <Genoa />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Schalke', name: <Schalke />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Villarreal', name: <Villarreal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Everton', name: <Everton />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Galatasaray', name: <Galatasaray />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]

export const matchResults = [
	{ id: '1', teamOne: 'Werder', scoreOne: 7, teamTwo: 'Napoli', scoreTwo: 0 },
	{ id: '2', teamOne: 'Napoli', scoreOne: 9, teamTwo: 'Werder', scoreTwo: 3 },
	{ id: '1', teamOne: 'Everton', scoreOne: 5, teamTwo: 'Villarreal', scoreTwo: 0 },
	{ id: '2', teamOne: 'Villarreal', scoreOne: 4, teamTwo: 'Everton', scoreTwo: 0 },
	{ id: '1', teamOne: 'Werder', scoreOne: 4, teamTwo: 'Stuttgart', scoreTwo: 1 },
	{ id: '2', teamOne: 'Stuttgart', scoreOne: 2, teamTwo: 'Werder', scoreTwo: 1 },
	{ id: '1', teamOne: 'Werder', scoreOne: 5, teamTwo: 'Dortmund', scoreTwo: 3 },
	{ id: '2', teamOne: 'Dortmund', scoreOne: 3, teamTwo: 'Werder', scoreTwo: 1 },
	{ id: '1', teamOne: 'Everton', scoreOne: 2, teamTwo: 'Schalke', scoreTwo: 4 },
	{ id: '2', teamOne: 'Schalke', scoreOne: 5, teamTwo: 'Everton', scoreTwo: 2 },
	{ id: '1', teamOne: 'Stuttgart', scoreOne: 3, teamTwo: 'Dortmund', scoreTwo: 2 },
	{ id: '2', teamOne: 'Dortmund', scoreOne: 2, teamTwo: 'Stuttgart', scoreTwo: 1 },
	{ id: '3', teamOne: 'Galatasaray', scoreOne: 3, teamTwo: 'Villarreal', scoreTwo: 0 },
	{ id: '4', teamOne: 'Villarreal', scoreOne: 1, teamTwo: 'Galatasaray', scoreTwo: 3 },
	{ id: '7', teamOne: 'Villarreal', scoreOne: 2, teamTwo: 'Bilbao', scoreTwo: 2 },
	{ id: '8', teamOne: 'Bilbao', scoreOne: 1, teamTwo: 'Villarreal', scoreTwo: 5 },
	{ id: '9', teamOne: 'Napoli', scoreOne: 2, teamTwo: 'Stuttgart', scoreTwo: 3 },
	{ id: '10', teamOne: 'Stuttgart', scoreOne: 2, teamTwo: 'Napoli', scoreTwo: 2 },
	{ id: '11', teamOne: 'Everton', scoreOne: 3, teamTwo: 'Genoa', scoreTwo: 2 },
	{ id: '12', teamOne: 'Genoa', scoreOne: 2, teamTwo: 'Everton', scoreTwo: 3 },
	{ id: '13', teamOne: 'Genoa', scoreOne: 5, teamTwo: 'Bilbao', scoreTwo: 0 },
	{ id: '14', teamOne: 'Bilbao', scoreOne: 1, teamTwo: 'Genoa', scoreTwo: 2 },
	{ id: '15', teamOne: 'Everton', scoreOne: 2, teamTwo: 'Bilbao', scoreTwo: 1 },
	{ id: '16', teamOne: 'Bilbao', scoreOne: 2, teamTwo: 'Everton', scoreTwo: 0 },
	{ id: '9', teamOne: 'Napoli', scoreOne: 3, teamTwo: 'Lille', scoreTwo: 1 },
	{ id: '10', teamOne: 'Lille', scoreOne: 3, teamTwo: 'Napoli', scoreTwo: 2 },
	{ id: '9', teamOne: 'Stuttgart', scoreOne: 2, teamTwo: 'Lille', scoreTwo: 3 },
	{ id: '10', teamOne: 'Lille', scoreOne: 3, teamTwo: 'Stuttgart', scoreTwo: 3 },
	{ id: '1', teamOne: 'Genoa', scoreOne: 0, teamTwo: 'Schalke', scoreTwo: 4 },
	{ id: '2', teamOne: 'Schalke', scoreOne: 1, teamTwo: 'Genoa', scoreTwo: 2 },
	{ id: '3', teamOne: 'Villarreal', scoreOne: 2, teamTwo: 'Schalke', scoreTwo: 0 },
	{ id: '4', teamOne: 'Schalke', scoreOne: 3, teamTwo: 'Villarreal', scoreTwo: 0 },
	{ id: '5', teamOne: 'Genoa', scoreOne: 0, teamTwo: 'Villarreal', scoreTwo: 0 },
	{ id: '6', teamOne: 'Villarreal', scoreOne: 1, teamTwo: 'Genoa', scoreTwo: 2 },
	{ id: '7', teamOne: 'Napoli', scoreOne: 2, teamTwo: 'Dortmund', scoreTwo: 3 },
	{ id: '8', teamOne: 'Dortmund', scoreOne: 2, teamTwo: 'Napoli', scoreTwo: 2 },
	{ id: '7', teamOne: 'Werder', scoreOne: 2, teamTwo: 'Lille', scoreTwo: 1 },
	{ id: '8', teamOne: 'Lille', scoreOne: 4, teamTwo: 'Werder', scoreTwo: 3 },
	{ id: '3', teamOne: 'Galatasaray', scoreOne: 3, teamTwo: 'Bilbao', scoreTwo: 0 },
	{ id: '4', teamOne: 'Bilbao', scoreOne: 1, teamTwo: 'Galatasaray', scoreTwo: 7 },
	{ id: '8', teamOne: 'Lille', scoreOne: 3, teamTwo: 'Dortmund', scoreTwo: 5 },
	{ id: '7', teamOne: 'Dortmund', scoreOne: 1, teamTwo: 'Lille', scoreTwo: 3 },
]
