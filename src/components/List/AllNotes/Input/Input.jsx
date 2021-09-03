import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../../state'

import useStyles from './stylesInput'
import { Button, InputBase, Paper, Toolbar, AppBar } from '@material-ui/core'

const Input = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    const { createNote } = bindActionCreators(actionCreators, dispatch)

    const [enableEdit, setEnableEdit] = useState(false)
    const [inputTitleValue, setInputTitleValue] = useState('')
    const [inputTextValue, setInputTextValue] = useState('')

    return (
        <div>
            {!enableEdit ? (
                <Paper onClick={() => setEnableEdit(!enableEdit)} className={classes.closedPaper} elevation="4" >
                    <InputBase
                        placeholder="Take a note..."
                        fullWidth
                        autoFocus="true"
                    />
                </Paper>
            ) : (
                <Paper className={classes.closedPaper} elevation="4" >
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
                    <Paper className={classes.bottomPaper} elevation="0" >
                        <Button onClick={() => {
                            createNote(inputTitleValue, inputTextValue)
                            setEnableEdit(!enableEdit)
                        }} className={classes.closeBtn} size="medium" >
                            Close
                        </Button>
                    </Paper>
                </Paper>
            )}
        </div>
    )
}

export default Input
