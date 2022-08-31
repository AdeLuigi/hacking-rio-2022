import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import api from './services/api'

function App() {
  const [users, setUsers] = useState([])
  
  useEffect(() => {
      async function getUsers(params) {
        const users = await api.get('/user')
        setUsers(users.data)
        console.log(users.data)
      }
      getUsers();
  },[])
  return (
    <div className="App">
      <header className="App-header">
          {
            users.map((user) => <p>{user.name}</p>)
          }
      </header>
    </div>
  );
}

export default App;
