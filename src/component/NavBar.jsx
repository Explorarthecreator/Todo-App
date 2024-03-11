import B from "../pages/B"
import NavContext from "../context/NavContext";
import { useContext, useState } from "react";

function NavBar() {
  const {date,setTodos,todos} = useContext(NavContext)
  const [taskHeading,setTaskHeading]=useState('')
  const [details,setDetails]=useState('')
  const dateString = date.toDateString()
  const formData ={
    taskHeading,
    details,
    dateString
  }
  
  const handleClick =(e)=>{
    e.preventDefault()
    console.log(formData);
    console.log(date.toDateString());
    setTodos([...todos,formData])
    // localStorage.setItem('todos',JSON.stringify(todos))
    console.log(localStorage.getItem('todos'));
    // localStorage.clear()
    // console.log(e);
  }
  return (
    <div>
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
              <button className="btn border-none btn-md bg-[#3F5BF6] my-3" onClick={(e)=>handleClick(e)}>
                Submit
              </button>
            </form>
          </div>
      </dialog>
        <B/>
        <button onClick={()=>document.getElementById('my_modal_3').showModal()}>
          Create new Task
        </button>
        <p>
          {
            date.toDateString()
          }
        </p>
        <p>
          {details}
        </p>
    </div>
  )
}

export default NavBar