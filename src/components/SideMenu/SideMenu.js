import { Link } from "react-router-dom"

import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../state/index"

import { MenuList, MenuItem } from '@material-ui/core';
import useStyles from "./stylesSideMenu"

const SideMenu = () => {
    const classes = useStyles()

    const { labels, toggleSidemenu } = useSelector((state) => state.app)
    const dispatch = useDispatch()
    const { } = bindActionCreators(actionCreators, dispatch)

    return (
        <div className={classes.wrapper} style={!toggleSidemenu ? ({ display: 'block' }) : ({ display: 'none' })}>
            <MenuList>
                <Link to='/notes' style={{ textDecoration: 'none' }}>
                    <MenuItem className={classes.menuItem} >
                        Notes
                    </MenuItem>
                </Link >
                {labels.map(i => <Link to={`/label/${i.id}`} style={{ textDecoration: 'none' }}>
                    <MenuItem className={classes.menuItem} >
                        {i.title}
                    </MenuItem>
                </Link>
                )}
                <Link to='/editLabels' style={{ textDecoration: 'none' }}>
                    <MenuItem className={classes.menuItem}>
                        Edit labels
                    </MenuItem>
                </Link>
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
