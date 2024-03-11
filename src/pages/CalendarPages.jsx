import { useContext, useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import NavContext from "../context/NavContext";

function CalendarPages() {
  // const [date, setDate] = useState(new Date())
  const {shownav, date, setDate, setTodos}= useContext(NavContext)

  const onCh = (value)=>{
    setDate(value)


    
    const retrieveItem = JSON.parse(localStorage.getItem('todos'))

    
    console.log(retrieveItem.filter((item)=> item.dateString === value.toDateString()));
    // setTimeout(() => {

      setTodos(retrieveItem.filter((item)=> item.dateString === value.toDateString()))
    // }, 1000);
    // console.log(date.toDateString());
  }
  return (
    <div className={`${shownav?'hidden':'block'}`}>
      {/* <button onClick={()=>{setShownav(!shownav)}} className="">
        Click me
      </button> */}
        <Calendar value={date} onChange={(value)=>onCh(value)} className=''/>

        <p className=" text-3xl">
          {
            date.toDateString()
          }
        </p>
    </div>
  )
}

export default CalendarPages