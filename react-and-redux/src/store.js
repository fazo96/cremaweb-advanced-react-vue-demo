import { createStore } from 'redux'

// Importo i miei Reducer
import todosReducer from './reducers/todos'

// Il rootReducer è la composizione di tutti i miei Reducer
function rootReducer(state, action) {
  return {
    // Affido "todos" in gestione a "todosReducer"
    todos: todosReducer(state ? state.todos : undefined, action)
  }
}

// Creo il mio store
const store = createStore(
  rootReducer, // passo il mio Reducer

  // Questa riga è per attivare gli strumenti di sviluppo REDUX
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
