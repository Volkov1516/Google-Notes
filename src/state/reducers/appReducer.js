const initialState = {
    notes: [],
    labels: [],
    colors: [],
    toggleSidemenu: false
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'getNotes':
            return {
                ...state,
                notes: action.payload
            }
        case 'createNote': 
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case 'updateNote':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case 'deleteNote':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case 'archiveNote':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        case 'getLabels':
            return {
                ...state,
                labels: action.payload
            }
        case 'createLabel': 
            return {
                ...state,
                labels: [...state.labels, action.payload]
            }
        case 'getColors':
            return {
                ...state,
                colors: action.payload
            }
        case 'toggleSidemenuFunc': 
            return {
                ...state,
                toggleSidemenu: !state.toggleSidemenu
            }
        default:
            return state
    }
}

export default reducer