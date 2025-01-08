import React from "react";
import {Droppable} from 'react-beautiful-dnd';
import '../sass/Board.scss'
import BoardTitle from "./BoardTitle";
import Card from "./Card";
import Button from "./Button";
import more_horiz from '../images/more_horiz.svg'
const Board = ({data,id}) => {
    return(
        <Droppable droppableId={data.id}>
            {(provided) => (
            <div className="board" reference={provided.innerRef} {...provided.droppableProps}>
                <div className="board__title">
                    <BoardTitle id={data.id} title={data.title}/>
                    <div className="menu">
                        <img src={more_horiz}/>
                    </div>
                </div>
                <div>
                    {data.cards.map((card, index) => 
                        <Card key={card.id} item={card} index={index} id={data.id}/>
                    )}
                    {provided.placeholder}
                    <Button id={data.id}/>
                </div>
            </div>
            )}
        </Droppable>
    )
}

export default Board;