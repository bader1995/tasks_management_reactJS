import Button from './Button'

const Task = ({ task, deleteTask }) => {

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
  }

  return (
    <div className='task' style={task.done ? { textDecoration: "underline", backgroundColor: "greenyellow" } : {textDecoration: "none"}} onDoubleClick={() => markAsDone()}>
        <h4 >{task.text}</h4>
        <h5>{task.date}</h5>
        <Button color="red" text="X" deleteTask={deleteTask} task={task} />
    </div>
  )
}

const style = {
    backgroundColor: "red"
}

export default Task