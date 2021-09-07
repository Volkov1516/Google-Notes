import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../../state'

import useStyles from './stylesNoteItem'
import { Button, Paper, Typography, InputBase, IconButton, Grid, Container, Box, MenuItem } from '@material-ui/core'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import { useEffect } from 'react'



const NoteItem = ({ labelID, id, title, text, color, pin, archive, labels, colors }) => {
    const classes = useStyles()

    
    const [noteColor, setNoteColor] = useState("#FFF")
    useEffect(() => {
        colors.map(i => {if(i.id === color) setNoteColor(i.code)})
    },[color])


    const dispatch = useDispatch()
    const { updateNote, deleteNote, archiveNote, selectLabel, selectColor, makePin } = bindActionCreators(actionCreators, dispatch)

    const [enableEdit, setEnableEdit] = useState(false)
    const [inputTitleValue, setInputTitleValue] = useState(title)
    const [inputTextValue, setInputTextValue] = useState(text)

    const [toggleLanelsMenu, setToggleLabelsMenu] = useState(false)
    const [toggleColorsMenu, setToggleColorsMenu] = useState(false)

    return (
        <Container  >
            {!enableEdit ? (
                <Paper onClick={() => setEnableEdit(!enableEdit)} className={classes.paperClosed} elevation="0" style={{backgroundColor: noteColor}}>
                    <Typography className={classes.title} >{title}</Typography>
                    <Typography>{text}</Typography>
                </Paper>
            ) : (
                <Paper className={classes.paperOpenned} elevation='20' style={{backgroundColor: noteColor}}>
                    <InputBase
                        value={inputTitleValue}
                        onChange={e => setInputTitleValue(e.target.value)}
                        fullWidth
                        multiline
                        className={classes.title}
                        endAdornment={
                            <IconButton onClick={() => {
                                makePin(labelID, id, inputTitleValue, inputTextValue, color, pin, archive)
                            }}>
                                <AttachFileOutlinedIcon />
                            </IconButton>
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
                    <Paper className={classes.bottomPaper} elevation="0" style={{backgroundColor: noteColor}}>
                        <div>
                            <Paper style={!toggleLanelsMenu ? ({ display: 'none' }) : ({ display: 'block' })}>
                                {labels.map(i => <MenuItem onClick={() => selectLabel(i.id, id, inputTitleValue, inputTextValue, color, pin, archive)} >
                                    {i.title}
                                </MenuItem>)}
                            </Paper>
                            <IconButton onClick={() => setToggleLabelsMenu(!toggleLanelsMenu)} >
                                <LabelOutlinedIcon fontSize="small" />
                            </IconButton>
                            <Paper style={!toggleColorsMenu ? ({ display: 'none' }) : ({ display: 'block' })}>
                                {colors.map(i => <MenuItem onClick={() => selectColor(labelID, id, inputTitleValue, inputTextValue, i.id, pin, archive)} >
                                    {i.title}
                                </MenuItem>)}
                            </Paper>
                            <IconButton onClick={() => setToggleColorsMenu(!toggleColorsMenu)}>
                                <ColorLensOutlinedIcon fontSize="small" />
                            </IconButton>

                            <IconButton onClick={() => { archiveNote(labelID, id, inputTitleValue, inputTextValue, color, pin, archive) }}>
                                <ArchiveOutlinedIcon fontSize="small" />
                            </IconButton>

                            <IconButton onClick={() => { deleteNote(id) }}>
                                <DeleteForeverOutlinedIcon fontSize="small" />
                            </IconButton>
                        </div>
                        <div className={classes.closeBtn}>
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
        </Container>
    )
}

export default NoteItem
