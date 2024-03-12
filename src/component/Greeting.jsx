import { useContext } from "react"
import NavContext from "../context/NavContext"

function Greeting() {
    const {todos} = useContext(NavContext)
  return (
    <div className=" my-4">
        <h1 className=" text-2xl lg:text-3xl font-semibold">
            Good morning!
        </h1>
        <p className={`${todos.length>=1?'block':'hidden'} text-[#475467] mt-1`}>
          You got some task to do
        </p>
    </div>
  )
}

export default Greeting