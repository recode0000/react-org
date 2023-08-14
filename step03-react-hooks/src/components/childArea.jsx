import { useContext } from 'react';
import demoInfoContext from '../main';

const ChildArea = () => {
  const demoInfo = useContext(demoInfoContext);
  return (
    <div className="child">
      <h2>子コンポーネント</h2>
      <p>{demoInfo.name}</p>
      <p>{demoInfo.age}</p>
      <p>{demoInfo.prefecture}</p>
    </div>
  )
}

export default ChildArea;
