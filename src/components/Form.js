import TextInput from './TextInput'
import SubmitButton from './SubmitButton'
import { useState } from 'react'

const Form = () => {

  const [text, setText] = useState("")
  const [date, setDate] = useState("")

  // Add a new task
  const submitForm = async () => {

      await fetch('http://localhost:5000/tasks', {
          method: "POST",
          headers: {
            'Content-type': 'application/json'
          },
          body: JSON.stringify({
              "text": text,
              "date": date,
              "done": false
          })
      })
  }

  return (
    <div className='AddTaskForm'>

        <TextInput
            type="text"
            label="Text"
            onChange={e => setText(e.target.value)}
            placeholder="Add text content ..."
        />

        <TextInput
            type="text"
            label="Date"
            onChange={e => setDate(e.target.value)}
            placeholder="Choose a date ..."
        />
        
        <SubmitButton
            text="Add Task"
            color="blue"
            buttonClicked={submitForm}
        />

    </div>
  )
}

export default Form