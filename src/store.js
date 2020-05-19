import {applyMiddleware, compose, createStore} from 'redux';
import {rootReducer} from './reducers';
import thunk from 'redux-thunk';

const loggerMiddleware = ({dispatch, getState}) => next => action => {
    console.log('[obabichev] LOGGER MIDDLEWARE action', action);
    // store.dispatch, store.getState

    return next(action);
};

// action -> middleware(action) -> middleware2(acton) -> reducer(action)


const middlewares = applyMiddleware(loggerMiddleware, thunk);

const enhancer = compose(
    middlewares,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const store = createStore(
    rootReducer,
    enhancer
);