// import {createStore } from 'redux';


// //action (type: bắt buộc)->
// var initialState = {
//     status: false
// }

// var myReducer =  (state = initialState, action) => {
//     if(action.type === 'TOGGLE STATUS'){
//         state.status = !state.status;
//     }
//     return state;
// }

// const store = createStore(myReducer);
// console.log('Default: ',store.getState());

// //action
// var action = {
//     type: 'TOGGLE STATUS'
// };

// store.dispatch(action);
// console.log('TOGGLE: ', store.getState());