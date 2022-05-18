import produce from 'immer';
import { createStore, applyMiddleware, } from 'redux';
import { reduxMiddleware } from './middleware';

//Declare redux variable
const initialState = {
    userDetails: {
        userName: "",
        phone: "",
        password: ""
    }

}

const reducer = produce((state, action) => {
    switch (action.type) {
        case 'SET_USER_DETAILS':
            state.userDetails = action.payload
            break;
        default:

    }
}, initialState);

const store = createStore(reducer, applyMiddleware(reduxMiddleware));
window.store = store;
export default store;

















