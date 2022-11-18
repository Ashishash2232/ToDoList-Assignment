import React,{ useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodoAction, RemoveTodoAction } from "./actions/TodoAction";
// import { useStore } from "react-redux";
//import { AddTodoAction, RemoveTodoAction } from "./Actions/TodoActions";
import "./App.css";

function App() {
  const [todo, setTodo] = useState();

  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;



  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo));
  };

  const removeHandler = (t) => {
    console.log(t);
    dispatch(RemoveTodoAction(t));
  };

  return (
    <div className="App">
      <header className="App-header">
       
        <h2 style={{marginRight:55}}>Enter a Todo List</h2>
    
        <form onSubmit={handleSubmit} style=
        {{
          marginTop:30
        }}>
          <input
            placeholder="Enter a todo"
            style={{
              
              width: 350,
              padding: 10,
              borderRadius: 20,
              border: "none",
              fontSize: 20,
            }}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
            }}
            className="go"
          >
            GO
          </button>
          <ul className="allTodos">
            {todos &&
              todos.map((t) => (
                <li key={t} className="singleTodo">
                  <span className="todoText">{t}</span>
                  <button
                    type="button"
                    style={{
                      borderRadius: 25,
                      padding: 10,
                      border: "1px solid white",
                      color: "white",
                      backgroundColor: "orangered"
                    }}
                    onClick={() => removeHandler(t)}
                  >
                    delete
                  </button>
                </li>
              ))}
          </ul>
        </form>
      </header>
    </div>
  );
}

export default App;