import { useContext } from "react"
import NavContext from "../context/NavContext"
import {toast} from 'react-toastify'
import TaskItem from "../component/TaskItem"
import EmptyTodo from "../component/EmptyTodo"

function Tasks() {
  const {todos,setTodos,date} = useContext(NavContext)
  const editTodo = (todo)=>{
    console.log("Edit was Clicked");
    console.log(todo);
  }

  const deleteTodo = (todo)=>{
    console.log("Delete was Clicked");
    // console.log(todo);
    const newTodos = []

    const getTodos = JSON.parse(localStorage.getItem('todos'))

    // console.log(getTodos);
    getTodos.map((too)=>{
      if(todo.details !== too.details){
        newTodos.push(too)
      }
    })

    setTodos(newTodos.filter(todo=> todo.dateString === date.toDateString()))
    localStorage.setItem('todos',JSON.stringify(newTodos))

    // console.log(newTodos);
    // console.log(JSON.stringify(newTodos));
    // console.log("delete was successful");
    toast.success('Task deleted successfully!')
  }
  return (
    <div className=" lg:w-2/3">
        <h1 className=" text-lg lg:text-xl font-bold mb-3 ">
            My Tasks {todos.length>=1? <span className=" bg-[#3F5BF6] text-white rounded-full px-2">
              {
                todos.length
              }
            </span>:''}
        </h1>
        {
          todos.length >= 1? 
          todos.map((todo,index)=>(
            <TaskItem todo={todo} key={index} onEdit={editTodo} deleteTodo={deleteTodo}/>
          )) :
          <EmptyTodo/>
        }
    </div>
  )
}

export default Tasks