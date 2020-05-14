import {combineReducers, createStore} from 'redux';

const users = (state = [], action) => {
    return state;
};

const boards = (state = [], action) => {
    switch (action.type) {
        case 'GET_BOARDS': {
            // console.log('[obabichev] aciton', action);
            return action.payload;
        }
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    users,
    boards
});


export const store = createStore(rootReducer);