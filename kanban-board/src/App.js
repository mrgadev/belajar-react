import React, { useContext } from 'react';
import { DndContext, closestCorners, pointerWithin, getFirstCollision } from "@dnd-kit/core";
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable';
import { DataContext } from './context/store';
import Header from './components/Header';
import Board from './components/Board';
import Button from './components/Button';
import './App.scss';

const App = () => {
  const { store, dispatch } = useContext(DataContext);

  const handleDragEnd = (event) => {
    const { active, over } = event;
    
    if (!over) return;

    // Handle list dragging
    if (active.data.current?.type === 'list') {
      if (active.id !== over.id) {
        dispatch({
          type: 'MOVE_LIST',
          payload: {
            source: { index: active.data.current.index },
            destination: { index: over.data.current.index }
          }
        });
      }
      return;
    }

    // Handle card dragging
    if (active.data.current?.type === 'card') {
      const sourceListId = active.data.current.listId;
      // Find the list that was dropped on
      const overListId = over.data.current?.listId || over.data.current?.id || over.id;
      
      let overIndex;
      if (over.data.current?.type === 'card') {
        overIndex = over.data.current.index;
      } else {
        // If dropping directly on a list, place at the end
        const targetList = store.lists[overListId];
        overIndex = targetList.cards.length;
      }

      dispatch({
        type: 'MOVE_CARD',
        payload: {
          source: {
            droppableId: sourceListId,
            index: active.data.current.index,
          },
          destination: {
            droppableId: overListId,
            index: overIndex,
          },
        },
      });
    }
  };

  return (
    <DndContext 
      collisionDetection={pointerWithin}
      onDragEnd={handleDragEnd}
    >
      <div>
        <Header />
        <div className="container">
          <SortableContext 
            items={store.listIds}
            strategy={horizontalListSortingStrategy}
          >
            {store.listIds.map((id, index) => {
              const data = store.lists[id];
              return (
                <Board 
                  key={id} 
                  data={data} 
                  index={index}
                />
              );
            })}
          </SortableContext>
          <Button list />
        </div>
      </div>
    </DndContext>
  );
};

export default App; 