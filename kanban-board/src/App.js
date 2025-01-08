import logo from './logo.svg';
import './App.scss';
import Header from './components/Header';
import Board from './components/Board';
import Button from './components/Button';
import React, { useContext, useState } from 'react';
import { DataContext } from './context/store';
import {DragDropContext} from 'react-beautiful-dnd';
import {closestCorners, DndContext} from "@dnd-kit/core";

const  App = ()  => {
  const {store} = useContext(DataContext)
  return (
    <DndContext collisionDetection={closestCorners}>
    <div>
      {/* {val} */}
      <Header/>
        <div className='container'>
          {store.listIds.map(id => {
            const data = store.lists[id]
            return <Board key={id} data={data}/>
          })}
          <Button list/>
        </div>
    </div>
    </DndContext>
  );
}

export default App;
