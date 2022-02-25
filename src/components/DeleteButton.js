function DeleteButton({ ButtonClicked, task }) {
    return (
        <input className="btn" onClick={() => ButtonClicked(task.id)} type="button" value="Remove" style={{ backgroundColor: "red" }} />
    )
}

export default DeleteButton