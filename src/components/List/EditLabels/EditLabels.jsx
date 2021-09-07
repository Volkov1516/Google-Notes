import { Paper, MenuItem, InputBase, Button, Container, Typography, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../state'
import useStyles from './stylesEditLabel'
import DoneIcon from '@material-ui/icons/Done';
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRounded from "@material-ui/icons/EditRounded";
import EditLabelsItem from './EditLabelsItem/EditLabelsItem'

const EditLabels = () => {
    const classes = useStyles()

    const notes = useSelector((state) => state.app.notes)
    const labels = useSelector((state) => state.app.labels)
    const colors = useSelector((state) => state.app.colors)
    const dispatch = useDispatch()
    const { getNotes, getLabels, getColors, createLabel, deleteLabel } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getNotes()
    }, [])

    useEffect(() => {
        getLabels()
    }, [])

    useEffect(() => {
        getColors()
    }, [])

    const [inputValue, setInputValue] = useState('')

    return (
        <Container maxWidth="sm" >
            <Paper className={classes.root} elevation="8" >
                <Typography style={{ fontWeight: '500' }} >Edit labels</Typography>
                {labels.map(i => <EditLabelsItem id={i.id} title={i.title} /> )}
                <InputBase
                    value={inputValue}
                    onChange={e => setInputValue(e.target.value)}
                    fullWidth
                    multiline
                    autoFocus='true'
                    className={classes.rootInput}
                    endAdornment={
                        <IconButton>
                            <DoneIcon fontSize="small" onClick={() => {
                                createLabel(inputValue)
                                setInputValue('')
                            }} />
                        </IconButton>
                    }
                />
            </Paper>
        </Container>
    )
}

export default EditLabels
