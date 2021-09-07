import { Paper, MenuItem, InputBase, Button, Container, Typography, IconButton } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../../state'
import useStyles from './stylesEditLabelsItem'
import DoneIcon from '@material-ui/icons/Done';
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import EditRounded from "@material-ui/icons/EditRounded";

const EditLabelsItem = ({id, title}) => {
    const classes = useStyles()
    
    const notes = useSelector((state) => state.app.notes)
    const labels = useSelector((state) => state.app.labels)
    const colors = useSelector((state) => state.app.colors)
    const dispatch = useDispatch()
    const { deleteLabel, updateLabel } = bindActionCreators(actionCreators, dispatch)

    const [enableEdit, setEnableEdit] = useState(false)
    const [inputValue, setInputValue] = useState(title)

    return (
        <>
            {!enableEdit ? (
                <InputBase
                value={inputValue}
                fullWidth
                startAdornment={
                    <IconButton>
                        <DeleteRoundedIcon fontSize="small" onClick={() => deleteLabel(id)} />
                    </IconButton>
                }
                endAdornment={
                    <IconButton onClick={() => setEnableEdit(!enableEdit)} >
                        <EditRounded fontSize="small" />
                    </IconButton>
                }
            />
            ) : (
                <InputBase
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                fullWidth
                startAdornment={
                    <IconButton>
                        <DeleteRoundedIcon fontSize="small" onClick={() => deleteLabel(id)} />
                    </IconButton>
                }
                endAdornment={
                    <IconButton onClick={() => {
                        setEnableEdit(!enableEdit)
                        updateLabel(id, inputValue)    
                    }}>
                        <DoneIcon fontSize="small" />
                    </IconButton>
                }
            />
            )}
        </>
    )
}

export default EditLabelsItem
