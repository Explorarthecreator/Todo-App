import { useContext } from "react"
import NavContext from "../context/NavContext"
import {FaCalendarAlt} from 'react-icons/fa'
function B() {
  const {shownav, setShownav} = useContext(NavContext)

  return (
    <div className="block lg:hidden">
        <button onClick={()=>{setShownav(!shownav)}}>
          <FaCalendarAlt size={35} color="#475467"/>
        </button>
    </div>
  )
}

export default B