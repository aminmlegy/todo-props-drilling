import FeatherIcon from 'feather-icons-react';

const Todo = ({todo , removeTodo , handleComplete}) => {
  return (
    <div className='flex-between todo-item'>
      <div className='form-content'>
        <span className='circle flex-center' onClick={()=> handleComplete(todo.id)}><FeatherIcon color={todo.complete ? "#1A2980" : "black"} icon={todo.complete ? "check-circle" : "circle"}/></span>
        <p style={{textDecoration: todo.complete && "line-through" , color :todo.complete && "gray"  }}>{todo.text}</p>
      </div>
      <div className='btn-form'>
          <span className='trash' onClick={() => removeTodo(todo.id)} >
           <FeatherIcon  icon={'trash'}/>
        </span>
      </div>
    </div>
  )
}

export default Todo