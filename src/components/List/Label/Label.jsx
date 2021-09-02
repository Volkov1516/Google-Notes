import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../state'
import NoteItem from '../AllNotes/NoteItem/NoteItem'

const Label = ( {id} ) => {

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
        <div>
            {notes.map((i) => { if(id === i.labelID) return <div key={i.id}>
                <NoteItem labelID={i.labelID} id={i.id} title={i.title} text={i.text} color={i.color} pin={i.pin} archive={i.archive} labels={labels} colors={colors} />
            </div>})}
        </div>
    )
}

export default Label
