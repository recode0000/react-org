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
      <h2>React Hooks (UseState)</h2>
      <input value={text} onChange={onChangeText} />
      <button onClick={onClickOpen}>{open ? ('非表示') : ('表示')}</button>
      <ChildArea visible={open} />
    </div>
  );
}

export default App;
