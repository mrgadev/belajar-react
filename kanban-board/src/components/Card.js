import React, {useState, useContext} from "react";
import { Draggable } from "react-beautiful-dnd";
import { DataContext } from "../context/store";
import delete_24dp from '../images/delete_24dp.svg';
import '../sass/Card.scss';
const Card = ({id,item, index}) => {
    const {cardDelete, cardEdit} = useContext(DataContext)
    const [edit, setEdit] = useState(false)
    const [text, setText] = useState(item.title)
    const isEdit = () => {
        setEdit(true)
    }
    const handleChange = e => setText(e.target.value)
    const closeInput = () => {
        cardEdit(id, item.id, index, text)
        setEdit(false)
    }
    const deleteCard = () => {
        cardDelete(id, item.id)
    }
    return(
        <Draggable draggableId={item.id} index={index}>
            {(provided) => (
                <div className="card-list" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    {edit ? (
                        <form onSubmit={closeInput}>
                            <input autoFocus type="text" onBlur={closeInput} value={text} onChange={handleChange}/>
                        </form>
                    ) : (
                        <div className="card-list__text">
                            <p onClick={isEdit}>{item.title}</p>
                            <img src={delete_24dp} onClick={deleteCard}/>
                        </div>
                    )}
                    
                </div>
            )}
        </Draggable>
    )
}

export default Card;