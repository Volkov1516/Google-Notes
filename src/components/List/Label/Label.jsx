import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../state'
import NoteItem from '../AllNotes/NoteItem/NoteItem'
import { Container, Grid } from '@material-ui/core'

const Label = ({ id }) => {

    const { notes, labels, colors, toggleGrid } = useSelector((state) => state.app)
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
            <Grid container>
                {toggleGrid ? (<>
                    {notes.map((i) => {
                        if (id === i.labelID) return <Grid key={i.id} item xs={12} md={6} lg={3}>
                            <NoteItem labelID={i.labelID} id={i.id} title={i.title} text={i.text} color={i.color} pin={i.pin} archive={i.archive} labels={labels} colors={colors} />
                        </Grid>
                    })}
                </>) : (<>
                    {notes.map((i) => {
                        if (id === i.labelID) return <Grid key={i.id} item xs={8} style={{margin: "0 auto"}}>
                            <NoteItem labelID={i.labelID} id={i.id} title={i.title} text={i.text} color={i.color} pin={i.pin} archive={i.archive} labels={labels} colors={colors} />
                        </Grid>
                    })}
                </>)}
            </Grid>
        </Container>
    )
}

export default Label
