import React, {useState} from 'react'
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { actionCreators } from "../../state/index"

import useStyles from "./stylesSideMenu"
import { MenuList, MenuItem, Grid, IconButton } from '@material-ui/core';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import ArchiveOutlinedIcon from '@material-ui/icons/ArchiveOutlined';
import LabelOutlinedIcon from '@material-ui/icons/LabelOutlined';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';

const SideMenu = () => {
    const classes = useStyles()

    const { labels, toggleSidemenu } = useSelector((state) => state.app)
    const dispatch = useDispatch()
    const { } = bindActionCreators(actionCreators, dispatch)

    const currentLocation = window.location.pathname

    return (
        <>
            {!toggleSidemenu ? (
                <Grid item xs={3} className={classes.wrapper}>
                    <MenuList>
                        <Link to='/notes' style={{ textDecoration: 'none' }}>
                            <MenuItem className={classes.menuItem} style={currentLocation === '/notes' ? ({backgroundColor: '#FEEFC3'}) : (null)} >
                                <IconButton className={classes.longMenuItem} >
                                    <EmojiObjectsOutlinedIcon />
                                </IconButton>
                                Notes
                            </MenuItem>
                        </Link >
                        {labels.map(i => <Link to={`/label/${i.id}`} style={{ textDecoration: 'none' }}>
                            <MenuItem className={classes.menuItem} style={currentLocation === `/label/${i.id}` ? ({backgroundColor: '#FEEFC3'}) : (null)}>
                                <IconButton className={classes.longMenuItem}>
                                    <LabelOutlinedIcon />
                                </IconButton>
                                {i.title}
                            </MenuItem>
                        </Link>
                        )}
                        <Link to='/editLabels' style={{ textDecoration: 'none' }}>
                            <MenuItem className={classes.menuItem} style={currentLocation === '/editLabels' ? ({backgroundColor: '#FEEFC3'}) : (null)}>
                                <IconButton className={classes.longMenuItem}>
                                    <EditOutlinedIcon />
                                </IconButton>
                                Edit labels
                            </MenuItem>
                        </Link>
                        <Link to='/archive' style={{ textDecoration: 'none' }}>
                            <MenuItem className={classes.menuItem} style={currentLocation === '/archive' ? ({backgroundColor: '#FEEFC3'}) : (null)}>
                                <IconButton className={classes.longMenuItem}>
                                    <ArchiveOutlinedIcon />
                                </IconButton>
                                Archive
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Grid>
            ) : (
                <Grid item xs={1} className={classes.wrapper}>
                    <MenuList>
                        <Link to='/notes' style={{ textDecoration: 'none' }} >
                            <MenuItem className={classes.menuItemShort} >
                                <IconButton style={currentLocation === '/notes' ? ({backgroundColor: '#FEEFC3'}) : (null)}>
                                    <EmojiObjectsOutlinedIcon />
                                </IconButton>
                            </MenuItem>
                        </Link >
                        {labels.map(i => <Link to={`/label/${i.id}`} style={{ textDecoration: 'none' }}>
                            <MenuItem className={classes.menuItemShort}>
                                <IconButton style={currentLocation === `/label/${i.id}` ? ({backgroundColor: '#FEEFC3'}) : (null)}>
                                    <LabelOutlinedIcon />
                                </IconButton>
                            </MenuItem>
                        </Link>
                        )}
                        <Link to='/editLabels' style={{ textDecoration: 'none' }}>
                            <MenuItem className={classes.menuItemShort}>
                                <IconButton style={currentLocation === '/editLabels' ? ({backgroundColor: '#FEEFC3'}) : (null)}>
                                    <EditOutlinedIcon />
                                </IconButton>
                            </MenuItem>
                        </Link>
                        <Link to='/archive' style={{ textDecoration: 'none' }}>
                            <MenuItem className={classes.menuItemShort}>
                                <IconButton style={currentLocation === '/archive' ? ({backgroundColor: '#FEEFC3'}) : (null)}>
                                    <ArchiveOutlinedIcon />
                                </IconButton>
                            </MenuItem>
                        </Link>
                    </MenuList>
                </Grid>
            )}
        </>
    )
}

export default SideMenu
