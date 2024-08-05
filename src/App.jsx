import { useEffect, useState } from "react"
import './App.css';
import CreateTask from './components/CreateTask'
import TaskList from './components/TaskList'
import {Toaster} from "react-hot-toast"
function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem("tasks")))
  }, [])

  console.log(tasks)
  return (
    <div className="App">

      <div className="container">
        <h1>Task Board</h1>
        <div className="Task-create">
          <Toaster />
          <CreateTask
            tasks={tasks}
            setTasks={setTasks}
          />
        </div>
            <TaskList
            tasks={tasks}
            setTasks={setTasks}
            />
      </div>
    </div>
  );
}

export default App;
