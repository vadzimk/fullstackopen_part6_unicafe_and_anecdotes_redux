import React from "react";
import {createNewAndNotify} from "../reducers/anecdoteReducer.js";
// import {useDispatch, useSelector} from "react-redux";
// import {setNotification} from "../reducers/notificationReducer.js";
// import anecdoteService from "../services/anecdoteService.js";

import {connect} from 'react-redux'


const AnecdoteForm = (props) => {
    // const dispatch = useDispatch()
    // const anecdotes = useSelector(state => state.anecdotes)

    // // hooks version
    // const handleSubmit =  (e) => {
    //     e.preventDefault()
    //     e.persist()
    //     const content = e.target.newNote.value
    //     dispatch(createNewAndNotify(content))
    //     e.target.newNote.value = ''
    // }


// connect version
    const handleSubmit = (e) => {
        e.preventDefault()
        e.persist()
        const content = e.target.newAnecdote.value  // remember to include the name of the input
        props.createNewAndNotify(content)
        e.target.newAnecdote.value = ''
    }

    return (
        <div>
            <h2>create new</h2>
            <form onSubmit={handleSubmit}>
                <div><input name="newAnecdote"/></div>
                <button>create</button>
            </form>
        </div>
    )

}



const mapDispatchToProps = {
    createNewAndNotify
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm