import { useSelector, useDispatch } from 'react-redux';
import Posts from './components/Posts'

function App () {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: 'INCREASE_COUNT' });
  };
  const decrease = () => {
    dispatch({ type: 'DECREASE_COUNT' });
  };
  return (
    <>
      <div>Count:{count}</div>
      <button onClick={increase}>Up</button>
      <button onClick={decrease}>Down</button>
      <Posts />
    </>
  );
}
export default App;