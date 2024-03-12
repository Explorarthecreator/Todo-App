import { createContext, useState, useEffect } from "react";

const NavContext = createContext()

export const NavbarProvider = ({children})=>{
    const [shownav, setShownav] = useState(true)
    const [date, setDate] = useState(new Date())
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        const retrieveItem = JSON.parse(localStorage.getItem('todos'))
        if(retrieveItem){
            setTodos(retrieveItem.filter((item)=> item.dateString === date.toDateString()))
        }
    // eslint-disable-next-line
    },[])
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