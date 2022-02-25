import TextInput from './TextInput'
import SubmitButton from './SubmitButton'
import { useState } from 'react'

const Form = (props) => {

  const [text, setText] = useState("")
  const [date, setDate] = useState("")

  return (
      props.showForm &&
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
                whenButtonClick={() => props.addNewTask(text, date)}
            />

        </div>
  )
}

export default Form