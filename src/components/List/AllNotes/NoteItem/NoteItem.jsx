import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../../state'

import { Button, Paper, Typography, InputBase } from '@material-ui/core'


const NoteItem = ({ labelID, id, title, text, color, pin, archive, labels, colors }) => {
    
    const dispatch = useDispatch()
    const { updateNote, deleteNote, archiveNote, selectLabel, selectColor, makePin } = bindActionCreators(actionCreators, dispatch)

    const [enableEdit, setEnableEdit] = useState(false)
    const [inputTitleValue, setInputTitleValue] = useState(title)
    const [inputTextValue, setInputTextValue] = useState(text)

    return (
        <div>
            {!enableEdit ? (
                <Paper onClick={() => setEnableEdit(!enableEdit)}>
                    <Typography>{title}</Typography>
                    <Typography>{text}</Typography>
                </Paper>
            ) : (
                <Paper>
                    <InputBase
                        value={inputTitleValue}
                        onChange={e => setInputTitleValue(e.target.value)}
                        fullWidth
                        multiline
                    />
                    <InputBase
                        value={inputTextValue}
                        onChange={e => setInputTextValue(e.target.value)}
                        fullWidth
                        multiline
                        autoFocus="true"
                    />
                    <Button onClick={() => {
                        updateNote(labelID, id, inputTitleValue, inputTextValue, color, pin, archive)
                        setEnableEdit(!enableEdit)
                    }}>
                        Close
                    </Button>
                    <Button onClick={() => {
                        deleteNote(id)
                    }}>
                        Delete
                    </Button>
                    <Button onClick={() => {
                        archiveNote(labelID, id, inputTitleValue, inputTextValue, color, pin, archive)
                    }}>
                        Archive
                    </Button>

                    <Button onClick={() => {
                        makePin(labelID, id, inputTitleValue, inputTextValue, color, pin, archive)
                    }}>
                        Pin
                    </Button>

                    {labels.map(i => <Button onClick={() => selectLabel(i.id, id, inputTitleValue, inputTextValue, color, pin, archive)} >
                        {i.title}
                    </Button>)}

                    {colors.map(i => <Button onClick={() => selectColor( labelID, id, inputTitleValue, inputTextValue, i.id, pin, archive)} >
                        {i.title}
                    </Button>)}

                </Paper>
            )}
        </div>
    )
}

export default NoteItem
