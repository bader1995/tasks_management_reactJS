const SubmitButton = ({ color, text, buttonClicked }) => {
  return (
    <input
        type="button"
        style={{ backgroundColor: color }}
        value={text}
        onClick={() => buttonClicked()}
        className='btnSubmit'
    />
  )
}

export default SubmitButton