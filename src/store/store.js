import { createStore, applyMiddleware } from "redux";
import { Reducer } from '../reducers/reducer'
import initialState from './initialState'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";


const store = createStore(Reducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;