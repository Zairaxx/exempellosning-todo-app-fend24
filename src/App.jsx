import { useState } from 'react'
import './App.css'
import TestComponent from './components/TestComponent'

function App() {

  const [testData, setTestData] = useState([{
    name:"Brandon",
    age: 31,
    location: {
      city: "Stockholm",
      country: "Sweden"
    }
    },
    {
      name:"Oliver",
      age:22,
      location: {
        city: "Amsterdam",
        country: "Netherlands"
      }
    },{
      name:"Ofelia",
      age:44,
      //Här saknas location objektet.
    }])
  const [showList, setShowList] = useState(false);
  
  return(
    <>
    <button onClick={() => {setShowList(!showList)}}>Toggle List</button>
      <h1>Conditional Rendering & Component Lifecycle</h1>
      
      {showList && <TestComponent testData={testData}/>}
    </>
  )
}

export default App
