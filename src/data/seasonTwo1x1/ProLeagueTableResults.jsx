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
	{ id: '1', teamOne: 'Real Madrid', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 3 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Real Madrid', scoreTwo: 3 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 0, teamTwo: 'Lyon', scoreTwo: 8 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 0, teamTwo: 'Barcelona', scoreTwo: 2 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 1, teamTwo: 'Bayern Munich', scoreTwo: 3 },
	{ id: '6', teamOne: 'Manchester United', scoreOne: 2, teamTwo: 'Bayern Munich', scoreTwo: 3 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 3, teamTwo: 'Liverpool', scoreTwo: 0 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 4, teamTwo: 'Manchester United', scoreTwo: 0 },
	{ id: '5', teamOne: 'Liverpool', scoreOne: 0, teamTwo: 'Bayern Munich', scoreTwo: 4 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 3, teamTwo: 'Manchester United', scoreTwo: 0 },
	{ id: '6', teamOne: 'Manchester United', scoreOne: 3, teamTwo: 'Lyon', scoreTwo: 7 },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: 6, teamTwo: 'Real Madrid', scoreTwo: 1 },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: 0, teamTwo: 'Bayern Munich', scoreTwo: 4 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 5, teamTwo: 'Liverpool', scoreTwo: 0 },
	{ id: '5', teamOne: 'Liverpool', scoreOne: 0, teamTwo: 'Arsenal', scoreTwo: 1 },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: 0, teamTwo: 'AC Milan', scoreTwo: 3 },
	{ id: '2', teamOne: 'AC Milan', scoreOne: 1, teamTwo: 'Real Madrid', scoreTwo: 1 },
	{ id: '6', teamOne: 'Manchester United', scoreOne: 1, teamTwo: 'Real Madrid', scoreTwo: 2 },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: 1, teamTwo: 'Manchester United', scoreTwo: 4 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 5, teamTwo: 'Lyon', scoreTwo: 1 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 6, teamTwo: 'Arsenal', scoreTwo: 1 },
	{ id: '2', teamOne: 'AC Milan', scoreOne: 4, teamTwo: 'Arsenal', scoreTwo: 2 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'AC Milan', scoreTwo: 2 },
	{ id: '2', teamOne: 'AC Milan', scoreOne: 4, teamTwo: 'Manchester United', scoreTwo: 1 },
	{ id: '6', teamOne: 'Manchester United', scoreOne: 2, teamTwo: 'AC Milan', scoreTwo: 3 },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: 0, teamTwo: 'Arsenal', scoreTwo: 3 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'Real Madrid', scoreTwo: 1 },
	{ id: '2', teamOne: 'AC Milan', scoreOne: 3, teamTwo: 'Liverpool', scoreTwo: 1 },
	{ id: '5', teamOne: 'Liverpool', scoreOne: 4, teamTwo: 'AC Milan', scoreTwo: 6 },
	{ id: '5', teamOne: 'Liverpool', scoreOne: 4, teamTwo: 'Real Madrid', scoreTwo: 0 },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: 1, teamTwo: 'Liverpool', scoreTwo: 1 },
	{ id: '7', teamOne: 'Chelsea', scoreOne: 3, teamTwo: 'Barcelona', scoreTwo: 2 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 4, teamTwo: 'Chelsea', scoreTwo: 1 },
	{ id: '4', teamOne: 'Arsenal', scoreOne: 1, teamTwo: 'Manchester United', scoreTwo: 3 },
	{ id: '6', teamOne: 'Manchester United', scoreOne: 5, teamTwo: 'Arsenal', scoreTwo: 0 },
	{ id: '2', teamOne: 'AC Milan', scoreOne: 2, teamTwo: 'Atletico Madrid', scoreTwo: 2 },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: 0, teamTwo: 'AC Milan', scoreTwo: 2 },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 1 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Atletico Madrid', scoreTwo: 0 },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: 2, teamTwo: 'Lyon', scoreTwo: 1 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 6, teamTwo: 'Atletico Madrid', scoreTwo: 2 },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: 4, teamTwo: 'Lyon', scoreTwo: 1 },
	{ id: '8', teamOne: 'Lyon', scoreOne: 8, teamTwo: 'Real Madrid', scoreTwo: 1 },
	{ id: '6', teamOne: 'Manchester United', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 3 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 3, teamTwo: 'Manchester United', scoreTwo: 0 },
	{ id: '1', teamOne: 'Real Madrid', scoreOne: 1, teamTwo: 'Atletico Madrid', scoreTwo: 2 },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: 0, teamTwo: 'Real Madrid', scoreTwo: 2 },
	{ id: '5', teamOne: 'Liverpool', scoreOne: 1, teamTwo: 'Barcelona', scoreTwo: 3 },
	{ id: '10', teamOne: 'Barcelona', scoreOne: 1, teamTwo: 'Liverpool', scoreTwo: 3 },
	// Real Madrid
	{ id: '1', teamOne: 'Real Madrid', scoreOne: '?', teamTwo: 'Chelsea', scoreTwo: '?' },
	// AC Milan
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	{ id: '2', teamOne: 'AC Milan', scoreOne: '?', teamTwo: 'Barcelona', scoreTwo: '?' },
	// Bayern Munich
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
	{ id: '3', teamOne: 'Bayern Munich', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	// Arsenal
	{ id: '4', teamOne: 'Arsenal', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	// Liverpool
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '5', teamOne: 'Liverpool', scoreOne: '?', teamTwo: 'Chelsea', scoreTwo: '?' },
	// Manchester United
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '6', teamOne: 'Manchester United', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	// Chelsea 
	{ id: '7', teamOne: 'Chelsea', scoreOne: '?', teamTwo: 'Liverpool', scoreTwo: '?' },
	{ id: '7', teamOne: 'Chelsea', scoreOne: '?', teamTwo: 'Real Madrid', scoreTwo: '?' },
	{ id: '7', teamOne: 'Chelsea', scoreOne: '?', teamTwo: 'Atletico Madrid', scoreTwo: '?' },
	// Lyon
	// Atletico Madrid
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Chelsea', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Manchester United', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Arsenal', scoreTwo: '?' },
	{ id: '9', teamOne: 'Atletico Madrid', scoreOne: '?', teamTwo: 'Bayern Munich', scoreTwo: '?' },
	// Barcelona
	{ id: '10', teamOne: 'Barcelona', scoreOne: '?', teamTwo: 'AC Milan', scoreTwo: '?' },
];