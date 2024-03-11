import { useContext, useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import NavContext from "../context/NavContext";

function CalendarPages() {
  // const [date, setDate] = useState(new Date())
  const {shownav, date, setDate}= useContext(NavContext)

  // const onCh = (value)=>{
  //   setDate(value)
  //   // console.log(date.toDateString());
  // }
  return (
    <div className={`${shownav?'hidden':'block'}`}>
      {/* <button onClick={()=>{setShownav(!shownav)}} className="">
        Click me
      </button> */}
        <Calendar value={date} onChange={(value)=>setDate(value)} className=''/>

        <p className=" text-3xl">
          {
            date.toDateString()
          }
        </p>
    </div>
  )
}

export default CalendarPages