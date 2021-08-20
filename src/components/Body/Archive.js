import React from 'react'

import { useSelector } from 'react-redux'

const Archive = () => {

    const notes = useSelector((state) => state.app.notes)

    return (
        <div>
            {notes.map(i => {
                if(i.archive){
                    return(
                        <div key={i.id}><h4>{i.title}</h4><p>{i.text}</p></div>
                    )
                }
            })} 
        </div>
    )
}

export default Archive
