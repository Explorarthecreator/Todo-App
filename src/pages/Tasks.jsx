import { useContext, useState } from "react"
import NavContext from "../context/NavContext"
import {toast} from 'react-toastify'
import TaskItem from "../component/TaskItem"
import EmptyTodo from "../component/EmptyTodo"

function Tasks() {
  const {todos,setTodos,date} = useContext(NavContext)
  const [editedodo,setEditTodo] = useState({})
  const [taskHeading, setTaskHeading]= useState('')
  const [details, setDetails] = useState('')
  const [dateString, setdateString] = useState('')
  const editTodo = (todo)=>{
    setEditTodo(todo)

    document.getElementById('edit-modal').showModal()

    setDetails(todo.details)
    setTaskHeading(todo.taskHeading)

    
  }

  const displayTodo = (todo)=>{

    setDetails(todo.details)
    setTaskHeading(todo.taskHeading)
    setdateString(todo.dateString)
    document.getElementById('display-modal').showModal()


  }
  // const now = new Date()
  const deleteTodo = (todo)=>{
    const newTodos = []

    const getTodos = JSON.parse(localStorage.getItem('todos'))


    getTodos.map((too)=>{
      if(todo.details !== too.details){
        newTodos.push(too)
      }
    })

    setTodos(newTodos.filter(todo=> todo.dateString === date.toDateString()))
    localStorage.setItem('todos',JSON.stringify(newTodos))

    toast.success('Task deleted successfully!')
  }
  const handleClick=(e)=>{
    e.preventDefault()
    const retrieveItem = JSON.parse(localStorage.getItem('todos'))

    retrieveItem.map((item)=>{

      if(item.details === editedodo.details && item.taskHeading === editedodo.taskHeading){
        item.details = details
        item.taskHeading = taskHeading
      }
    })

    setTodos(retrieveItem.filter((todo)=>todo.dateString === date.toDateString()))
    localStorage.setItem('todos',JSON.stringify(retrieveItem))

    document.getElementById('edit-modal').close()

    toast.success('Task Edited successfully')
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
            <TaskItem todo={todo} key={index} onEdit={editTodo} deleteTodo={deleteTodo} displayTodo={displayTodo}/>
          )) :
          <EmptyTodo/>
        }

        <dialog id="edit-modal" className="modal ">
          <div className="modal-box bg-white text-black"> 
            <h3 className="text-2xl font-semibold lg:text-4xl mb-2">
              Edit Task
            </h3>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
  
              <div>
                <input type="text" className=" input input-md w-full input-bordered input-success mb-2 bg-transparent" placeholder="Enter Task title" id="taskHeading" value={taskHeading} onChange={(e)=> setTaskHeading(e.target.value)} />
              </div>

              <div>
                <input type="text" className=" input input-md w-full input-bordered input-success mb-2 bg-transparent " placeholder="Enter Task details" id="details" value={details} onChange={(e)=>setDetails(e.target.value)} />
              </div>

              <div>
                <input type="text" className=" input input-md w-full input-disabled input-success mb-2 bg-transparent text-black font-semibold" value={date.toDateString()} readOnly={true}/>
              </div>
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              <button className={`btn border-none btn-md text-white bg-[#3F5BF6] my-3`} onClick={(e)=>handleClick(e)}>
                Submit
              </button>
            </form>
          </div>
        </dialog>

        <dialog id="display-modal" className="modal ">
          <div className="modal-box bg-white text-black"> 
            <h3 className="text-xl font-semibold lg:text-2xl mb-2">
              {
                taskHeading
              }
            </h3>
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
  
              <p className=" w-11/12 lg:w-full text-justify mb-3">
                {
                  details
                }
              </p>

              <p className="text-xs">
                {
                  dateString
                }
              </p>

              {/* <div>
                <input type="text" className=" input input-md w-full input-disabled input-success mb-2 bg-transparent text-black font-semibold" value={date.toDateString()} readOnly={true}/>
              </div> */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
        </dialog>
    </div>
  )
}

export default Tasks