import React, { useState, useContext } from "react";
import { DataContext } from "../context/store";
import '../sass/BoardTitle.scss';

const BoardTitle = ({ id, title }) => {
    const { dispatch } = useContext(DataContext);
    const [text, setText] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    const handleClick = (e) => {
        e.stopPropagation();
        setIsEditing(true);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        dispatch({
            type: 'EDIT_TITLE',
            payload: {
                listId: id,
                title: text
            }
        });
        
        setIsEditing(false);
    };

    const handleBlur = (e) => {
        e.stopPropagation();
        handleSubmit(e);
    };

    return (
        <div className="board-title" onClick={(e) => e.stopPropagation()}>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <input
                        autoFocus
                        type="text"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onBlur={handleBlur}
                        onClick={(e) => e.stopPropagation()}
                    />
                </form>
            ) : (
                <h3 onClick={handleClick}>{title}</h3>
            )}
        </div>
    );
};

export default BoardTitle;