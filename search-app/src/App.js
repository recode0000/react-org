import "./App.css";
import { useEffect, useRef, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const ref = useRef();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((data) => setUsers(data));
  }, []);

  //検索機能の追加
  const handleSearch = () => {
    //フィルタリング機能
    setUsers(
      users.filter((user) =>
        user.name.toLowerCase().includes(ref.current.value)
      )
    );
  };

  return (
    <div className="App">
      <div className="main">
        <h2>検索アプリ</h2>
        <input type="text" ref={ref} onChange={() => handleSearch()} />
        <div className="content">
          {users.map((user) => (
            <div className="box" key={user.id}>
              <h3>{user.name}</h3>
              <hr />
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;