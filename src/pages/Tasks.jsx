import { useContext, useEffect } from "react"
import NavContext from "../context/NavContext"
import TaskItem from "../component/TaskItem"
import EmptyTodo from "../component/EmptyTodo"

function Tasks() {
  const {todos} = useContext(NavContext)
  return (
    <div>
        <h1 className=" font-semibold text-2xl ">
            Tasks
        </h1>
        {
          todos.length >= 1? 
          todos.map((todo,index)=>(
            <TaskItem todo={todo} key={index}/>
          )) :
          <EmptyTodo/>
        }
    </div>
  )
}

export default Tasks