import { Link } from "react-router-dom"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../state/index"

import { MenuList, MenuItem } from '@material-ui/core';
import useStyles from "./stylesSideMenu"

const SideMenu = () => {
    const classes = useStyles()
    
    const dispatch = useDispatch()

    const {  } = bindActionCreators(actionCreators, dispatch)

    return (
        <div className={classes.wrapper}>
            <MenuList>
                <Link to='/notes' style={{ textDecoration: 'none' }}>
                    <MenuItem className={classes.menuItem} >
                        Notes
                    </MenuItem>
                </Link >
                <Link to='/archive' style={{ textDecoration: 'none' }}>
                    <MenuItem className={classes.menuItem}>
                        Archive
                    </MenuItem>
                </Link>
            </MenuList>
        </div>
    )
}

export default SideMenu
