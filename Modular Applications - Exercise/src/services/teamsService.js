import { dataTeamsURL } from "../utils/constants.js";
import * as request from '../utils/request.js'

export const createTeam = async (teamData) => {
    let response = await request.post(dataTeamsURL, teamData);

    if(response.status >= 400) {
        throw new Error();
    }

    let team = await response.json();

    return team;
}

export const getTeams = async () => {
    let response = await request.get(dataTeamsURL);

    let teams = await response.json();
    teams = Object.values(teams);

    return teams;
}

export const getMyTeams = async (ownerId) => {
    let response = await request.get(dataTeamsURL);

    let teams = await response.json();
    teams = Object.values(teams);
    console.log(teams);

    return teams.filter(team => team._ownerId == ownerId);
}
