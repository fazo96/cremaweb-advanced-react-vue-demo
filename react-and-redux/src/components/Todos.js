import React from 'react'

// Importo componenti
import TodoList from '../components/TodoList'
import TodoCreator from '../components/TodoCreator'

// Il mio effettivo componente
class Todos extends React.Component {
  state = { todos: [] }

  createTodo = (todo) => this.setState({
    todos: this.state.todos.concat({
      ...todo,
      // Imposto come ID l'ID più alto che ho in lista + 1
      id: Math.max(...this.state.todos.map(t => t.id).concat(0)) + 1
    })
  })

  removeTodo = id => this.setState({
    todos: this.state.todos.filter(t => t.id !== id)
  })

  render() {
    return <div>
      <TodoList
        todos={this.state.todos}
        removeTodo={this.removeTodo}
      />
      <TodoCreator createTodo={this.createTodo} />
    </div>

  }
}

export default Todos
