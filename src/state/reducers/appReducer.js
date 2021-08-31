const initialState = {
    notes: []
}

const reducer = ( state =  initialState, action ) => {
    switch(action.type) {
        case 'getNotes': 
            return {
                ...state, 
                notes: action.payload
            }
        default:
            return state
    }
}

export default reducer