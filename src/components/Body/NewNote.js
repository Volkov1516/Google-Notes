import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state/index'

const NewNote = () => {

    const [input, setInput] = useState('')
    const [textarea, setTextarea] = useState('')

    const dispatch = useDispatch()
    const {createNote} = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <input placeholder='Title' onChange={e => setInput(e.target.value)}/>
            <textarea placeholder='Take a note' onChange={e => setTextarea(e.target.value)}/>
            <button onClick={() => createNote(input, textarea)}>Confirm</button>

            <div>Here place for the properties</div>
        </div>
    )
}

export default NewNote
