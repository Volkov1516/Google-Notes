import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../../state'

const Sidebar = () => {

    const dispatch = useDispatch()

    const { createLabel } = bindActionCreators(actionCreators, dispatch)

    const labels = useSelector((state: State) => state.app.labels)

    return (
        <div>
            {labels.map(i => <p>{i.title}</p>)}
            <button onClick={() => createLabel()}>Add Label</button>
            <ul>
                <li>
                <button>Notes</button>
                </li>
                <li>
                    <button>Label A</button>
                </li>
                <li>
                    <button>Add Label</button>
                </li>
                <li>
                    <button>Archive</button>
                </li>
                <li>
                    <button>Bin</button>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
