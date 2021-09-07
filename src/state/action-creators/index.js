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

export const createNote = (inputTitleValue, inputTextValue) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/notes', {
            labelID: 1,
            id: 13223,
            title: inputTitleValue,
            text: inputTextValue,
            color: 1,
            pin: false,
            archive: false
        }).then((resp) => {
            dispatch({
                type: 'createNote',
                payload: resp.data
            })
        })
    }
}

export const updateNote = (labelID, id, inputTitleValue, inputTextValue, color, pin, archive) => {
    return (dispatch) => {
        axios.put('http://localhost:3001/notes/' + id, {
            labelID,
            id,
            title: inputTitleValue,
            text: inputTextValue,
            color,
            pin,
            archive
        }).then((resp) => {
            dispatch({
                type: 'updateNote',
                payload: resp.data
            })
        }).then((resp) => {
            axios.get('http://localhost:3001/notes').then((resp) => {
                dispatch({
                    type: 'getNotes',
                    payload: resp.data
                })
            })
        })
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        axios.delete('http://localhost:3001/notes/' + id).then((resp) => {
            dispatch({
                type: 'deleteNote',
                payload: resp.data
            })
        }).then((resp) => {
            axios.get('http://localhost:3001/notes').then((resp) => {
                dispatch({
                    type: 'getNotes',
                    payload: resp.data
                })
            })
        })
    }
}

export const archiveNote = (labelID, id, inputTitleValue, inputTextValue, color, pin, archive) => {
    return (dispatch) => {
        axios.put('http://localhost:3001/notes/' + id, {
            labelID,
            id,
            title: inputTitleValue,
            text: inputTextValue,
            color,
            pin,
            archive: !archive
        }).then((resp) => {
            dispatch({
                type: 'archiveNote',
                payload: resp.data
            })
        }).then((resp) => {
            axios.get('http://localhost:3001/notes').then((resp) => {
                dispatch({
                    type: 'getNotes',
                    payload: resp.data
                })
            })
        })
    }
}

export const makePin = (labelID, id, inputTitleValue, inputTextValue, color, pin, archive) => {
    return (dispatch) => {
        axios.put('http://localhost:3001/notes/' + id, {
            labelID,
            id,
            title: inputTitleValue,
            text: inputTextValue,
            color,
            pin: !pin,
            archive 
        }).then((resp) => {
            axios.get('http://localhost:3001/notes').then((resp) => {
                dispatch({
                    type: 'getNotes',
                    payload: resp.data
                })
            })
        })
    }
}

//LABELS
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

export const selectLabel = (labelID, id, inputTitleValue, inputTextValue, color, pin, archive ) => {
    return (dispatch) => {
        axios.put('http://localhost:3001/notes/' + id, {
            labelID,
            id,
            title: inputTitleValue,
            text: inputTextValue,
            color,
            pin,
            archive
        }).then((resp) => {
            axios.get('http://localhost:3001/notes').then((resp) => {
                dispatch({
                    type: 'getNotes',
                    payload: resp.data
                })
            })
        })
    }
}

export const createLabel = (inputValue) => {
    return (dispatch) => {
        axios.post('http://localhost:3001/labels', {
            id: 3,
            title: inputValue
        }).then((resp) => {
            dispatch({
                type: 'createLabel',
                payload: resp.data
            })
        })
    }
}

export const updateLabel = (id, inputValue) => {
    return (dispatch) => {
        axios.put('http://localhost:3001/labels/' + id, {
            id,
            title: inputValue
        }).then((resp) => {
            dispatch({
                type: 'updateLabel',
                payload: resp.data
            })
        }).then((resp) => {
            axios.get('http://localhost:3001/labels').then((resp) => {
                dispatch({
                    type: 'getLabels',
                    payload: resp.data
                })
            })
        })
    }
}

export const deleteLabel = (id) => {
    return(dispatch) => {
        axios.delete('http://localhost:3001/labels/' + id).then((resp) => {
            dispatch({
                type: 'deleteLabel',
                payload: resp.data
            })
        }).then((resp) => {
            axios.get('http://localhost:3001/labels').then((resp) => {
                dispatch({
                    type: 'getLabels',
                    payload: resp.data
                })
            })
        })
    }
}

//COLORS
export const getColors = () => {
    return (dispatch) => {
        axios.get('http://localhost:3001/colors').then((resp) => {
            dispatch({
                type: 'getColors',
                payload: resp.data
            })
        })
    }   
}

export const selectColor = (labelID, id, inputTitleValue, inputTextValue, color, pin, archive ) => {
    return (dispatch) => {
        axios.put('http://localhost:3001/notes/' + id, {
            labelID,
            id,
            title: inputTitleValue,
            text: inputTextValue,
            color,
            pin,
            archive
        }).then((resp) => {
            axios.get('http://localhost:3001/notes').then((resp) => {
                dispatch({
                    type: 'getNotes',
                    payload: resp.data
                })
            })
        })
    }
}

export const toggleSidemenuFunc = () => {
    return (dispatch) => {
        dispatch({
            type: 'toggleSidemenuFunc'
        })
    }
}

export const toggleGridFunc = () => {
    return(dispatch) => {
        dispatch({
            type: 'toggleGridFunc'
        })
    }
}