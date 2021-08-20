import axios from "axios"

export const getLabels = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/labels').then((resp) => {
            dispatch({
                type: 'getLabels',
                payload: resp.data
            })
        })
    }
}

export const createLabel = () => {
    return (dispatch) => {
        axios.post('http://localhost:3001/labels', {
            id: 4,
            title: 'New Label'
        }).then((resp) => {
            dispatch({
                type: 'createLabel',
                payload: resp.data
            })
        })
    }
}

export const updateLabel = (id) => {
    return (dispatch) => {
        axios.put('http://localhost:3001/labels/' + id, {
            id,
            title: 'Updated Label'
        }).then((resp) => {
            dispatch({
                type: 'updateLabel',
                payload: resp.data
            })
        })
    }
}

export const deleteLabel = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:3001/labels/' + id).then((resp) => {
            dispatch({
                type: 'deleteLabel',
                payload: resp.data
            })
        })
    }
}

export const createNote = (title, text) => {
    return (dispatch) => {
        dispatch({
            type: 'createNote',
            payload: {
                "labelID": 1,
                "id": 7,
                "title": title,
                "text": text,
                "color": "white",
                "pin": false,
                "archive": false
            }
        })
    }
}