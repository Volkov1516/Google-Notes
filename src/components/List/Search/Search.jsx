import React, { useState, useEffect } from 'react'
import Fuse from 'fuse.js'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../state'
import NoteItem from '../AllNotes/NoteItem/NoteItem'
import { Container, Grid } from '@material-ui/core'

const Search = () => {

    const { notes, labels, colors, toggleGrid, searchValue } = useSelector((state) => state.app)
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

    const fuse = new Fuse(notes, {
        keys: [
            'title',
            'text'
        ]
    })

    const results = fuse.search(searchValue);
    const noteResults = results.map(i => i.item) 
    console.log(noteResults)

    return (
        <Container>
            <Grid container>
                {toggleGrid ? (<>
                    {noteResults.map((i) => <Grid key={i.id} item xs={12} md={6} lg={3}>
                            <NoteItem labelID={i.labelID} id={i.id} title={i.title} text={i.text} color={i.color} pin={i.pin} archive={i.archive} labels={labels} colors={colors} />
                        </Grid>
                    )}
                </>) : (<>
                    {noteResults.map((i) => <Grid key={i.id} item xs={8} style={{margin: "0 auto"}}>
                            <NoteItem labelID={i.labelID} id={i.id} title={i.title} text={i.text} color={i.color} pin={i.pin} archive={i.archive} labels={labels} colors={colors} />
                        </Grid>
                    )}
                </>)}
            </Grid>
        </Container>
    )
}

export default Search
