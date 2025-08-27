import { useState, useEffect } from 'react'
import './App.css'
import TestComponent from './components/TestComponent'

function App() {

  const [showList, setShowList] = useState(false);
  const [users,setUsers] = useState([])
  //Mounting


  const getUsers = () => {
    
  }

  useEffect(() => {
    if(!sessionStorage.getItem("users")) {
      const fetchData = async () => {
          let response = await fetch("https://randomuser.me/api/?results=5");
          let json = await response.json();
          setUsers(json.results);
      }
        fetchData();
      }
      else {
        setUsers(sessionStorage.getItem("users"))
      }
  }, [])

  useEffect(() => {
    localStorage.setItem("users", users);
  },[users])
  

  return(
    <>
    <button onClick={() => {setShowList(!showList)}}>Toggle List</button>
      <h1>Conditional Rendering & Component Lifecycle</h1>

      {showList && <TestComponent users={users}/>}
    </>
  )
}

export default App
