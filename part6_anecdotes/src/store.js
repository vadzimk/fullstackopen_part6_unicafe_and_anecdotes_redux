import {applyMiddleware, combineReducers, createStore} from "redux";

import anecdoteReducer from "./reducers/anecdoteReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";
import notificationReducer from "./reducers/notificationReducer.js";
import filterReducer from "./reducers/filterReducer.js";
import thunk from "redux-thunk";


const reducer = combineReducers(
    {
        anecdotes: anecdoteReducer,
        notification: notificationReducer,
        filter: filterReducer
    })

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))  // remember composeWithDevTools() is a function call

export default store