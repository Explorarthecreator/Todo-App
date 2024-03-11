import { createContext, useState } from "react";

const NavContext = createContext()

export const NavbarProvider = ({children})=>{

    const [shownav, setShownav] = useState(false)
    const [date, setDate] = useState(new Date())
    const [todos, setTodos] = useState([])

    return <NavContext.Provider value={{
        shownav,
        date,
        todos,
        setTodos,
        setShownav,
        setDate
    }}>
        {children}
    </NavContext.Provider>
}

export default NavContext