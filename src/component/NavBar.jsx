import B from "../pages/B"
import NavContext from "../context/NavContext";
import { useContext, useState } from "react";
import {toast} from 'react-toastify'

function NavBar() {
  const {date,setTodos} = useContext(NavContext)
  const [taskHeading,setTaskHeading]=useState('')
  const [details,setDetails]=useState('')
  const now = new Date();
  now.setHours(0,0,0,0)
  const dateString = date.toDateString()
  const formData ={
    taskHeading,
    details,
    dateString
  }
  
  const handleClick =(e)=>{
    e.preventDefault()

    // const now = new Date()
    let oldItems = JSON.parse(localStorage.getItem('todos'))

    if(oldItems === null){
      oldItems = [formData]
    }else{
      oldItems = [...oldItems,formData]
    }
    console.log(oldItems);
    localStorage.setItem('todos',JSON.stringify(oldItems))

    setTodos(oldItems.filter((todo)=>todo.dateString === date.toDateString()))
    // console.log(oldItems.filter((todo)=>todo.dateString === date.toDateString()))
    toast.success('Task created successfully!!')
    setDetails('')
    setTaskHeading('')
    
    document.getElementById('my_modal_3').close()    // console.log(localStorage.getItem('todos'));
  }
  return (
    <div className=" border-b-2 shadow-md flex justify-between items-center px-2 py-4 lg:px-6 lg:w-4/5 lg:m-auto rounded-xl">
      <dialog id="my_modal_3" className="modal ">
          <div className="modal-box bg-white text-black"> 
            <h3 className="text-2xl font-semibold lg:text-4xl mb-2">
              Create a Task
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
              <button className={`btn border-none btn-md text-white bg-[#3F5BF6] my-3 ${now>date?'btn-disabled':''}`} onClick={(e)=>handleClick(e)}>
                Submit
              </button>
            </form>
          </div>
      </dialog>
      <h1 className="hidden lg:block text-4xl font-semibold">
        Todo App
      </h1>
        <B/>
        <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="btn btn-md bg-[#475467] text-white">
          Add Todo
        </button>
    </div>
  )
}

export default NavBar