import { createAction } from 'redux-actions'

// Creazione costanti per codici AZIONI
export const ADD_TODO = 'todos/ADD'
export const REMOVE_TODO = 'todos/REMOVE'

// Creazione di una AZIONE
export function addTodo (todo) {
  return {
    type: ADD_TODO,
    payload: { todo }
  }
}

// Utilizzo della libreria redux-actions per ridurre il boilerplate
// che si presenta creando le azioni

export const removeTodo = id => createAction(REMOVE_TODO)({ id })
