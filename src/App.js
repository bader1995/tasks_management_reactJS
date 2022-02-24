import './index.css'
import Header from './components/Header'
import Tasks from './components/Tasks';
import Form from './components/Form';
import { useState, useEffect } from 'react';

function App() {

  const [tasks, setTasks] = useState()

  // Load the data
  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks()
      setTasks(data)
    }
    getTasks()
  }, [])

  // Fetch tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    return await res.json()
  }

  // Remove task
  const deleteTask = async (id) => {

    // Remove from the server
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE'
    })
    .then(() => {
      // Remove from the UI
      setTasks(() => tasks.filter((task) => {
        return task.id != id
      }))
    })
  }

  return (
    <div>
      <Header />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
      <Form />
    </div>
  );
}

export default App;