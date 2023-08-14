import { useContext } from 'react';
import './App.css';
import ChildArea from './components/childArea';
import demoInfoContext from './main';

const App = () => {
  const demoInfo = useContext(demoInfoContext);
  return (
    <div className="App">
      <h1>useContext</h1>
      <p>{demoInfo.name}</p>
      <p>{demoInfo.age}</p>
      <p>{demoInfo.prefecture}</p>
      <ChildArea />
    </div>
  )
}

export default App;
