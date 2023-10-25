import Todo from './Todo'

const TodoList = ({todos ,removeTodo, handleComplete}) => {
  return (
    <div className='todo-list'>
      {
        todos.map((todo)=>(
          <Todo todo={todo} removeTodo={removeTodo} handleComplete={handleComplete} key={todo.id}/>
        ))
      }
    </div>
  )
}

export default TodoList