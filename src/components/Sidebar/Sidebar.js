import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../state/index"

const Sidebar = () => {
    
    //Получаем данные из appReducer которые инициировали в state
    const app = useSelector((state) => state.app)
    const dispatch = useDispatch()
    
    const { add } = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <p>{app}</p>
            <button onClick={() => add(1)}>Add</button>
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
