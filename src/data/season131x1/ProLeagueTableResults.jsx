import Everton from '../../components/league/4star-teams/Everton';
import Genoa from '../../components/league/4star-teams/Genoa';
import Leverkusen from '../../components/league/4star-teams/Leverkusen';
import Sampdoria from '../../components/league/4star-teams/Sampdoria';
import Schalke from '../../components/league/4star-teams/Schalke';
import Sporting from '../../components/league/4star-teams/Sporting';
import Stuttgart from '../../components/league/4star-teams/Stuttgart';
import Villarreal from '../../components/league/4star-teams/Villarreal';
import Zenit from '../../components/league/4star-teams/Zenit';
import PSV from '../../components/league/4star-teams/Psv';


export const initialTeams = [
	{ id: 'Everton', name: <Everton />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Genoa', name: <Genoa />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Leverkusen', name: <Leverkusen />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sampdoria', name: <Sampdoria />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Schalke', name: <Schalke />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Sporting', name: <Sporting />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Stuttgart', name: <Stuttgart />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Villarreal', name: <Villarreal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Zenit', name: <Zenit />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'PSV', name: <PSV />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const additionalTeams = [
	{ id: 'empty', name: 'empty', mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
]

export const matchResults = [
	{ id: '3', teamOne: 'Villarreal', scoreOne: 0, teamTwo: 'Stuttgart', scoreTwo: 3 },
	{ id: '4', teamOne: 'Stuttgart', scoreOne: 6, teamTwo: 'Villarreal', scoreTwo: 0 },
	{ id: '5', teamOne: 'Sampdoria', scoreOne: 3, teamTwo: 'Villarreal', scoreTwo: 2 },
	{ id: '6', teamOne: 'Villarreal', scoreOne: 4, teamTwo: 'Sampdoria', scoreTwo: 2 },
	{ id: '7', teamOne: 'Sporting', scoreOne: 2, teamTwo: 'Everton', scoreTwo: 1 },
	{ id: '8', teamOne: 'Everton', scoreOne: 5, teamTwo: 'Sporting', scoreTwo: 2 },
	{ id: '9', teamOne: 'Schalke', scoreOne: 3, teamTwo: 'Stuttgart', scoreTwo: 4 },
	{ id: '10', teamOne: 'Stuttgart', scoreOne: 2, teamTwo: 'Schalke', scoreTwo: 3 },
	{ id: '11', teamOne: 'Everton', scoreOne: 4, teamTwo: 'Sampdoria', scoreTwo: 0 },
	{ id: '12', teamOne: 'Sampdoria', scoreOne: 6, teamTwo: 'Everton', scoreTwo: 3 },
	{ id: '13', teamOne: 'Sampdoria', scoreOne: 3, teamTwo: 'Stuttgart', scoreTwo: 1 },
	{ id: '14', teamOne: 'Stuttgart', scoreOne: 0, teamTwo: 'Sampdoria', scoreTwo: 2 },
	{ id: '15', teamOne: 'Sampdoria', scoreOne: 0, teamTwo: 'Schalke', scoreTwo: 3 },
	{ id: '16', teamOne: 'Schalke', scoreOne: 2, teamTwo: 'Sampdoria', scoreTwo: 1 },
	{ id: '17', teamOne: 'Everton', scoreOne: 2, teamTwo: 'Villarreal', scoreTwo: 2 },
	{ id: '18', teamOne: 'Villarreal', scoreOne: 2, teamTwo: 'Everton', scoreTwo: 5 },
	{ id: '19', teamOne: 'Everton', scoreOne: 5, teamTwo: 'PSV', scoreTwo: 2 },
	{ id: '20', teamOne: 'PSV', scoreOne: 3, teamTwo: 'Everton', scoreTwo: 4 },
	{ id: '21', teamOne: 'Villarreal', scoreOne: 1, teamTwo: 'PSV', scoreTwo: 6 },
	{ id: '22', teamOne: 'PSV', scoreOne: 3, teamTwo: 'Villarreal', scoreTwo: 0 },
	{ id: '23', teamOne: 'Schalke', scoreOne: 4, teamTwo: 'Everton', scoreTwo: 4 },
	{ id: '24', teamOne: 'Everton', scoreOne: 3, teamTwo: 'Schalke', scoreTwo: 4 },
	{ id: '25', teamOne: 'Schalke', scoreOne: 1, teamTwo: 'PSV', scoreTwo: 6 },
	{ id: '26', teamOne: 'PSV', scoreOne: 0, teamTwo: 'Schalke', scoreTwo: 1 },
	{ id: '27', teamOne: 'Villarreal', scoreOne: 0, teamTwo: 'Schalke', scoreTwo: 3 },
	{ id: '28', teamOne: 'Schalke', scoreOne: 2, teamTwo: 'Villarreal', scoreTwo: 0 },
	{ id: '29', teamOne: 'Sporting', scoreOne: 3, teamTwo: 'PSV', scoreTwo: 2 },
	{ id: '30', teamOne: 'PSV', scoreOne: 1, teamTwo: 'Sporting', scoreTwo: 2 },
	{ id: '31', teamOne: 'Sampdoria', scoreOne: 0, teamTwo: 'PSV', scoreTwo: 1 },
	{ id: '32', teamOne: 'PSV', scoreOne: 3, teamTwo: 'Sampdoria', scoreTwo: 6 },
	{ id: '33', teamOne: 'Sporting', scoreOne: 3, teamTwo: 'Schalke', scoreTwo: 1 },
	{ id: '34', teamOne: 'Schalke', scoreOne: 6, teamTwo: 'Sporting', scoreTwo: 2 },
	{ id: '35', teamOne: 'Sporting', scoreOne: 3, teamTwo: 'Sampdoria', scoreTwo: 3 },
	{ id: '36', teamOne: 'Sampdoria', scoreOne: 1, teamTwo: 'Sporting', scoreTwo: 1 },
	{ id: '37', teamOne: 'Zenit', scoreOne: 4, teamTwo: 'Everton', scoreTwo: 3 },
	{ id: '38', teamOne: 'Everton', scoreOne: 3, teamTwo: 'Zenit', scoreTwo: 2 },
	{ id: '39', teamOne: 'PSV', scoreOne: 0, teamTwo: 'Genoa', scoreTwo: 1 },
	{ id: '40', teamOne: 'Genoa', scoreOne: 4, teamTwo: 'PSV', scoreTwo: 2 },
	{ id: '41', teamOne: 'Zenit', scoreOne: 8, teamTwo: 'Villarreal', scoreTwo: 1 },
	{ id: '42', teamOne: 'Villarreal', scoreOne: 0, teamTwo: 'Zenit', scoreTwo: 3 },
	{ id: '43', teamOne: 'Sampdoria', scoreOne: 2, teamTwo: 'Leverkusen', scoreTwo: 2 },
	{ id: '44', teamOne: 'Leverkusen', scoreOne: 8, teamTwo: 'Sampdoria', scoreTwo: 1 },
	{ id: '45', teamOne: 'Zenit', scoreOne: 3, teamTwo: 'Schalke', scoreTwo: 1 },
	{ id: '46', teamOne: 'Schalke', scoreOne: 5, teamTwo: 'Zenit', scoreTwo: 2 },
	{ id: '47', teamOne: 'Zenit', scoreOne: 2, teamTwo: 'Sampdoria', scoreTwo: 3 },
	{ id: '48', teamOne: 'Sampdoria', scoreOne: 5, teamTwo: 'Zenit', scoreTwo: 3 },
	{ id: '49', teamOne: 'Zenit', scoreOne: 5, teamTwo: 'PSV', scoreTwo: 2 },
	{ id: '50', teamOne: 'PSV', scoreOne: 5, teamTwo: 'Zenit', scoreTwo: 6 },
	{ id: '51', teamOne: 'Sporting', scoreOne: 2, teamTwo: 'Villarreal', scoreTwo: 0 },
	{ id: '52', teamOne: 'Villarreal', scoreOne: 2, teamTwo: 'Sporting', scoreTwo: 3 },

]
