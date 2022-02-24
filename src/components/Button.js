function Button({ text, color, deleteTask, task }) {
  return (
    <input className="btn" onClick={() => deleteTask(task.id)} type="button" value={text} style={{ backgroundColor: color }} />
  )
}

export default Button