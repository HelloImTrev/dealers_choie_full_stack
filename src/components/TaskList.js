import React from "react";
import { connect, useSelector } from "react-redux";

const TaskList = ({tasks}) => {

  return(
    <ul>
      {tasks.map(task => {
        return <li key={task.id}>{task.taskName}</li>
      })}
    </ul>
  )
}

const mapState = state => state;

export default connect(mapState,{})(TaskList);