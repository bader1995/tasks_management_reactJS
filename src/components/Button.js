function Button({ text, color, ButtonClicked }) {
  return (
    <input className="btn" onClick={() => ButtonClicked()} type="button" value={text} style={{ backgroundColor: color }} />
  )
}

export default Button