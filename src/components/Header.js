import Button from "./Button"

const Header = () => {

  const toggleForm = () => {
      alert(0)
  }

  return (
    <div className='header-container'>
        <h2 className='header-title'>Tasks management</h2>
        <Button
            text="Add task"
            deleteTask={toggleForm}
            color="green"
        />
    </div>
  )
}

export default Header