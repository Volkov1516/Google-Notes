import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'

import { AppBar, Button, IconButton, InputBase, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import useStyles from './stylesToolbar'

const ToolBar = () => {
    const classes = useStyles()

    const dispatch = useDispatch()
    const { toggleSidemenuFunc, toggleGridFunc } = bindActionCreators(actionCreators, dispatch)

    return (
        <AppBar className={classes.root} position="static" >
            <Toolbar className={classes.rootTolbar} >
                <IconButton onClick={() => toggleSidemenuFunc()} className={classes.icon} edge="start" >
                    <MenuIcon />
                </IconButton>
                <InputBase
                    className={classes.searchInput}
                    placeholder="Search"
                    fullWidth
                    startAdornment={
                        <IconButton>
                            <SearchOutlinedIcon />
                        </IconButton>
                    }
                />
                <IconButton onClick={() => toggleGridFunc()} className={classes.icon} >
                    <ViewAgendaOutlinedIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default ToolBar
