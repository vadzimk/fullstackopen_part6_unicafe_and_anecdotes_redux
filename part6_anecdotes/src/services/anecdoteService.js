import axios from "axios";

const baseUrl = 'http://127.0.0.1:3001/anecdotes'


const fetchAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}


const addNew = async (content) => {
    const anecdote = {
        content,
        votes: 0
    }

    const res = await axios.post(baseUrl, anecdote)
    return res.data
}

const incrementVote = async (anecdote) => {
    const obj = {
        ...anecdote,
        votes: anecdote.votes + 1
    }
    const res = await axios.put(`${baseUrl}/${anecdote.id}`, obj)
    return res.data
}


const anecdoteService = {fetchAll, addNew, incrementVote}
export default anecdoteService