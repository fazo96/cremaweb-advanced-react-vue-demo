import React from 'react'

function TodoList(props) {
  return <ul>
    {props.todos.length === 0 && 'Nessun TODO!'}
    {props.todos.map(t => (
      <li key={t.id}>
        {t.title}
        <button onClick={() => props.removeTodo(t.id)}>Rimuovi</button>
      </li>
    ))}
  </ul>
}

export default TodoList
