import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../../state'
import Fuse from 'fuse.js'

import { AppBar, Button, IconButton, InputBase, Toolbar } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import ViewAgendaOutlinedIcon from '@material-ui/icons/ViewAgendaOutlined';
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

    return (
        <AppBar className={classes.root} position="static" >
            <Toolbar className={classes.rootTolbar} >
                <IconButton onClick={() => toggleSidemenuFunc()} className={classes.icon} edge="start" >
                    <MenuIcon />
                </IconButton>

                <Link to="/search" style={{ textDecoration: 'none' }}>
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
                            <IconButton>
                                <SearchOutlinedIcon />
                            </IconButton>
                        }
                    />
                </Link>
                <IconButton onClick={() => toggleGridFunc()} className={classes.icon} >
                    <ViewAgendaOutlinedIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}

export default ToolBar
