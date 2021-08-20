import { Link } from "react-router-dom"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../state/index"

const Menu = () => {

    //Получаем данные из appReducer которые инициировали в state
    const labels = useSelector((state) => state.app.labels)
    const dispatch = useDispatch()

    const { getLabels, createLabel, updateLabel, deleteLabel } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getLabels()
    }, [])

    return (
        <div>
            <ul>
                <li>
                    <Link to='/notes'>
                        <button>Notes</button>
                    </Link>
                </li>
                {labels.map(i =>
                    <li key={i.id}>
                        <Link to={'/label' + 1}>
                            <button>{i.title}</button>
                        </Link>
                        <button onClick={() => updateLabel(i.id)}>Update</button>
                        <button onClick={() => deleteLabel(i.id)}>Delete</button>
                    </li>
                )}
                <li>
                    <button onClick={() => createLabel()}>Add Label</button>
                </li>
                <li>
                    <Link to='/archive'>
                        <button>Archive</button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Menu
