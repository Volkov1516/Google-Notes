import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../../state'

import { Button, InputBase, Paper } from '@material-ui/core'

const Input = () => {

    const dispatch = useDispatch()
    const { createNote } = bindActionCreators(actionCreators, dispatch)

    const [enableEdit, setEnableEdit] = useState(false)
    const [inputTitleValue, setInputTitleValue] = useState('')
    const [inputTextValue, setInputTextValue] = useState('')

    return (
        <div>
            {!enableEdit ? (
                <Paper onClick={() => setEnableEdit(!enableEdit)}>
                    <InputBase
                        placeholder="Take a note"
                        fullWidth
                        autoFocus="true"
                    />
                </Paper>
            ) : (
                <Paper>
                    <InputBase
                        placeholder="Title"
                        value={inputTitleValue}
                        onChange={e => setInputTitleValue(e.target.value)}
                        fullWidth
                        multiline
                    />
                    <InputBase
                        placeholder="Take a note"
                        value={inputTextValue}
                        onChange={e => setInputTextValue(e.target.value)}
                        autoFocus="true"
                        fullWidth
                        multiline
                    />
                    <Button onClick={() => {
                        createNote(inputTitleValue, inputTextValue)
                        setEnableEdit(!enableEdit)
                    }}>
                        Close
                    </Button>
                </Paper>
            )}
        </div>
    )
}

export default Input
