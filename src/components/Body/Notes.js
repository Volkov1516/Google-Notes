import React from 'react'
import { Link } from 'react-router-dom'

import { useSelector } from 'react-redux'

const Notes = () => {

    const notes = useSelector((state) => state.app.notes)
    
    return (
        <div>
            {notes.map((i) => <Link to='/newnote'><div key={i.id}><h4>{i.title}</h4><p>{i.text}</p></div></Link>)}
        </div>
    )
}

export default Notes
