import rest from './rest';


export const getBoards = async () => rest.get('/board');

export const createBoard = async (board) => rest.authPost('/board', board);