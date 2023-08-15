import { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    default:
      return state;
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div className="App">
      <h2>useReducer</h2>
      <p>カウント: {state}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  )
}

export default App;
