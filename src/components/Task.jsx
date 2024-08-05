import React from "react"
import './Stylesheets/task.css'
import toast from "react-hot-toast"

export default function Task({task, tasks, setTasks}) {
  function handleRemove(id) {
    const fTasks = tasks.filter(t => t.id !== id)
    setTasks(fTasks)

    toast("Task Removed", {icon: "💀"})
  }
  return (
    <div className="task">
      <h3>{task.name}</h3>
      <div>

      <button onClick={() =>handleRemove(task.id)}>
      -
      </button>
      </div>
    </div>
  )

}
