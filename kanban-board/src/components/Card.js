import React, { useState, useContext } from "react";
import { DataContext } from "../context/store";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import delete_24dp from '../images/delete_24dp.svg';
import '../sass/Card.scss';

const Card = ({ listId, item, index }) => {
    const { dispatch } = useContext(DataContext);
    const [isEditing, setIsEditing] = useState(false);
    const [text, setText] = useState(item.title);

    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging
    } = useSortable({
        id: item.id,
        data: {
            type: 'card',
            listId,
            index,
        },
        disabled: isEditing // Disable dragging while editing
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition
    };

    const handleEditClick = (e) => {
        e.stopPropagation();
        setIsEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        dispatch({
            type: 'EDIT_CARD',
            payload: {
                listId,
                cardId: item.id,
                index,
                text
            }
        });
        
        setIsEditing(false);
    };

    const handleDelete = (e) => {
        e.stopPropagation();
        e.preventDefault();
        
        dispatch({
            type: 'DELETE_CARD',
            payload: {
                listId,
                cardId: item.id
            }
        });
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            className={`card-list ${isDragging ? 'is-dragging' : ''}`}
            {...(isEditing ? {} : attributes)}
            {...(isEditing ? {} : listeners)}
        >
            {isEditing ? (
                <form onSubmit={handleSubmit} onClick={(e) => e.stopPropagation()}>
                    <input
                        autoFocus
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={handleSubmit}
                        onClick={(e) => e.stopPropagation()}
                    />
                </form>
            ) : (
                <div className="card-list__text" onClick={(e) => e.stopPropagation()}>
                    <p onClick={handleEditClick}>{item.title}</p>
                    <img
                        src={delete_24dp}
                        onClick={handleDelete}
                        alt="delete"
                    />
                </div>
            )}
        </div>
    );
};

export default Card;
