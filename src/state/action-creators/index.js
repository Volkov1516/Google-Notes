import axios from "axios"

export const getNotes = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/notes').then((resp) => {
            dispatch({
                type: 'getNotes',
                payload: resp.data
            })
        })
    }
}

