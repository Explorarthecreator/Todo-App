import { FaPen, FaTrash } from "react-icons/fa"
function TaskItem({todo,onEdit,deleteTodo}) {
  return (
    <div className=" bg-[#EAECF0] w-11/12 m-auto mb-4 rounded-md p-4 shadow-lg flex justify-between items-center">
      <div className=" w-4/5">
        <p className=" text-sm lg:text-base text-[#101828] font-medium mb-1 w-11/12 lg:w-full">
          {
            todo.details
          }
        </p>
        <p className=" text-xs text-[#475467]">
          {
            todo.dateString
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