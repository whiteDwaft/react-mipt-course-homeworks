const START_LOADING = 'START_LOADING';
const END_LOADING = 'END_LOADING';

export const LOADERS = {
    FETCH_BOARDS: 'FETCH_BOARDS'
};

export const loading = (state = {}, action) => {
    switch (action.type) {
        case START_LOADING: {
            return {
                ...state,
                [action.payload]: true
            };
        }
        case END_LOADING: {
            return {
                ...state,
                [action.payload]: false
            };
        }
        default:
            return state;
    }
};

export const startLoadingAction = (loader) => ({
    type: START_LOADING,
    payload: loader
});

export const endLoadingAction = (loader) => ({
    type: END_LOADING,
    payload: loader
});
