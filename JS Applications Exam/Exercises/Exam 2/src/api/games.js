import * as request from './api.js';


export const createGameComment = async (comment) => {
    return await request.post(`/data/comments`, comment);
}

export const getGameComments = async (gameId) => {
    return await request.get(`/data/comments?where=gameId%3D%22${gameId}%22`);
}

export const getAllGamesForCatalog = async () => {
    return await request.get('/data/games?sortBy=_createdOn%20desc');
}

export const getAllGames = async () => {
    return await request.get('/data/games?sortBy=_createdOn%20desc&distinct=category');
}

export const getGameById = async (id) => {
    return await request.get(`/data/games/${id}`);
}

export const createGame = async (game) => {
    return await request.post(`/data/games`, game);
}

export const updateGame = async (id, game) => {
    return await request.put(`/data/games/${id}`, game);
}

export const deleteGameById = async (id) => {
    return await request.del(`/data/games/${id}`);
}