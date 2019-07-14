import React from 'react'

class TodoCreator extends React.Component {
  state = { title: '' }

  render() {
    return <div>
      <input
        value={this.state.title}
        onChange={this.updateTitle}
      />
      <button onClick={this.createTodo}>Crea</button>
    </div>
  }

  createTodo = () => {
    this.props.createTodo({ title: this.state.title })
    this.setState({ title: '' })
  }

  updateTitle = event => {
    this.setState({ title: event.target.value })
  }

}

export default TodoCreator
