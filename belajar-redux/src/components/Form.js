import React, {useState} from "react";
import { useSelector } from "react-redux"; 
import { useDispatch } from "react-redux";
import {add} from "../store/actions/lists"
const Form = () => {
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const handleChange = e => {
        setText(e.target.value)
    }
    const submit = (e) => {
        e.preventDefault()
        dispatch(add(text))
        setText("")
    }
    return(
        <form onSubmit={submit}>
            <input type="text" value={text} onChange={handleChange} placeholder="Tambah tugas baru"/>
            <button>Add</button>
        </form>
    )
}
export default Form;