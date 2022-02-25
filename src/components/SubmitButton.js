const SubmitButton = ({ color, text, whenButtonClick }) => {
  return (
    <input
        type="button"
        style={{ backgroundColor: color }}
        value={text}
        onClick={() => whenButtonClick()}
        className='btnSubmit'
    />
  )
}

export default SubmitButton