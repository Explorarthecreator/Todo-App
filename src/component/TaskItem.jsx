import { FaPen, FaTrash } from "react-icons/fa"
function TaskItem({todo,onEdit,deleteTodo,displayTodo}) {
  return (
    <div className=" bg-[#EAECF0] w-full m-auto mb-4 mt-6 rounded-md p-4 shadow-lg flex justify-between items-center">
      <div className=" w-4/5">
        <p className="text-base lg:text-lg text-[#101828] font-medium mb-1 w-11/12 lg:w-full">
          {
            todo.taskHeading
          }
        </p>
        <p className=" text-sm lg:hidden text-[#101828] mb-1 w-full">
          {
            todo.details.length>60?todo.details.slice(0,59):todo.details
          }
        </p>
        <p className=" text-base hidden lg:block text-[#101828] mb-1 w-full">
          {
            todo.details.length>150?todo.details.slice(0,150):todo.details
          }
        </p>
        <p className=" text-xs lg:hidden text-[#475467]">
          {
            todo.dateString
          }
          {
            todo.details.length > 60 && <button className="link link-hover ml-4 mr-4" onClick={()=>displayTodo(todo)}> View more</button>
          }
          {
            todo.details.length
          }
        </p>

        <p className=" text-xs text-[#475467] hidden lg:block">
          {
            todo.dateString
          }
          {
            todo.details.length > 150 && <button className="link link-hover ml-4 mr-4" onClick={()=>displayTodo(todo)}> View more</button>
          }
        </p>
        
      </div>

      <div className="flex gap-4">
        <FaPen className=" cursor-pointer" onClick={()=>onEdit(todo)}/>
        <FaTrash className="cursor-pointer" onClick={()=>deleteTodo(todo)}/>
      </div>
      
    </div>
  )
}

export default TaskItem