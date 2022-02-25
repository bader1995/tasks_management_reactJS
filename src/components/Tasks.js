import Task from './Task'

const Tasks = ({ tasks, deleteTask, refreshTasks }) => {
  return (
    <div className='tasks-container'>
        {
            tasks.map((task) => (
                <Task
                    key={task.id}
                    task={task}
                    deleteTask={deleteTask}
                    refreshTasks={refreshTasks}
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