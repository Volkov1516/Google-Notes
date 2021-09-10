import { Container, Grid } from '@material-ui/core'
import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import AllNotes from './AllNotes/AllNotes'
import Archive from './Archive/Archive'
import Label from './Label/Label'
import EditLabels from './EditLabels/EditLabels'
import Search from './Search/Search'

const List = () => {

    const { labels, toggleSidemenu } = useSelector((state) => state.app)

    return (
        <>
            {!toggleSidemenu ? (<Grid item xs={9} alignItems="center" >
                <Switch>
                    <Route path='/notes'>
                        <AllNotes />
                    </Route>
                    {labels.map(i => <Route path={`/label/${i.id}`} style={{ textDecoration: 'none' }}>
                        <Label id={i.id} />
                    </Route>
                    )}
                    <Route path='/editLabels'>
                        <EditLabels />
                    </Route>
                    <Route path='/archive'>
                        <Archive />
                    </Route>
                    <Route path='/search' >
                        <Search />
                    </Route>
                </Switch>
            </Grid>) : (
                <Grid item xs={11} alignItems="center" >
                    <Switch>
                        <Route path='/notes'>
                            <AllNotes />
                        </Route>
                        {labels.map(i => <Route path={`/label/${i.id}`} style={{ textDecoration: 'none' }}>
                            <Label id={i.id} />
                        </Route>
                        )}
                        <Route path='/editLabels'>
                            <EditLabels />
                        </Route>
                        <Route path='/archive'>
                            <Archive />
                        </Route>
                        <Route path='/search' >
                            <Search />
                        </Route>
                    </Switch>
                </Grid>
            )}
        </>
    )
}

export default List
