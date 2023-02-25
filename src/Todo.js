import React from 'react'
import {
    ListItem,
    ListItemText,
    Checkbox,
    IconButton,
    ListItemSecondaryAction
 } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';

function Todo({ task, completed}) {
  return (
    <ListItem>
        <Checkbox tabIndex={-1} checked={completed}/>
        <ListItemText>
            {task}
        </ListItemText>
        <ListItemSecondaryAction>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </ListItemSecondaryAction>        
    </ListItem>
  )
}

export default Todo