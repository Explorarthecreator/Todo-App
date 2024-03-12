import { useContext } from "react"
import NavContext from "../context/NavContext"
import TaskItem from "../component/TaskItem"
import EmptyTodo from "../component/EmptyTodo"

function Tasks() {
  const {todos} = useContext(NavContext)
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
            <TaskItem todo={todo} key={index}/>
          )) :
          <EmptyTodo/>
        }
    </div>
  )
}

export default Tasks