const TextInput = ({ type, value, label, placeholder, onChange }) => {
  return (
    <>
        <label>{label}</label>
        <input type={type} value={value} placeholder={placeholder} onChange={onChange} />
    </>
  )
}

export default TextInput