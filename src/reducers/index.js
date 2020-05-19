import {combineReducers} from 'redux';
import {boards} from './boards';
import {loading} from './loading';

export const rootReducer = combineReducers({
    boards,
    loading
});
