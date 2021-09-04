import { Container, Grid } from '@material-ui/core'
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../state'
import Input from './Input/Input'
import NoteItem from './NoteItem/NoteItem'

const Notes = () => {
    const notes = useSelector((state) => state.app.notes)
    const labels = useSelector((state) => state.app.labels)
    const colors = useSelector((state) => state.app.colors)
    const dispatch = useDispatch()
    const { getNotes, getLabels, getColors } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getNotes()
    }, [])

    useEffect(() => {
        getLabels()
    }, [])

    useEffect(() => {
        getColors()
    }, [])

    return (
        <Container>
            <Input />
            <Grid container >
                    {notes.map((i) => {
                        if (i.archive) return <Grid key={i.id} item xs={12} md={6} lg={3} >
                            <NoteItem labelID={i.labelID} id={i.id} title={i.title} text={i.text} color={i.color} pin={i.pin} archive={i.archive} labels={labels} colors={colors} />
                        </Grid>
                    })}
            </Grid>
        </Container>
    )
}

export default Notes
