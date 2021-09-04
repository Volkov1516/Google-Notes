import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../../state'

import useStyles from './stylesNoteItem'
import { Button, Paper, Typography, InputBase, IconButton, Grid } from '@material-ui/core'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';

const NoteItem = ({ labelID, id, title, text, color, pin, archive, labels, colors }) => {
    const classes = useStyles()

    const dispatch = useDispatch()
    const { updateNote, deleteNote, archiveNote, selectLabel, selectColor, makePin } = bindActionCreators(actionCreators, dispatch)

    const [enableEdit, setEnableEdit] = useState(false)
    const [inputTitleValue, setInputTitleValue] = useState(title)
    const [inputTextValue, setInputTextValue] = useState(text)

    return (
        <>
            {!enableEdit ? (
                <Paper onClick={() => setEnableEdit(!enableEdit)} className={classes.paperClosed} elevation="0" >
                    <Typography className={classes.title} >{title}</Typography>
                    <Typography>{text}</Typography>
                </Paper>
            ) : (
                <Paper className={classes.paperOpenned}>
                    <InputBase
                        value={inputTitleValue}
                        onChange={e => setInputTitleValue(e.target.value)}
                        fullWidth
                        multiline
                        className={classes.title}
                        endAdornment={
                            <Button onClick={() => {
                                makePin(labelID, id, inputTitleValue, inputTextValue, color, pin, archive)
                            }}>
                                Pin
                            </Button>
                        }
                    />
                    <InputBase
                        value={inputTextValue}
                        onChange={e => setInputTextValue(e.target.value)}
                        fullWidth
                        multiline
                        autoFocus="true"
                        className={classes.text}
                    />
                    <Paper className={classes.bottomPaper} elevation="0">
                        <div>
                            {/* {labels.map(i => <Button onClick={() => selectLabel(i.id, id, inputTitleValue, inputTextValue, color, pin, archive)} >
                            {i.title}
                        </Button>)} */}
                            <IconButton >
                                <LabelOutlinedIcon fontSize="small" />
                            </IconButton>

                            {/* {colors.map(i => <Button onClick={() => selectColor(labelID, id, inputTitleValue, inputTextValue, i.id, pin, archive)} >
                            {i.title}
                        </Button>)} */}
                            <IconButton>
                                <ColorLensOutlinedIcon fontSize="small" />
                            </IconButton>

                            <IconButton onClick={() => { archiveNote(labelID, id, inputTitleValue, inputTextValue, color, pin, archive) }}>
                                <ArchiveOutlinedIcon fontSize="small" />
                            </IconButton>

                            <IconButton onClick={() => { deleteNote(id) }}>
                                <DeleteForeverOutlinedIcon fontSize="small" />
                            </IconButton>
                        </div>
                        <div>
                            <Button onClick={() => {
                                updateNote(labelID, id, inputTitleValue, inputTextValue, color, pin, archive)
                                setEnableEdit(!enableEdit)
                            }} className={classes.menuBtn} >
                                Close
                            </Button>
                        </div>
                    </Paper>
                </Paper>
            )}
        </>
    )
}

export default NoteItem
