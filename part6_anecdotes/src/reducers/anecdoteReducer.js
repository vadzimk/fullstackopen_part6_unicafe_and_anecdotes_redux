// action creator
import anecdoteService from "../services/anecdoteService.js";
import {setNotification} from "./notificationReducer.js";

// action creator for thunk middleware
export const incrementVote = (anecdote) => {
    return async (dispatch) => {
        const updatedAnecdote = await anecdoteService.incrementVote(anecdote)
        dispatch({
            type: 'INCREMENT_VOTE',
            data: updatedAnecdote
        })
    }

}

// action creator for thunk middleware
export const createNew = (content) => {
    return async (dispatch) => {
        const anecdote = await anecdoteService.addNew(content)
        dispatch({
            type: 'CREATE_NEW',
            data: anecdote
        })
    }
}


//chained action creator:
export const createNewAndNotify = (content) => {
    return (dispatch, getState) => {
        return dispatch(createNew(content)).then(() => {
            const createdNote = getState().anecdotes.find(a => a.content === content)

            if (createdNote) {
                dispatch(setNotification(`you created '${content}'`, 5000))
            } else {
                dispatch(setNotification(`error, not created '${content}'`, 5000))
            }
        })
    }
}

// action creator for thunk middleware
export const initializeData = () => {
    // remember to always pass dispatch to this function and dispatch an action inside it
    return async (dispatch) => {
        const data = await anecdoteService.fetchAll()
        dispatch({
            type: 'INITIALIZE_DATA',
            data
        })
    }
}


const anecdoteReducer = (state = [], action) => {

    switch (action.type) {
        case 'INCREMENT_VOTE':
            return state.map(item =>
                item.id === action.data.id ? {...item, votes: item.votes + 1} : item)
        case 'CREATE_NEW':
            return state.concat(action.data)
        case 'INITIALIZE_DATA':
            return action.data
        default:
            return state
    }

}


export default anecdoteReducer