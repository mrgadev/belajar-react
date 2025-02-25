import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import { del } from "../store/actions/lists";

const Todos = () => {
    const todos = useSelector(state => state.lists.todos)
    const dispatch = useDispatch()
    const delData = id => {
        dispatch(del(id))
    }
    console.log(todos)
    return(
        <div>
            <ul>
            {todos.map(item => 
                <li key={item.id}>
                    {item.title}
                    <button onClick={() => delData(item.id)}>X</button>
                </li>
            )}
            </ul>
        </div>
    )
}
export default Todos;