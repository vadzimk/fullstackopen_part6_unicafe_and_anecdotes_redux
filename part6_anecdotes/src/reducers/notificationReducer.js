
let timerHandle
// actionCreator
export const setNotification = (message, timeout) => {
    return async (dispatch) => {
        if (timerHandle){
            clearTimeout(timerHandle)
            timerHandle = undefined
        }

        dispatch({
            type: 'SET_NOTIFICATION',
            message
        })

        timerHandle = setTimeout(() => {
            dispatch({
                type: 'SET_NOTIFICATION',
                message: ''
            })

        }, timeout)
    }

}

export const removeNotification = () => {
    return {
        type: 'REMOVE_NOTIFICATION'
    }
}

const notificationReducer = (state = '', action) => {
    switch (action.type) {
        case 'SET_NOTIFICATION':
            return action.message  // state is a string
        case 'REMOVE_NOTIFICATION':
            return ''
        default:
            return state
    }

}

export default notificationReducer