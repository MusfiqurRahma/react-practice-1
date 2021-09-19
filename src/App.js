import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadUsers></LoadUsers>
      <MyComponent brand ='apple' price='1900000'></MyComponent>
      <MyComponent brand ='microsoft' price='160000'></MyComponent>
      <MyComponent brand ='google' price='1500000'></MyComponent>
      <MyComponent brand ='Youtube' price='200000'></MyComponent>
    </div>
  );
}
function LoadUsers() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])
  return (
    <div>
      <h1>Load Users:{users.length}</h1>
      {
      users.map(user=><User name={user.name} phone={user.phone}></User>)
      }
    </div>
  )
}
const userStyle = {
  color: 'white',
  backgroundColor: '#1f1643',
  border: "3px solid blue",
  margin: '20px',
  borderRadius:'15px'
}
function User(props) {
  return (
    <div style={userStyle}>
      <h2>Name:{props.name}</h2>
      <h3>Call Me Beiby:{props.phone}</h3>
    </div>
  )
}

function MyComponent(props) {
  const compoStyle ={
    backgroundColor:'skyblue',
    color: 'black',
    border: '3px solid blue',
    padding: '10px',
    margin: '30px',
    borderRadius:'15px'
  }
  const [points,setPoints]=useState(1)
  const handlePoint = () => {
    const newPoints = points * 2;
    setPoints(newPoints);
 }
  return (
    <div style={compoStyle}>
      <h2>Yo Yo Mamma!!{props.brand}</h2>
      <h4>Asking Money,{props.price} My Points:{points}</h4>
      <button onClick={handlePoint}>Add Points</button>
      <h5 style={{color:'blue',fontWeight:'bold'}}>I can write My own Component</h5>
    </div>
  )
}
export default App;
