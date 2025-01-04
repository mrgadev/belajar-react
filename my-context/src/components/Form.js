import React, { use, useContext, useState } from "react";
import { DataContext } from "../context/DataContext";
const Form = () => {
    // console.log("lists ", lists)
    const [text, setText] = useState("")
    const { dispatch } = useContext(DataContext)
    const change = e => {
        setText(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        const action = {
            type: "ADD",
            payload: text
        }
        dispatch(action)
        setText("")
    }
    return(
        <form onSubmit={submit}>
            <input type="text" value={text} placeholder="Enter new list" onChange={change}/>
            <button>Add</button>
        </form>
    )
}

export default Form