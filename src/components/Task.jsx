import React from "react"
import './Stylesheets/task.css'
import toast from "react-hot-toast"
import { useDrag } from "react-dnd"

export default function Task({task, tasks, setTasks}) {

  const [{ isDragging }, drag] = useDrag(() => ({
    type: "task",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  console.log(isDragging)
  function handleRemove(id) {
    const fTasks = tasks.filter(t => t.id !== id)

    localStorage.getItem("tasks", JSON.stringify(fTasks))
    setTasks(fTasks)

    toast("Task Removed", {icon: "💀"})
  }
  return (
    <div className="task" ref={drag}>
      <h3>{task.name}</h3>
      <div>

      <button onClick={() =>handleRemove(task.id)}>
      -
      </button>
      </div>
    </div>
  )

}
