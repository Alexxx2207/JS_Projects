
export const authToken = 'X-Authorization';
export const userId = 'user_id';
export const userUsername = 'username';
export const userEmail = 'email';

export const methodsWithoutBody = ['GET', 'DELETE'];

//// URLs ////
export const BASE_URL = 'http://localhost:3030';

export const loginURL = `${BASE_URL}/users/login`;
export const registerURL = `${BASE_URL}/users/register`;
export const dataTeamsURL = `${BASE_URL}/data/teams`;
export const dataTeamByIdURL = `${BASE_URL}/data/teams/:id`;
export const dataMembersURL = `${BASE_URL}/data/members?where=status%3D%22member%22`;
export const getUserDataByMemberInfoURL = `${BASE_URL}/data/members?where=teamId%3D%22{teamId}%22&load=user%3D%22{_ownerId}%22%3Ausers`;