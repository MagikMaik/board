import React, { useEffect } from "react"
import {useState} from "react"
import Task from "./Task"

export default function TaskList({tasks, setTasks}) {

  const [todos, setTodos] = useState([])
  const [inProgress, setInProgress] = useState([])
  const [done, setDone] = useState([])

  useEffect(() => {
    const fTodos = tasks.filter((task)=>task.status === "Todos")
    const fInProgress = tasks.filter((task)=>task.status === "In Progress")
    const fDone = tasks.filter((task)=>task.status === "Done")

    setTodos(fTodos)
    setInProgress(fInProgress)
    setDone(fDone)
  },[tasks])

  const statuses = ["Todos", "In Progress" , "Done"]

  return (
    <div className="columns">
      {statuses.map((status, index) => (
        <Section key={index} status={status} tasks={tasks} setTasks={setTasks} todos={todos} inProgress={inProgress} done={done}/>
      ))}
    </div>
  )

}

function Section({status, tasks, setTasks, todos, inProgress, done}) {
  let taskToMap = todos
if(status === "In Progress"){
  taskToMap = inProgress
}
if(status === "Done"){
  taskToMap = done
}

const count = taskToMap.length

  return (
    <div className="row">
      <h2>
        {status} {count}
      </h2>
      {count > 0 && taskToMap.map((task) => (
        <Task
        key={task.id}
        task={task}
        tasks={tasks}
        setTasks={setTasks}
        />))}
    </div>
  )

}
