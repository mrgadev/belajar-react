import {combineReducers, createStore} from "redux"
import {composeWithDevTools} from "redux-devtools-extension"
// reducer
const initialState = {
    todos: [
        {
            id: 1,
            title: 'Tugas pertama'
        }
    ]
}
const listReducer = (state = initialState,action) => {
    const {type} = action
    switch(type) {
        default:
            return state
    }
}

// combine reducer
const rootReducer = combineReducers({
    lists: listReducer
})
const store = createStore(rootReducer, composeWithDevTools)
export default store