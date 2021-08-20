import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Archive from './Archive'
import Label from './Label'
import NewNote from './NewNote.js'
import Notes from './Notes'

const Body = () => {
    return (
        <div>
            <Link to='/newnote'>
                <button>Create a new note</button>
            </Link>
            <div>
                <Switch>
                    <Route path='/notes'>
                        <Notes />
                    </Route>
                    <Route path={'/label' + 1}>
                        <Label id={1}/>
                    </Route>
                    <Route path='/archive'>
                        <Archive />
                    </Route>
                    <Route path='/newnote'>
                        <NewNote />
                    </Route>
                </Switch>
            </div>
        </div>
    )
}

export default Body
