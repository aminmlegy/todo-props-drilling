import { useState } from 'react';
import FeatherIcon from 'feather-icons-react';
import shortid from 'shortid';
const TodoForm = ({addTodo}) => {
  const [inputText , setInputText] = useState("")
  function handleForm(e){
    e.preventDefault();
    if(inputText.trim() !== ""){
      addTodo({
        id: shortid.generate(),
        text : inputText.trim(),
        complete : false
      })
    }
    setInputText("")
  }
  return (
    <form onSubmit={handleForm}>
      <div className='form-group'>
        <input type='tex' name='text' placeholder='add new task...' onChange={(e)=> setInputText(e.target.value)} value={inputText}/>
        <span className='btn' onClick={handleForm}>
           <FeatherIcon  icon={'plus'}/>
        </span>
      </div>
    </form>
  )
}

export default TodoForm