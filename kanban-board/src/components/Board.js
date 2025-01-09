import React from "react";
import { useSortable } from '@dnd-kit/sortable';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import BoardTitle from "./BoardTitle";
import Card from "./Card";
import Button from "./Button";
import more_horiz from "../images/more_horiz.svg";
import "../sass/Board.scss";

const Board = ({ data, index }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging
  } = useSortable({
    id: data.id,
    data: {
      type: 'list',
      index,
    }
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,  // Add opacity for better drag feedback
  };

  return (
    <div 
      ref={setNodeRef}
      style={style}
      className={`board ${isDragging ? 'is-dragging' : ''}`}
    >
      <div 
        className="board__title"
        {...attributes}
        {...listeners}
      >
        <BoardTitle id={data.id} title={data.title} />
        <div className="menu">
          <img src={more_horiz} alt="menu" />
        </div>
      </div>
      <div className="board__content">
        <SortableContext 
          items={data.cards?.map(card => card.id) || []}  // Add null check
          strategy={verticalListSortingStrategy}
        >
          {data.cards?.map((card, cardIndex) => (  // Add null check
            <Card 
              key={card.id} 
              item={card} 
              index={cardIndex} 
              listId={data.id}
            />
          ))}
        </SortableContext>
        <Button id={data.id} />
      </div>
    </div>
  );
};

export default Board;