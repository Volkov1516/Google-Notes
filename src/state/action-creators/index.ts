import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from '../actions/index'
 
export const createLabel = () => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.CREACTE_LABEL
        })
    }
}