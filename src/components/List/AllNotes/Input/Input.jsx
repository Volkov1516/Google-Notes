import { Button, InputBase, Paper } from '@material-ui/core'
import React, { useState } from 'react'

const Input = () => {

    const [enableEdit, setEnableEdit] = useState(false)

    return (
        <div>
            {!enableEdit ? (
                <Paper onClick={() => setEnableEdit(!enableEdit)}>
                    <InputBase
                        placeholder="Take a note"
                        fullWidth
                    />
                </Paper>
            ) : (
                <Paper>
                    <InputBase
                        placeholder="Title"
                        fullWidth
                        multiline
                    />
                    <InputBase
                        placeholder="Take a note"
                        autoFocus="true"
                        fullWidth
                        multiline
                    />
                    <Button onClick={() => setEnableEdit(!enableEdit)}>Close</Button>
                </Paper>
            )}
        </div>
    )
}

export default Input
