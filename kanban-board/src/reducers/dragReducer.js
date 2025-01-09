export const dragReducer = (state, action) => {
  switch (action.type) {
    case 'MOVE_CARD': {
      const { source, destination } = action.payload;
      
      if (!destination) return state;
      
      // Get source and destination lists
      const sourceList = state.lists[source.droppableId];
      const destList = state.lists[destination.droppableId];
      
      // Ensure lists exist
      if (!sourceList || !destList) {
        console.error('Invalid source or destination list');
        return state;
      }

      // Ensure cards arrays exist
      if (!Array.isArray(sourceList.cards) || !Array.isArray(destList.cards)) {
        console.error('Invalid cards array');
        return state;
      }

      // Create new array of cards
      const sourceCards = [...sourceList.cards];
      const destCards = source.droppableId === destination.droppableId 
        ? sourceCards 
        : [...destList.cards];

      // Remove card from source
      const [movedCard] = sourceCards.splice(source.index, 1);

      // Insert card into destination
      destCards.splice(destination.index, 0, movedCard);

      const newState = {
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

      return newState;
    }
    
    case 'EDIT_CARD': {
      const { listId, cardId, index, text } = action.payload;
      const list = state.lists[listId];
      
      if (!list || !Array.isArray(list.cards)) {
        return state;
      }

      const newCards = [...list.cards];
      newCards[index] = { ...newCards[index], title: text };
      
      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...list,
            cards: newCards
          }
        }
      };
    }

    case 'DELETE_CARD': {
      const { listId, cardId } = action.payload;
      const list = state.lists[listId];
      
      if (!list || !Array.isArray(list.cards)) {
        return state;
      }

      const newCards = list.cards.filter(card => card.id !== cardId);
      
      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...list,
            cards: newCards
          }
        }
      };
    }

    case 'EDIT_TITLE': {
      const { listId, title } = action.payload;
      const list = state.lists[listId];
      
      if (!list) {
        return state;
      }
      
      return {
        ...state,
        lists: {
          ...state.lists,
          [listId]: {
            ...list,
            title
          }
        }
      };
    }

    case 'MOVE_LIST': {
      const { source, destination } = action.payload;
      
      if (!destination || source.index === destination.index) {
        return state;
      }
      
      const newListIds = [...state.listIds];
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