
function TaskItem({todo}) {
  return (
    <div className=" bg-[#EAECF0] w-11/12 m-auto mb-4 rounded-md p-4 shadow-lg">
      <p className=" text-sm lg:text-base text-[#101828] font-medium mb-1">
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
  )
}

export default TaskItem