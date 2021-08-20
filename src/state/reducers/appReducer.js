const initialState = {
    labels: [],
    notes: [
        {
            "labelID": 1,
            "id": 1,
            "title": "The First Note",
            "text": "Note Text",
            "color": "white",
            "pin": false,
            "archive": false
          },
          {
            "labelID": 1,
            "id": 2,
            "title": "The Second Note",
            "text": "Note Text",
            "color": "white",
            "pin": false,
            "archive": false
          },
          {
            "labelID": 1,
            "id": 3,
            "title": "The Third Note",
            "text": "Note Text",
            "color": "white",
            "pin": false,
            "archive": false
          }
    ]
}

const reducer = ( state =  initialState, action ) => {
    switch(action.type) {
        case 'getLabels':
            return {
                ...state,
                labels: [...state.labels, ...action.payload]
            }
        case 'createLabel': 
            return {
                ...state,
                labels: [...state.labels, action.payload]
            }
        case 'updateLabel': 
            return {
                ...state,
                labels: [...state.labels, action.payload]
            }
        case 'deleteLabel': 
            return {
                ...state,
                labels: [...state.labels, action.payload]
            }
        case 'createNote':
            return {
                ...state,
                notes: [...state.notes, action.payload]
            }
        default:
            return state
    }
}

export default reducer