import React from "react";

const TaskList = ({tasks}) => {
  
  return(
    <ul>
      {tasks.map(task => {
        return <li key={task.id}>{task.taskName}</li>
      })}
    </ul>
  )
}

export default TaskList;