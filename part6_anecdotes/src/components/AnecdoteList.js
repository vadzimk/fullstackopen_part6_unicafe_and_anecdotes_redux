import React from "react";
// import {useDispatch, useSelector} from "react-redux";
import {connect} from 'react-redux'
import {incrementVote} from "../reducers/anecdoteReducer.js";
import {setNotification} from "../reducers/notificationReducer.js";



const AnecdoteList = (props) => {
    // const anecdotes = useSelector(state => state.anecdotes)
    // const stateFilter = useSelector(state => state.filter)
    // const dispatch = useDispatch()

    // // the hooks version of the callback
    // const vote = (anecdote) => {
    //     dispatch(incrementVote(anecdote))
    //     dispatch(setNotification(`you voted '${anecdotes.find(a => a.id === anecdote.id).content}'`, 5000))
    //
    // }

    const anecdotes = props.anecdotes
    const stateFilter = props.stateFilter

    // the connect version of the callback
    const vote =(anecdote)=>{
        props.incrementVote(anecdote)
        props.setNotification(`you voted '${anecdotes.find(a => a.id === anecdote.id).content}'`, 5000)
    }


    return (
        <div>
            {anecdotes
                .filter(a => a.content.toLowerCase().includes(stateFilter.toLowerCase()))
                .sort(((a, b) => b.votes - a.votes))
                .map(anecdote =>
                    <div key={anecdote.id}>
                        <div>
                            {anecdote.content}
                        </div>
                        <div>
                            has {anecdote.votes}
                            <button onClick={() => vote(anecdote)}>vote</button>
                        </div>
                    </div>
                )}
        </div>
    )
}

// properties of the returned object will be accessible from props object
const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        stateFilter: state.filter
    }
}

// object that will be wrapped such that its properties will be passed to dispatch inside the connect function
const mapDispatchToProps = {
    incrementVote,
    setNotification
}

const ConnectedAnecdoteList = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdoteList