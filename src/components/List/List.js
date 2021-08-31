import { Container } from '@material-ui/core'
import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import AllNotes from './AllNotes/AllNotes'

const List = () => {
    return (
        <Container maxWidth="sm">
            <Switch>
                <Route path='/notes'>
                    <AllNotes />
                </Route>
            </Switch>
        </Container>
    )
}

export default List
