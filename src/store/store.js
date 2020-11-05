import { createStore } from "redux";
import { Reducer } from '../reducers/reducer'
import initialState from './initialState'
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(Reducer, initialState, composeWithDevTools());

export default store;