import React from "react"
import './Stylesheets/CreateTask.css'
import {useState} from "react"
import { v4 as uuidv4} from "uuid"
import toast from "react-hot-toast"

export default function CreateTask({tasks, setTasks}) {

  const [task, setTask] = useState( {
    id: "",
    name: "",
    status:"Todos"
  })

  function handleSubmit(event) {
    event.preventDefault()
      if( task.name.length < 3) return toast.error("Task must have more than 3 characters")
        if( task.name.length > 100) return toast.error("Task cant have more than 100 characters")
    setTasks((prev) => {
      const List = [...prev, task]
      localStorage.setItem("tasks", JSON.stringify(List))
      return List
    })

      toast.success("task created")
      setTask({
        id: "",
        name: "",
        status:"Todos"
      })
  }



  return <>
  <form onSubmit={handleSubmit}>
    <input
      onChange={(e)=> setTask({...task, id: uuidv4(), name: e.target.value})}
      value={task.name}
      type="text"
      placeholder="Task Name"
      className="input"/>
    <button>Add New Task</button>
    </form>
  </>
}
