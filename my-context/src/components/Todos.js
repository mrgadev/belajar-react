import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
const Todos = () => {
    const {lists, dispatch} = useContext(DataContext)
    const remove = id => {
        const action = {
            type: "DEL",
            payload: id
        }
        dispatch(action)
    } 
    // console.log("lists ", lists)
    return(
        <div>
            {lists.map(item =>
                <li key={item.id}>  
                    {item.title}
                    <button onClick={() => remove(item.id)}>X</button>
                </li>
            )}
        </div>
    )
}

export default Todos