import { ActionType } from '../action-types/index'

interface CreateLabel {
    type: ActionType.CREACTE_LABEL
}

export type Action = CreateLabel