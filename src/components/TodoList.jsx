import Todo from "./Todo"
import { useState } from 'react'


const TodoList = () => {
    
    const [todos,setTodos] = useState([
        {
          title: "Todo #1",
          description: "Lorem ipsum",
          completed: true
        },{
          title: "Todo #2",
          description: "Lorem ipsum",
          completed: true
        },{
          title: "Todo #3",
          description: "Lorem ipsum",
          completed: false
        },
        {
          title: "Todo #4",
          description: "Lorem ipsum",
          completed: false
        },
        {
          title: "Todo #5",
          description: "Lorem ipsum",
          completed: false
        }
    ])
      const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const addTodo = () => {
    const newTodo = {
      title,
      description,
      completed: false
    }

    setTodos([...todos, newTodo])

  }
    
  const deleteTodo = (i) => {
    //Filtrera ut den valda todo:n från array i state
    let filteredTodos = todos.filter((todo,index) => index !== i);
    setTodos(filteredTodos);
  }

  const completeTodo = (i) => {
    //Hitta index, och ändra completed till true
    let updatedTodos = [...todos];
    updatedTodos[i].completed = true;

    setTodos(updatedTodos);

  }

    return(
        <>
        <h1>Todo app</h1>
            <label htmlFor="title">Titel:</label>
            <input type="text" id="title" onChange={(e) => {setTitle(e.target.value)}}/>
            <br/>
            <label htmlFor="title">Beskrivning:</label>
            <input type="text" id="description" onChange={(e) => {setDescription(e.target.value)}}/>
            <br/>
            <button onClick={addTodo}>Lägg till</button>
        <ul>
        {todos.map((todo, index) => <Todo todo={todo} index={index} deleteTodo={deleteTodo} completeTodo={completeTodo} key={index}/>)}
      </ul>
      </>
    )
}

export default TodoList