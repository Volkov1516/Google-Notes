import { Action } from '../actions/index'
import { ActionType } from '../action-types'

const initialState = {
    labels: [
        {
            id: 1,
            title: "Label A"
        }
    ]
} 


const reducer = (state = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.CREACTE_LABEL: 
            return {
                ...state,
                labels: [...state.labels, {
                    id: 2,
                    title: "Label B"
                }]
            }
        default:
            return state
    }
} 

export default reducer