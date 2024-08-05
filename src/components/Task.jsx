import React from "react"
import './Stylesheets/task.css'

export default function Task({task, tasks, setTasks}) {

  return (
    <div className="task">

      <h3>{task.name}</h3>
    </div>
  )

}
