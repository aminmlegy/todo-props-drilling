import { useState } from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import Actions from './Actions'
import './todos.css';
const Todos = () => {
  const [todos ,setTodods] = useState([])
  const [filtter , setFiltter] = useState("all");
  function addTodo(todo){
      setTodods((data)=>[todo , ...data])
  }
  function removeTodo(id){
    setTodods(todos.filter((item)=> item.id !== id))
  }
  function handleComplete(id){
    setTodods(data=> data.map((item)=> item.id === id ? {...item , complete:!item.complete} : item))
  }
  function toogleComplete(){
    setTodods((data)=> data.map(item => (
      { ...item , complete:!item.complete }
    )))
  }
  function removeComplete(){
    setTodods(todos.filter(item => !item.complete))
  }
  function handleDisabled(){
    return todos.some(item => item.complete === true)
  }
  function handleFiltter(){
     if(filtter === "complete"){
        return todos.filter(item=> (
          item.complete
        ))
     }else{
        return todos
     }
  }
  function handleFilter(text){
    setFiltter(text)
  }
  return (
    <main>
       <div className='container'>
            <h1>Todo With Props Drilling</h1>
            <div className='todo-layout drop-filter'>
                <TodoForm addTodo={addTodo}/>
                <TodoList todos={handleFiltter()} removeTodo={removeTodo} handleComplete={handleComplete}/>
                {
                  todos.length !== 0 &&(<Actions toogleComplete={toogleComplete} removeComplete={removeComplete} handleDisabled={handleDisabled} handleFilter={handleFilter}/>)  
                }
            </div>
       </div>
    </main>
  )
}

export default Todos