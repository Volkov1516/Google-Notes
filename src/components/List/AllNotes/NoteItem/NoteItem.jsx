import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../../state'

import useStyles from './stylesNoteItem'
import { Button, Paper, Typography, InputBase, IconButton, Grid, Container, Box, MenuItem, Dialog, Tooltip, Popover } from '@material-ui/core'
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import AttachFileOutlinedIcon from '@material-ui/icons/AttachFileOutlined';
import { useEffect } from 'react'

const NoteItem = ({ labelID, id, title, text, color, pin, archive, labels, colors }) => {
    const classes = useStyles()

    const dispatch = useDispatch()
    const { updateNote, deleteNote, archiveNote, selectLabel, selectColor, makePin } = bindActionCreators(actionCreators, dispatch)

    const [enableEdit, setEnableEdit] = useState(false)
    const [inputTitleValue, setInputTitleValue] = useState(title)
    const [inputTextValue, setInputTextValue] = useState(text)

    const [toggleLanelsMenu, setToggleLabelsMenu] = useState(false)
    const [toggleColorsMenu, setToggleColorsMenu] = useState(false)

    const [noteColor, setNoteColor] = useState("#FFF")

    useEffect(() => {
        colors.map(i => {
            if (i.id === color) {
                setNoteColor(i.code)
                console.log(i.code)
            }
        })
    }, [colors, color])


    return (
        <Container >
            {!enableEdit ? (
                <Paper onClick={() => setEnableEdit(!enableEdit)} className={classes.paperClosed} elevation="0" style={{ backgroundColor: noteColor }}>
                    <Typography noWrap className={classes.title} >{title}</Typography>
                    <div className='boxClosed'>
                        <Typography >{text}</Typography>
                        {/* <InputBase value={text} fullWidth multiline /> */}
                    </div>
                </Paper>
            ) : (
                <Dialog open="true" fullWidth maxWidth="sm" >
                    <Paper className={classes.paperOpenned} elevation='20' style={{ backgroundColor: noteColor }}>
                        <InputBase
                            value={inputTitleValue}
                            onChange={e => setInputTitleValue(e.target.value)}
                            fullWidth
                            multiline
                            className={classes.title}
                            endAdornment={
                                <Tooltip title="Pin note">
                                    <IconButton onClick={() => {
                                        makePin(labelID, id, inputTitleValue, inputTextValue, color, pin, archive)
                                    }}>
                                        <AttachFileOutlinedIcon />
                                    </IconButton>
                                </Tooltip>
                            }
                        />
                        <Box className="boxOpenned">
                            <InputBase 
                                value={inputTextValue}
                                onChange={e => setInputTextValue(e.target.value)}
                                fullWidth
                                multiline
                                autoFocus="true"
                                className={classes.text}
                            />
                        </Box>
                        <Paper className={classes.bottomPaper} elevation="0" style={{ backgroundColor: noteColor }} >
                            <div>
                                <Paper style={!toggleLanelsMenu ? ({ display: 'none' }) : ({ display: 'block' })} className={classes.listsPopup} elevation="8" >
                                    {labels.map(i => <MenuItem onClick={() => selectLabel(i.id, id, inputTitleValue, inputTextValue, color, pin, archive)} >
                                        {i.title}
                                    </MenuItem>)}
                                </Paper>
                                <Tooltip title="Change label" placement="bottom">
                                    <IconButton onClick={() => setToggleLabelsMenu(!toggleLanelsMenu)} >
                                        <LabelOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                                <Paper style={!toggleColorsMenu ? ({ display: 'none' }) : ({ display: 'block' })} className={classes.listsPopup} elevation="8" >
                                    {colors.map(i => <MenuItem onClick={() => selectColor(labelID, id, inputTitleValue, inputTextValue, i.id, pin, archive)} >
                                        {i.title}
                                    </MenuItem>)}
                                </Paper>
                                <Tooltip title="Change color" placement="bottom">
                                    <IconButton onClick={() => setToggleColorsMenu(!toggleColorsMenu)}>
                                        <ColorLensOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Archive" placement="bottom">
                                    <IconButton onClick={() => archiveNote(labelID, id, inputTitleValue, inputTextValue, color, pin, archive) }>
                                        <ArchiveOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip title="Delete" placement="bottom" >
                                    <IconButton onClick={() => { deleteNote(id) }}>
                                        <DeleteForeverOutlinedIcon fontSize="small" />
                                    </IconButton>
                                </Tooltip>
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
                </Dialog>
            )}
        </Container>
    )
}

export default NoteItem
