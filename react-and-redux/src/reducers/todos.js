import { ADD_TODO, REMOVE_TODO } from "../actions/todo"

function getInitialState() {
  return {
    list: []
  }
}

export default function todoReducer(state, action) {
  switch (action.type) {
    case ADD_TODO: return {
      ...state,
      list: state.list.concat({
        ...action.payload.todo,
        // Imposto come ID l'ID più alto che ho in lista + 1
        id: Math.max(...state.list.map(t => t.id).concat(0)) + 1
      })
    }
    case REMOVE_TODO: return {
      ...state,
      list: state.list.filter(x => x.id !== action.payload.id)
    }
    default: return state || getInitialState()
  } 
}
