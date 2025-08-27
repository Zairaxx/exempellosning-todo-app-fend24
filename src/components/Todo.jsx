const Todo = ({todo, index, deleteTodo, completeTodo}) => {

    return(
        <li key={index} className="todo">
          <h2 className={todo.completed ? "completed" : undefined}>{todo.title}</h2>
          
          {!todo.completed && <>
            <p>{todo.description}</p>
            <button onClick={() => completeTodo(index)}>Complete</button>
          </>}

          <button onClick={() => deleteTodo(index)}>X</button>
          <p>Status: {todo.completed ? "Completed" : "Not completed"}</p>
        </li>
    )
}

export default Todo