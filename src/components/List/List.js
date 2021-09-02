import { Container } from '@material-ui/core'
import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import AllNotes from './AllNotes/AllNotes'
import Archive from './Archive/Archive'
import Label from './Label/Label'
import EditLabels from './EditLabels/EditLabels'

const List = () => {

    const labels = useSelector((state) => state.app.labels)

    return (
        <Container maxWidth="sm">
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
            </Switch>
        </Container>
    )
}

export default List
