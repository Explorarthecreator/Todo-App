import { createContext, useState, useEffect } from "react";

const NavContext = createContext()

export const NavbarProvider = ({children})=>{
    const [shownav, setShownav] = useState(false)
    const [date, setDate] = useState(new Date())
    const [todos, setTodos] = useState([])
    const [greetings, setGreetings] = useState('Morning')

    useEffect(()=>{
        const retrieveItem = JSON.parse(localStorage.getItem('todos'))
        if(retrieveItem){
            setTodos(retrieveItem.filter((item)=> item.dateString === date.toDateString()))
        }

        if(date.getHours() < 12){
            console.log('Good Morning')
            setGreetings('Morning')
        }else if (date.getHours() >= 12 && date.getHours() <=16){
            setGreetings('Afternoon')
        }
        else{
            setGreetings('Evening')
        }
    // eslint-disable-next-line
    },[])
    return <NavContext.Provider value={{
        shownav,
        date,
        todos,
        greetings,
        setTodos,
        setShownav,
        setDate
    }}>
        {children}
    </NavContext.Provider>
}

export default NavContext