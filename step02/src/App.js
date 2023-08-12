import { useState } from 'react';
import ChildArea from './components/childArea';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  }

  const onClickOpen = () => setOpen(!open);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} />
    </div>
  );
}

export default App;
