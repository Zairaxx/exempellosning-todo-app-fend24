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
      
    }])

  return(
    <>
      <h1>Conditional Rendering & Component Lifecycle</h1>
      <TestComponent testData={testData}/>
    </>
  )
}

export default App
