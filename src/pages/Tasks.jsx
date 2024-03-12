import { useContext, useEffect } from "react"
import NavContext from "../context/NavContext"
import TaskItem from "../component/TaskItem"

function Tasks() {
  const {todos,date} = useContext(NavContext)
  
  
  if(todos.length < 1){
    return <p>
      No Tasks for Today
    </p>
  }
  return (
    <div>
        <h1 className=" font-semibold text-2xl ">
            Tasks List
        </h1>

        {/* <p>
          {
            todos.details
          }
        </p> */}
        <p>
          {
            date.toDateString()
          }
        </p>

        {
          todos.length >= 1? 
          todos.map((todo,index)=>(
            <TaskItem todo={todo} key={index}/>
          )) :
          <p>
            Nothing to load mofo
          </p>
        }
    </div>
  )
}

export default Tasks