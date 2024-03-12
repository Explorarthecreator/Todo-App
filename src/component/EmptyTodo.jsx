import AddTaskSVG from '../undraw_add_notes_re_ln36.svg'

function EmptyTodo() {
  return (
    <div className='text-center'>
      <img src={AddTaskSVG} alt="" className=' w-4/5 lg:w-1/2 m-auto mt-20 lg:mt-7 mb-4'/>
        <p className=' text-xl font-medium'>
            No tasks for today!
        </p>
    </div>
  )
}

export default EmptyTodo