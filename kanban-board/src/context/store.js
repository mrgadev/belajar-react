import React, { createContext, useReducer } from "react";
import { v4 as uuid } from 'uuid';

const cards = [
    {
        id: 'card-1',
        title: 'Learning how to learn'
    },
    {
        id: 'card-2',
        title: 'Learning how to cook'
    },
    {
        id: 'card-3',
        title: 'Learning how to poop'
    }, 
];

const initialState = {
    lists: {
        "list-1": {
            id: "list-1",
            title: "Backlog",
            cards: cards
        },
        "list-2": {
            id: "list-2",
            title: "Doing",
            cards: []
        },
        "list-3": {
            id: "list-3",
            title: "Done",
            cards: []
        }
    },
    listIds: ["list-1", "list-2", "list-3"]
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'EDIT_TITLE': {  // Changed from CHANGE_TITLE
            const { listId, title } = action.payload;  // Changed from id, text
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [listId]: {
                        ...state.lists[listId],
                        title: title
                    }
                }
            };
        }
        case 'DELETE_CARD': {
            const { listId, cardId } = action.payload;
            const newCards = state.lists[listId].cards.filter(card => card.id !== cardId);
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [listId]: {
                        ...state.lists[listId],
                        cards: newCards
                    }
                }
            };
        }
        case 'EDIT_CARD': {
            const { listId, cardId, index, text } = action.payload;  // Changed from idx
            const newCards = [...state.lists[listId].cards];
            newCards[index] = { ...newCards[index], title: text };
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [listId]: {
                        ...state.lists[listId],
                        cards: newCards
                    }
                }
            };
        }
        case 'ADD_CARD': {
            const { listId, text } = action.payload;
            const newCard = {
                id: `card-${uuid()}`,
                title: text
            };
            return {
                ...state,
                lists: {
                    ...state.lists,
                    [listId]: {
                        ...state.lists[listId],
                        cards: [...state.lists[listId].cards, newCard]
                    }
                }
            };
        }
        case 'ADD_LIST': {
            const { text } = action.payload;
            const id = `list-${uuid()}`;
            return {
                listIds: [...state.listIds, id],
                lists: {
                    ...state.lists,
                    [id]: {
                        id,
                        title: text,
                        cards: []
                    }
                }
            };
        }
        case 'MOVE_CARD': {
            const { source, destination } = action.payload;
            
            // If dropped outside or same position
            if (!destination) return state;
            if (
                source.droppableId === destination.droppableId &&
                source.index === destination.index
            ) {
                return state;
            }

            // Get source and destination lists
            const sourceList = state.lists[source.droppableId];
            const destList = state.lists[destination.droppableId];
            
            // Create new array of cards
            const sourceCards = Array.from(sourceList.cards);
            const destCards = source.droppableId === destination.droppableId 
                ? sourceCards 
                : Array.from(destList.cards);

            // Remove card from source
            const [movedCard] = sourceCards.splice(source.index, 1);

            // Insert card into destination
            destCards.splice(destination.index, 0, movedCard);

            return {
                ...state,
                lists: {
                    ...state.lists,
                    [source.droppableId]: {
                        ...sourceList,
                        cards: sourceCards,
                    },
                    [destination.droppableId]: {
                        ...destList,
                        cards: destCards,
                    },
                },
            };
        }
        case 'MOVE_LIST': {  // Added this case
            const { source, destination } = action.payload;
            
            if (!destination) return state;
            if (source.index === destination.index) return state;
            
            const newListIds = Array.from(state.listIds);
            const [movedList] = newListIds.splice(source.index, 1);
            newListIds.splice(destination.index, 0, movedList);
            
            return {
                ...state,
                listIds: newListIds
            };
        }
        default:
            return state;
    }
};

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, initialState);

    // Updated wrapper functions to match the new action types
    const contextValue = {
        store,
        dispatch,
        changeTitle: (listId, title) => {
            dispatch({ type: 'EDIT_TITLE', payload: { listId, title } });
        },
        cardDelete: (listId, cardId) => {
            dispatch({ type: 'DELETE_CARD', payload: { listId, cardId } });
        },
        cardEdit: (listId, cardId, index, text) => {
            dispatch({ type: 'EDIT_CARD', payload: { listId, cardId, index, text } });
        },
        cardAdd: (listId, text) => {
            dispatch({ type: 'ADD_CARD', payload: { listId, text } });
        },
        listAdd: (text) => {
            dispatch({ type: 'ADD_LIST', payload: { text } });
        }
    };

    return (
        <DataContext.Provider value={contextValue}>
            {children}
        </DataContext.Provider>
    );
};