
function TaskItem({todo}) {
  return (
    <div>
      <p>
        {
          todo.details
        }
      </p>
      <p>
        {
          todo.dateString
        }
      </p>
      <p>
        We are here
      </p>
    </div>
  )
}

export default TaskItem