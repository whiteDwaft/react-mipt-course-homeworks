import rest from './rest';


export const boards = async () => rest.get('/board');

export const createBoard = async (board) => rest.authPost('/board', board);