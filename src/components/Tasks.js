import Task from './Task'

const Tasks = ({ tasks, deleteTask }) => {
  return (
    <div className='tasks-container'>
        {
            tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                />
            ))
        }
    </div>
  )
}

Tasks.defaultProps = {
    tasks: [],
}

export default Tasks