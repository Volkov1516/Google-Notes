import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import Fuse from 'fuse.js'

import { AppBar, Button, IconButton, InputBase, Toolbar, Tooltip, Typography, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import useStyles from './stylesToolbar'
import { Link } from 'react-router-dom'

const ToolBar = () => {
    const classes = useStyles()

    const { notes, labels, colors } = useSelector((state) => state.app)
    const dispatch = useDispatch()
    const { toggleSidemenuFunc, toggleGridFunc, catchSearchValue } = bindActionCreators(actionCreators, dispatch)

    const fuse = new Fuse(notes, {
        keys: ['title']
    })

    const [inputValue, setInputValue] = useState('')

    const [viewIcon, setViewIcon] = useState(false)

    return (
        <AppBar className={classes.root} position="static" >
            <Toolbar className={classes.rootTolbar} >
                <Tooltip title="Main menu">
                    <IconButton onClick={() => toggleSidemenuFunc()} className={classes.icon} edge="start" >
                        <MenuIcon />
                    </IconButton>
                </Tooltip>


                <Typography className={classes.title}>
                    Keep
                </Typography>


                <InputBase
                    value={inputValue}
                    onChange={(e) => {
                        setInputValue(e.target.value)
                        catchSearchValue(inputValue)
                    }}
                    className={classes.searchInput}
                    placeholder="Search"
                    fullWidth
                    startAdornment={
                        <Link to="/search" style={{ textDecoration: 'none' }}>
                            <Tooltip title="Search">
                                <IconButton>
                                    <SearchOutlinedIcon />
                                </IconButton>
                            </Tooltip>
                        </Link>
                    }
                />

                {viewIcon ? (<Tooltip title="List view">
                    <IconButton onClick={() => {
                        toggleGridFunc()
                        setViewIcon(!viewIcon)
                    }} className={classes.icon} >
                        <ViewAgendaOutlinedIcon />
                    </IconButton>
                </Tooltip>) : (<Tooltip title="Grid view">
                    <IconButton onClick={() => {
                        toggleGridFunc()
                        setViewIcon(!viewIcon)
                    }} className={classes.icon} >
                        <DashboardOutlinedIcon />
                    </IconButton>
                </Tooltip>)}
            </Toolbar>
        </AppBar>
    )
}

export default ToolBar
