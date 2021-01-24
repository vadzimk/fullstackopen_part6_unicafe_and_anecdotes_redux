import React, {useEffect} from 'react'
import AnecdoteForm from "./components/AnecdoteForm.js";
import AnecdoteList from "./components/AnecdoteList.js";
import Notification from "./components/Notification.js";
import Filter from "./components/Filter.js";

import {useDispatch} from "react-redux";
import {initializeData} from "./reducers/anecdoteReducer.js";

const App = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(initializeData())
    })

    return (
        <div>
            <Notification/>
            <h2>Anecdotes</h2>
            <Filter/>
            <AnecdoteList/>
            <AnecdoteForm/>
        </div>
    )
}

export default App