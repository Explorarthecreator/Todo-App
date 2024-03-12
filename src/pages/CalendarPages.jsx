import { useContext} from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import NavContext from "../context/NavContext";

function CalendarPages() {
  const {shownav, date, setDate, setTodos}= useContext(NavContext)

  const onChange = (currentDay)=>{
    // Sets the date to the current day clicked by the user
    setDate(currentDay)

    // Retrieves the todo from the local strorage, filters it and use it to set the todos to todos of that particular day
    const retrieveTodo = JSON.parse(localStorage.getItem('todos'))
    // console.log(retrieveTodo.filter((todo)=> todo.dateString === currentDay.toDateString()));
    if(retrieveTodo){
      setTodos(retrieveTodo.filter((todo)=> todo.dateString === currentDay.toDateString()))
    }
  }
  return (
    <div className={`${shownav?'hidden':'block'}`}>
        <Calendar value={date} onChange={(currentDay)=>onChange(currentDay)} className=''/>


      {/* This is a testing feature and will be removed later */}
        {/* <p className=" text-3xl">
          {
            date.toDateString()
          }
        </p> */}
    </div>
  )
}

export default CalendarPages