import {endLoadingAction, LOADERS, startLoadingAction} from '../loading';
import {getBoards} from '../../service/fetchBoards';

const GET_BOARDS = 'GET_BOARDS';

export const boards = (state = [], action) => {
    switch (action.type) {
        case GET_BOARDS: {
            return action.payload;
        }
        default:
            return state;
    }
};

export const boardsAction = (boards) => ({
    type: 'GET_BOARDS',
    payload: boards
});

export const fetchBoardsAction = () => (dispatch, getState) => {
    dispatch(startLoadingAction(LOADERS.FETCH_BOARDS));
    getBoards()
        .then(boards => {
            console.log('[obabichev] boards!', boards);
            dispatch(boardsAction(boards))
        })
        .catch(error => {
            console.log(error);
        })
        .finally(() => {
            dispatch(endLoadingAction(LOADERS.FETCH_BOARDS));
        })
};