import DeleteButton from "./DeleteButton";

const Task = ({ task, deleteTask, refreshTasks }) => {

  const markAsDone = async () => {
      await fetch(`http://localhost:5000/tasks/${task.id}`, {
          method: 'PATCH',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify({
              "text": task.text,
              "date": task.date,
              "done": !task.done
          })
      })
      .then(() => refreshTasks())
  }

  return (
    <div className='task' style={task.done ? { textDecoration: "underline", backgroundColor: "greenyellow" } : {textDecoration: "none"}} onDoubleClick={() => markAsDone()}>
        <h4 >{task.text}</h4>
        <h5>{task.date}</h5>
        <DeleteButton ButtonClicked={deleteTask} task={task} />
    </div>
  )
}

export default Task