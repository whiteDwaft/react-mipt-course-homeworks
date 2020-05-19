import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {createStore} from 'redux';

ReactDOM.render(<App/>, document.getElementById('root'));
//
//
// const reducer = (state = null, action) => {
//     console.log('[obabichev] action', action);
//     switch (action.type) {
//         case 'MYACTION':
//             return 'the data of reducer was changed';
//         default:
//             return state;
//     }
// };
//
//
// const store = createStore(reducer);
//
// store.subscribe((arg) => {
//     console.log('[obabichev] listen', arg);
// });
//
// console.log('[obabichev] store.getState()', store.getState());
//
// store.dispatch({
//     type: 'MYACTION'
// });
//
// console.log('[obabichev] store.getState()', store.getState());
//
