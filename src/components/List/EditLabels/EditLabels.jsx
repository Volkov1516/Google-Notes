import { Paper, MenuItem, InputBase, Button } from '@material-ui/core'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../state'

const EditLabels = () => {

    const notes = useSelector((state) => state.app.notes)
    const labels = useSelector((state) => state.app.labels)
    const colors = useSelector((state) => state.app.colors)
    const dispatch = useDispatch()
    const { getNotes, getLabels, getColors, createLabel } = bindActionCreators(actionCreators, dispatch)

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
        <Paper>
            {labels.map(i => <MenuItem>
                {i.title}
            </MenuItem>)}
            <InputBase 
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                fullWidth
                multiline
                autoFocus='true'
            />
            <Button onClick={() => {
                createLabel(inputValue)
                setInputValue('')
            }} >
                OK
            </Button>
        </Paper>
    )
}

export default EditLabels
