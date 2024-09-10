import AcMilan from '../../components/league/teams/AcMilan';
import BayernMunich from '../../components/league/teams/BayernMunich';
import Arsenal from '../../components/league/teams/Arsenal';
import Liverpool from '../../components/league/teams/Liverpool';
import ManchesterUnited from '../../components/league/teams/ManchesterUnited';
import Chelsea from '../../components/league/teams/Chelsea';
import RealMadrid from '../../components/league/teams/RealMadrid';
import AtleticoMadrid from '../../components/league/teams/AtleticoMadrid';
import Lyon from '../../components/league/teams/Lyon';
import Barcelona from '../../components/league/teams/Barcelona';

export const initialTeams = [
	{ id: 'Real Madrid', name: <RealMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'AC Milan', name: <AcMilan />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Bayern Munich', name: <BayernMunich />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Arsenal', name: <Arsenal />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Liverpool', name: <Liverpool />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Manchester United', name: <ManchesterUnited />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Chelsea', name: <Chelsea />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Lyon', name: <Lyon />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Atletico Madrid', name: <AtleticoMadrid />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
	{ id: 'Barcelona', name: <Barcelona />, mp: 0, w: 0, d: 0, l: 0, g: 0, gc: 0, pts: 0, form: [] },
];

export const matchResults = [
	// Played Games
	{ id: '4', teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'Chelsea', scoreTwo: 1 },
	{ id: '7', teamOne: 'Chelsea', scoreOne: 1, teamTwo: 'Arsenal', scoreTwo: 1 },
	{ id: '5', teamOne: 'Liverpool', scoreOne: 1, teamTwo: 'Atletico Madrid', scoreTwo: 1 },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: 3, teamTwo: 'Liverpool', scoreTwo: 5 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 5, teamTwo: 'Liverpool', scoreTwo: 1 },
	{ id: '5', teamOne: 'Liverpool', scoreOne: 2, teamTwo: 'Lyon', scoreTwo: 1 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'Bayern Munich', scoreTwo: 5 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 1, teamTwo: 'Arsenal', scoreTwo: 2 },
	{ id: '7', teamOne: 'Chelsea', scoreOne: 5, teamTwo: 'Lyon', scoreTwo: 5 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 0, teamTwo: 'Chelsea', scoreTwo: 3 },
	{ id: '7', teamOne: 'Chelsea', scoreOne: 3, teamTwo: 'Manchester United', scoreTwo: 3 },
	{ id: '6', teamOne: 'Manchester United', scoreOne: 2, teamTwo: 'Chelsea', scoreTwo: 4 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 5, teamTwo: 'AC Milan', scoreTwo: 2 },
	{ id: '2', teamOne: 'AC Milan', scoreOne: 4, teamTwo: 'Lyon', scoreTwo: 1 },
	{ id: '7', teamOne: 'Chelsea', scoreOne: 1, teamTwo: 'Bayern Munich', scoreTwo: 3 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 4, teamTwo: 'Chelsea', scoreTwo: 1 },
	{ id: '7', teamOne: 'Chelsea', scoreOne: 0, teamTwo: 'AC Milan', scoreTwo: 2 },
	{ id: '2', teamOne: 'AC Milan', scoreOne: 0, teamTwo: 'Chelsea', scoreTwo: 4 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 2, teamTwo: 'Barcelona', scoreTwo: 0 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 0, teamTwo: 'Arsenal', scoreTwo: 3 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 4, teamTwo: 'Lyon', scoreTwo: 3 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 3, teamTwo: 'Bayern Munich', scoreTwo: 1 },
	// Real Madrid
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Chelsea', scoreTwo: '?' },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	// AC Milan
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	// Bayern Munich
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	// Arsenal
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	// Liverpool
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Chelsea', scoreTwo: '?' },
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// Manchester United
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// Chelsea 
	{ id: '7', teamOne: 'Chelsea', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '7', teamOne: 'Chelsea', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '7', teamOne: 'Chelsea', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '7', teamOne: 'Chelsea', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	// Lyon
	{ id: '8', teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '8', teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '8', teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '8', teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '8', teamOne: 'Lyon', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	// Atletico Madrid
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Chelsea', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// Barcelona
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'Lyon', scoreTwo: '?' },
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'Chelsea', scoreTwo: '?' },
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
];