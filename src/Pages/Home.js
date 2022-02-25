import Tasks from "../components/Tasks";
import Form from "../components/Form";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

function Home() {

    const [tasks, setTasks] = useState()
    const [showForm, setShowForm] = useState(false)

    // Load the initial data
    useEffect(() => {
        refreshTasks()
    }, [])

    // Refresh tasks
    const refreshTasks = () => {
        const getTasks = async () => {
            const data = await fetchTasks()
            setTasks(data)
        }
        getTasks()
    }

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
            refreshTasks()
        })
    }

    // Add task
    const addNewTask = async (text, date) => {

        await fetch('http://localhost:5000/tasks', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                "text": text,
                "date": date,
                "done": false
            })
        })
        .then(() => {
            refreshTasks()
        })
    }

    // Toggle form
    const toggleForm = async () => {
        setShowForm(!showForm)
    }

    return (
        <>
            <Link to="/About" >About</Link>
            <Header toggleForm={toggleForm} showForm={showForm} />
            <Tasks tasks={tasks} deleteTask={deleteTask} refreshTasks={refreshTasks} />
            <Form addNewTask={addNewTask} showForm={showForm} />
        </>
    )
}

export default Home