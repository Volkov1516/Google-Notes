export const add = (value) => {
    return(dispatch) => {
        dispatch({
            type: 'add',
            payload: value
        })
    }
}