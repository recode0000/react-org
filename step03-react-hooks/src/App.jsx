import { useLocalStorage } from 'react';
import useLocalStorage from './useLocalStorage';
import './App.css';

const App = () => {
  const [age, setAge] = useLocalStorage('age', 20);

  return (
    <div className="App">
      <h2>カスタムフック</h2>
      <p>{age}</p>
      <button onClick={() => setAge(25)}>年齢</button>
    </div>
  );
}

export default App;
