import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from '@material-ui/core'
import React, { useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { bindActionCreators } from "redux"
import { actionCreators } from '../../../state'

const Notes = () => {
    const notes = useSelector((state) => state.app.notes)
    const dispatch = useDispatch()
    const { getNotes } = bindActionCreators(actionCreators, dispatch)

    useEffect(() => {
        getNotes()
    }, [])


    console.log(notes)

    return (
        <div>
            {notes.map((i) => <div key={i.id}>
                <Card>
                    <CardActionArea>
                        <CardContent>
                            <Typography>
                                {i.title}
                            </Typography>
                            <Typography>
                                {i.text}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Color
                        </Button>
                        <Button size="small" color="primary">
                            Archive
                        </Button>
                    </CardActions>
                </Card>
            </div>)}
        </div>
    )
}

export default Notes
