import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'

import { AppBar, Button } from '@material-ui/core'

const ToolBar = () => {

    const dispatch = useDispatch()
    const { toggleSidemenuFunc } = bindActionCreators(actionCreators, dispatch)

    return (
        <div>
            <AppBar position="static" >
                <Button onClick={() => toggleSidemenuFunc()} >Toggle Sidemenu</Button>
            </AppBar>
        </div>
    )
}

export default ToolBar
