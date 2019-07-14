import React from 'react'
import { connect } from 'react-redux'

// Importo azioni
import { addTodo, removeTodo } from '../actions/todo'

// Importo componenti
import TodoList from '../components/TodoList'
import TodoCreator from '../components/TodoCreator'

// Il mio effettivo componente
function TodosContainer(props) {
  return <div>
    <TodoList
      todos={props.todos}
      removeTodo={props.removeTodo}
    />
    <TodoCreator createTodo={props.addTodo} />
  </div>
}

// Mappatura da STATO REDUX a PROP del COMPONENTE

// serve a LEGGERE LO STATO REDUX dal mio componente

function mapStateToProps(state) {
  return {
    todos: state.todos.list,
  }
}

// Mappatura da AZIONI REDUX a PROP del COMPONENTE
// per effettuarne il dispatch

// serve a LANCIARE AZIONI REDUX dal mio componente

function mapDispatchToProps(dispatch) {
  return {
    addTodo: (todo) => dispatch(addTodo(todo)),
    removeTodo: id => dispatch(removeTodo(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer)
