import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {

  return (
    <div className="Todo">
<p className={task.completed ? 'completed' : ""} onClick={() => toggleComplete(task.id)}>{task.task}</p>        <div>
        <FontAwesomeIcon icon={faCheckSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}