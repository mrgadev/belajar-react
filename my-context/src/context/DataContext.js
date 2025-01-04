import React, {useReducer, createContext, useState} from "react"
import { listReducer } from "../reducers/listReducer"

export const DataContext = createContext()
const initialState = [
    {
        id: 1,
        title: "Judul 1"
    }
]
export const DataProvider = (props) => {
    const [lists, dispatch] = useReducer(listReducer, initialState)
    const [num, setNum] = useState(1)
    
    return(
        <DataContext.Provider value={{lists, dispatch}}>
            {props.children}
        </DataContext.Provider>
    )
}