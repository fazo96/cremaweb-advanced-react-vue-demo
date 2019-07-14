import React from 'react'

// Il Provider ci serve per collegare lo store Redux a React
import { Provider } from 'react-redux'

// Carico il mio store di Redux per questa applicazione
import store from './store'

// Carico componenti React
import Todos from './components/Todos'
import TodosContainer from './containers/TodosContainer'

function App() {
  return ( 
    <Provider store={store}>
      <h1>React + Redux Demo!</h1>
      <p>Questa demo è pensata per mostrare come funziona Redux a chi non lo conosce</p>
      <p>Permette anche un semplice confronto tra implementazioni Redux e non-Redux</p>
      <h2>Gestione TODO senza Redux</h2>
      <Todos />
      <h2>Gestione TODO con Redux</h2>
      <TodosContainer />
    </Provider>
  );
}

export default App;
